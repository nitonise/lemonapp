import HomePage from "./HomePage";
import ReservationPage from "./ReservationPage"
import { Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/reserve-a-table" element={<ReservationPage />}></Route>
            </Routes>
        </main>
    );
};

export default Main;
