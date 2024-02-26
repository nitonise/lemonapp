import { useReducer, useEffect } from 'react';
import HomePage from './HomePage';
import BookingPage from './BookingPage'
import { Routes, Route, useNavigate } from 'react-router-dom';
import useDataApi from '../hooks/useDataApi';
import ConfirmedBooking from './ConfirmedBooking'

const Main = () => {

    const {fetchData, submit, response} = useDataApi();

    const updateTimes = (state, action) => {
        const date = action.type;
        return fetchData(date);
    };

    const initializeTimes = (date) => {
        return fetchData(date);
    };

    const [state, dispatch] = useReducer(updateTimes, new Date(), initializeTimes);

    const navigate = useNavigate();
    const submitForm = (formData) => {
        submit(formData);

        if (response.code === 200) {
            navigate('/booking-confirmed');
        }
    };

    useEffect(() => {
        if (response.code === 500) {
            alert('Oops, something went wrong. Please try submitting the form again. Do not give up!');
        }
    }, [response]);

    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route
                    path='/book-a-table'
                    element={
                        <BookingPage
                            availableTimes ={ state }
                            updateTimes = { date => dispatch({ type: date }) }
                            submitForm = { submitForm }
                        />}
                />
                <Route path='/booking-confirmed' element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

export default Main;
