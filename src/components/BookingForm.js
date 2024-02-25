import { useState } from "react";

const validateDate = date => {
    const curDate = new Date().toISOString().substr(0, 10);
    return date >= curDate;
};

const validateTime = time => {
    return !!time.trim();
};

const validateGuests = num => {
    return num >= 1 && num <= 10;
};

const validateOccasion = val => {
    return !!val.trim();
};

const validateFirstName = name => {
    return !!name.trim() && name.length <= 50;
};

const validateLastName = name => {
    return !!name.trim() && name.length <= 50;
};

const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return !!email.trim() && email.match(emailRegex);
}

const ErrMessage = ({ text }) => {
    return <strong className="err-msg highlight">*{ text }</strong>;
};

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
    const [time, setTime] = useState({ value: "", isTouched: false, });
    const [date, setDate] = useState({ value: "", isTouched: false, });
    const [guests, setGuests] = useState({ value: "", isTouched: false, });
    const [occasion, setOccasion] = useState({ value: "", isTouched: false, });
    const [firstName, setFirstName] = useState({ value: "", isTouched: false, });
    const [lastName, setLastName] = useState({ value: "", isTouched: false, });
    const [email, setEmail] = useState({ value: "", isTouched: false, });
    const [tel, setTel] = useState({ value: "", isTouched: false, });

    const isFormValid = () => {
        return validateDate(date.value)
            && validateTime(time.value)
            && validateGuests(guests.value)
            && validateOccasion(occasion.value)
            && validateFirstName(firstName.value)
            && validateLastName(lastName.value)
            && validateEmail(email.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (isFormValid()) {
            submitForm({
                date: date.value,
                time: time.value,
                guests: guests.value,
                occasion: occasion.value,
                firstName: firstName.value,
                email: email.value,
                tel: tel.value,
            });
        }
    };

    const currentDate = new Date().toISOString().substr(0, 10);

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
                    min={ currentDate }
                    required
                    value={ date.value }
                    onChange={e => {
                        setDate({ ...date, value: e.target.value });
                        updateTimes(date);
                    }}
                    onBlur = { () => setDate({ ...date, isTouched: true }) }
                />
                {(
                    date.isTouched && !validateDate(date.value)
                    ? <ErrMessage text="Indicate the date, set current or later" />
                    : null
                )}

                <label
                    className="booking-fm__lbl section-category"
                    htmlFor="res-time"
                >
                    Choose time
                </label>
                <select
                    className="booking-fm__in call-to-action"
                    id="res-time"
                    value={ time.value }
                    onChange={ e => setTime({ ...time, value: e.target.value }) }
                    onBlur={ () => setTime({ ...time, isTouched: true }) }
                    required
                >
                    <option value=""></option>
                    { availableTimes.map(t => <option key={t}>{t}</option>) }
                </select>
                {(
                    time.isTouched && !validateTime(time.value)
                    ? <ErrMessage text="Indicate the time, choose among available ones" />
                    : null
                )}

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
                    value={ guests.value }
                    required
                    onChange={ e => setGuests({ ...guests, value: e.target.value }) }
                    onBlur={ () => setGuests({ ...guests, isTouched: true }) }
                />
                {(
                    guests.isTouched && !validateGuests(guests.value)
                    ? <ErrMessage text="Indicate the number of guests, from 1 to 10" />
                    : null
                )}


                <label
                    className="booking-fm__lbl section-category"
                    htmlFor="occasion"
                >
                    Occasion
                </label>
                <select
                    className="booking-fm__in call-to-action"
                    id="occasion"
                    value={ occasion.value }
                    onChange={ e => setOccasion({ ...occasion, value: e.target.value }) }
                    required
                    onBlur={ () => setOccasion({ ...occasion, isTouched: true }) }
                >
                    <option value=""></option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                {(
                    occasion.isTouched && !validateOccasion(occasion.value)
                    ? <ErrMessage text="Indicate the occasion, choose among available ones" />
                    : null
                )}

            </fieldset>
            <fieldset className="booking-fm__field">
                <legend className="section-title-up">Personal info</legend>
                <label
                    className="booking-fm__lbl section-category"
                    htmlFor="res-name"
                >
                        First Name
                </label>
                <input
                    className="booking-fm__in call-to-action"
                    type="text"
                    id="res-name"
                    value={ firstName.value }
                    onChange={ e => setFirstName({ ...firstName, value: e.target.value }) }
                    onBlur={ () => setFirstName({ ...firstName, isTouched: true }) }
                    maxLength="50"
                    required
                />
                {(
                    firstName.isTouched && !validateFirstName(firstName.value)
                    ? <ErrMessage text="Indicate your first name" />
                    : null
                )}

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
                    value={ lastName.value }
                    onChange={ e => setLastName({ ...lastName, value: e.target.value }) }
                    onBlur={ () => setLastName({ ...lastName, isTouched: true }) }
                    maxLength="50"
                    required
                />
                {(
                    lastName.isTouched && !validateLastName(lastName.value)
                    ? <ErrMessage text="Indicate your last name" />
                    : null
                )}

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
                    value={ email.value }
                    onChange={ e => setEmail({ ...email, value: e.target.value }) }
                    onBlur={ () => setEmail({ ...email, isTouched: true }) }
                    required
                />
                {(
                    email.isTouched && !validateEmail(email.value)
                    ? <ErrMessage text="Indicate your email" />
                    : null
                )}

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
                    value={ tel.value }
                    onChange={ e => setTel({ ...tel, value: e.target.value }) }
                    onBlur = { () => setTel({ ...tel, isTouched: true }) }
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
