const BookingForm = () => {
    return (
        <form className="booking-fm">
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
                >
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
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
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
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
                >
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
