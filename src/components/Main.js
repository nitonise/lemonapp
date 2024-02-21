import HomePage from "./HomePage";
import BookingPage from "./BookingPage"
import { Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/book-a-table" element={<BookingPage />}></Route>
            </Routes>
        </main>
    );
};

export default Main;
