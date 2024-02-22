import { useState } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage"
import { Routes, Route } from "react-router-dom";

const Main = () => {

    const [availableTimes, setAvailableTimes] = useState([ "17:00", "18:00", "19:00", "20:00", "21:00", "22:00" ]);

    const bookTime = slot => {
        setAvailableTimes(times => times.filter(t => t != slot));
    };

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/book-a-table"
                    element={
                        <BookingPage
                            availableTimes={ availableTimes }
                            bookTime= { bookTime }
                        />}
                />
            </Routes>
        </main>
    );
};

export default Main;
