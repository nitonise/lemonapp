import { useState } from "react";

const BookingForm = ({ availableTimes, updateTimes }) => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    const cleanup = () => {
        setTime("");
        setDate("");
        setGuests("");
        setOccasion("")
        setName("");
        setLastName("");
        setEmail("");
        setTel("");
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(
            "Submitted:\n",
            date, "\n",
            time, "\n",
            guests, "\n",
            occasion, "\n",
            name, "\n",
            lastName, "\n",
            email, "\n",
            tel
        );

        updateTimes(time);
        cleanup();
    };

    return (
        <form className="booking-fm" onSubmit={ handleSubmit }>
            <fieldset className="booking-fm__field">
                <legend className="section-title-up">Setup</legend>
                <label
                    className="booking-fm__lbl section-category"
                    htmlFor="res-date"
                >
                        Choose date
                </label>
                <input
                    className="booking-fm__in call-to-action"
                    type="date"
                    id="res-date"
                    value={ date }
                    onChange={ e => setDate(e.target.value) }
                />
                <label
                    className="booking-fm__lbl section-category"
                    htmlFor="res-time"
                >
                    Choose time
                </label>
                <select
                    className="booking-fm__in call-to-action"
                    id="res-time"
                    value={ time }
                    onChange={ e => setTime(e.target.value) }
                >
                    <option value=""></option>
                    { availableTimes.map(t => <option key={t}>{t}</option>) }
                </select>
                <label
                    className="booking-fm__lbl section-category"
                    htmlFor="guests"
                >
                    Number of guests
                </label>
                <input
                    className="booking-fm__in call-to-action"
                    type="number"
                    min="1"
                    max="10"
                    id="guests"
                    value={ guests }
                    onChange={ e => setGuests(e.target.value) }
                />
                <label
                    className="booking-fm__lbl section-category"
                    htmlFor="occasion"
                >
                    Occasion
                </label>
                <select
                    className="booking-fm__in call-to-action"
                    id="occasion"
                    value={ occasion }
                    onChange={ e => setOccasion(e.target.value) }
                >
                    <option value=""></option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </fieldset>
            <fieldset className="booking-fm__field">
                <legend className="section-title-up">Personal info</legend>
                <label
                    className="booking-fm__lbl section-category"
                    htmlFor="res-name"
                >
                        Name
                </label>
                <input
                    className="booking-fm__in call-to-action"
                    type="text"
                    id="res-name"
                    value={ name }
                    onChange={ e => setName(e.target.value) }
                />
                <label
                    className="booking-fm__lbl section-category"
                    htmlFor="res-last-name"
                >
                        Last name
                </label>
                <input
                    className="booking-fm__in call-to-action"
                    type="text"
                    id="res-last-name"
                    value={ lastName }
                    onChange={ e => setLastName(e.target.value) }
                />
                <label
                    className="booking-fm__lbl section-category"
                    htmlFor="res-email"
                >
                        Email
                </label>
                <input
                    className="booking-fm__in call-to-action"
                    type="email"
                    id="res-email"
                    value={ email }
                    onChange={ e => setEmail(e.target.value) }
                />
                <label
                    className="booking-fm__lbl section-category"
                    htmlFor="res-tel"
                >
                        Tel (optional)
                </label>
                <input
                    className="booking-fm__in call-to-action"
                    type="tel"
                    id="res-tel"
                    value={ tel }
                    onChange={ e => setTel(e.target.value) }
                />
            </fieldset>
            <input
                className="booking-fm__btn action-btn call-to-action"
                type="submit"
                value="Submit"
            />
        </form>
    );
};

export default BookingForm;
