import BookingForm from './BookingForm';

const BookingPage = (props) => {
    return (
        <section className='booking-pg'>
            <h1 className='booking-pg__title title'>Booking Form</h1>
            <BookingForm {...props} />
        </section>
    );
};

export default BookingPage;
