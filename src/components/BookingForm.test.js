import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm, * as subject from './BookingForm';

describe('Renders fieldsets', () => {
    test('Setup', () => {
        render(
            <BookingForm
                availableTimes={[]}
                updateTimes={jest.fn()}
            />
        );

        const headingElement = screen.getByText(/setup/i);
        expect(headingElement).toBeInTheDocument();
    })

    test('Personal info', () => {
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

describe('Submits the form', () => {
    test('Invalid form', () => {
        const submitForm = jest.fn();

        render(
            <BookingForm
                availableTimes={[]}
                updateTimes={jest.fn()}
                submitForm = {submitForm}
            />
        );

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton)

        expect(submitForm).toHaveBeenCalledTimes(0);
    });

    test('Valid form', () => {
        const submitForm = jest.fn();

        render(
            <BookingForm
                availableTimes={['10:00']}
                updateTimes={jest.fn()}
                submitForm = {submitForm}
            />
        );

        const curDate = new Date().toISOString().substr(0, 10);
        fireEvent.change(screen.getByLabelText(/choose date/i), {target: {value: curDate}});
        fireEvent.change(screen.getByLabelText(/choose time/i), {target: {value: '10:00'}});
        fireEvent.change(screen.getByLabelText(/number of guests/i), {target: {value: 2}});
        fireEvent.change(screen.getByLabelText(/occasion/i), {target: {value: 'Birthday'}});
        fireEvent.change(screen.getByLabelText(/first name/i), {target: {value: 'John'}});
        fireEvent.change(screen.getByLabelText(/last name/i), {target: {value: 'Doe'}});
        fireEvent.change(screen.getByLabelText(/email/i), {target: {value: 'jd@jd.jd'}});

        fireEvent.click(screen.getByRole('button'))

        expect(submitForm).toHaveBeenCalledTimes(1);
    });
});

describe(('Validates date'), () => {
    test('invalid', () => {
        expect(subject.validateDate('0000-00-00')).toBe(false);
    });

    test('valid', () => {
        const curDate = new Date().toISOString().substr(0, 10);
        expect(subject.validateDate(curDate)).toBe(true);
    });
});

describe(('Validates time'), () => {
    test('invalid', () => {
        expect(subject.validateTime('')).toBe(false);
    });

    test('valid', () => {
        expect(subject.validateTime('10:10')).toBe(true);
    });
});


describe(('Validates guests'), () => {
    test('invalid', () => {
        expect(subject.validateGuests(0)).toBe(false);
    });

    test('valid', () => {
        expect(subject.validateGuests(1)).toBe(true);
    });
});

describe(('Validates occasion'), () => {
    test('invalid', () => {
        expect(subject.validateOccasion('')).toBe(false);
    });

    test('valid', () => {
        expect(subject.validateOccasion('Birthday')).toBe(true);
    });
});

describe(('Validates first name'), () => {
    test('invalid', () => {
        expect(subject.validateFirstName(' ')).toBe(false);
    });

    test('valid', () => {
        expect(subject.validateFirstName('John')).toBe(true);
    });
});

describe(('Validates last name'), () => {
    test('invalid', () => {
        expect(subject.validateLastName(' ')).toBe(false);
    });

    test('valid', () => {
        expect(subject.validateLastName('Doe')).toBe(true);
    });
});

describe(('Validates email'), () => {
    test('invalid', () => {
        expect(subject.validateEmail('invalid@email')).toBe(false);
    });

    test('valid', () => {
        expect(subject.validateEmail('valid@email.oo')).toBe(true);
    });
});
