import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

describe("Renders fieldsets", () => {
    test("Setup", () => {
        render(
            <BookingForm
                availableTimes={[]}
                updateTimes={jest.fn()}
            />
        );

        const headingElement = screen.getByText(/setup/i);
        expect(headingElement).toBeInTheDocument();
    })

    test("Personal info", () => {
        render(
            <BookingForm
                availableTimes={[]}
                updateTimes={jest.fn()}
            />
        );

        const headingElement = screen.getByText(/personal info/i);
        expect(headingElement).toBeInTheDocument();
    })
});

describe("Submits the form", () => {
    test("Invalid form", () => {
        const submitForm = jest.fn();

        render(
            <BookingForm
                availableTimes={[]}
                updateTimes={jest.fn()}
                submitForm = {submitForm}
            />
        );

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton)

        expect(submitForm).toHaveBeenCalledTimes(0);
    });

    test("Valid form", () => {
        const submitForm = jest.fn();

        render(
            <BookingForm
                availableTimes={["10:00"]}
                updateTimes={jest.fn()}
                submitForm = {submitForm}
            />
        );

        const curDate = new Date().toISOString().substr(0, 10);
        fireEvent.change(screen.getByLabelText(/choose date/i), {target: {value: curDate}});
        fireEvent.change(screen.getByLabelText(/choose time/i), {target: {value: "10:00"}});
        fireEvent.change(screen.getByLabelText(/number of guests/i), {target: {value: 2}});
        fireEvent.change(screen.getByLabelText(/occasion/i), {target: {value: "Birthday"}});
        fireEvent.change(screen.getByLabelText(/first name/i), {target: {value: "John"}});
        fireEvent.change(screen.getByLabelText(/last name/i), {target: {value: "Doe"}});
        fireEvent.change(screen.getByLabelText(/email/i), {target: {value: "jd@jd.jd"}});

        fireEvent.click(screen.getByRole("button"))

        expect(submitForm).toHaveBeenCalledTimes(1);
    });
});
