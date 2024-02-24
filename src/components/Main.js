import { useReducer } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage"
import { Routes, Route } from "react-router-dom";
import useDataApi from "../hooks/useDataApi";

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
                            onSubmit = { submit }
                        />}
                />
            </Routes>
        </main>
    );
};

export default Main;

