import { useReducer } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage"
import { Routes, Route } from "react-router-dom";

const initializeTimes = (timeArr) => {
    return [ "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", ...timeArr ];
};

const updateTimes = (state, action) => {
    const bookedTime = action.type;
    if (state.some(t => t === bookedTime)) {
        return [...state].filter(time => time !== bookedTime);
    }
    return state;
};

const Main = () => {

    const [state, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/book-a-table"
                    element={
                        <BookingPage
                            availableTimes={ state }
                            updateTimes= { time => dispatch({ type: time }) }
                        />}
                />
            </Routes>
        </main>
    );
};

export default Main;
