import { useReducer, useEffect, useState } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage"
import { Routes, Route, useNavigate } from "react-router-dom";
import useDataApi from "../hooks/useDataApi";
import ConfirmedBooking from "./ConfirmedBooking"

const Main = () => {

    const {fetchData, submit} = useDataApi();

    const updateTimes = (state, action) => {
        const date = action.type;
        return fetchData(date);
    };

    const initializeTimes = (date) => {
        return fetchData(date);
    };

    const [state, dispatch] = useReducer(updateTimes, new Date(), initializeTimes);
    const [notify, setNotify] = useState(false);

    const navigate = useNavigate();
    const submitForm = (formData) => {
        console.log(
            "formData:\n",
            formData
        );

        const res = submit(formData);

        if (res) {
            navigate("/booking-confirmed");
        } else {
            setNotify(true);
        }
    };

    useEffect(() => {
        if (notify) {
            alert("Oops, something went wrong. Please try submitting the form again. Do not give up!");
        }
    }, [notify]);

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/book-a-table"
                    element={
                        <BookingPage
                            availableTimes ={ state }
                            updateTimes = { date => dispatch({ type: date }) }
                            submitForm = { submitForm }
                        />}
                />
                <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

export default Main;
