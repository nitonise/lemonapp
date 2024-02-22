import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test("Renders the BookingForm 'setup' field", () => {
    render(
        <BookingForm
            availableTimes={[]}
            updateTimes={() => {}}
        />
    );

    const headingElement = screen.getByText(/setup/i);
    expect(headingElement).toBeInTheDocument();
})

test("Renders the BookingForm 'personal info' field", () => {
    render(
        <BookingForm
            availableTimes={[]}
            updateTimes={() => {}}
        />
    );

    const headingElement = screen.getByText(/personal info/i);
    expect(headingElement).toBeInTheDocument();
})
