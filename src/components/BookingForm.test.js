import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test("Renders the BookingForm 'setup' field", () => {
    render(
        <BookingForm
            availableTimes={[]}
            updateTimes={jest.fn()}
        />
    );

    const headingElement = screen.getByText(/setup/i);
    expect(headingElement).toBeInTheDocument();
})

test("Renders the BookingForm 'personal info' field", () => {
    render(
        <BookingForm
            availableTimes={[]}
            updateTimes={jest.fn()}
        />
    );

    const headingElement = screen.getByText(/personal info/i);
    expect(headingElement).toBeInTheDocument();
})

test("Form submit triggers updateTimes", () => {
    const updateTimes = jest.fn();

    render(
        <BookingForm
            availableTimes={[]}
            updateTimes={updateTimes}
        />
    );

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton)

    expect(updateTimes).toHaveBeenCalledTimes(1);
})
