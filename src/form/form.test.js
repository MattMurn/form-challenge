import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen, getByRole } from '@testing-library/react'
import { Form } from './Form';


const form = () => {
    const form = render(<Form validFormSubmission={() => 'form submitted'} description='test description' title='test title' />);
    const firstName = form.getByTestId('test-form-first-name').querySelector('input');
    const lastName = form.getByTestId('test-form-last-name').querySelector('input');
    const email = form.getByTestId('test-form-email').querySelector('input');
    const department = form.getByTestId('test-form-department').querySelector('input');
    const message = form.getByTestId('test-form-information-message').querySelector('textArea');
    const button = form.getByTestId('form-submit-button')

    return {
        form, firstName, lastName, email, department, message, button
    }
}
describe('department feedback form', () => {
    it('form submission disabled', () => {
        const { button } = form();
        expect(button).toBeDisabled();
    });

    it('form submission enabled', () => {

        const { firstName, lastName, email, department, message, button } = form();

        // set form values
        fireEvent.change(firstName, { target: { value: 'Michael' } })
        fireEvent.change(lastName, { target: { value: 'Jordan' } })
        fireEvent.change(email, { target: { value: 'mj23@gmail.com' } })
        fireEvent.change(department, { target: { value: 'basketball' } })
        fireEvent.change(message, { target: { value: 'The GOAT' } })
        // assertions
        expect(firstName.value).toBe('Michael');
        expect(lastName.value).toBe('Jordan');
        expect(email.value).toBe('mj23@gmail.com');
        expect(department.value).toBe('basketball');
        expect(message.value).toBe('The GOAT');
        expect(button).toBeEnabled();
    });
});