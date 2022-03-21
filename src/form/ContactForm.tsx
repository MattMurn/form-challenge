// top level component that has state for screen

import { useState, ReactElement, ChangeEvent, SyntheticEvent } from 'react';
import { Box } from '@material-ui/core';
import { Complete } from '../complete';
import { Form } from './Form';

export type FormState = {
    firstName: string,
    lastName: string,
    email: string,
    department: string,
    message: string
}

export const ContactForm = (): ReactElement => {
    const defaultstate: FormState = {
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        message: '',
    }
    const [formValues, setFormValues] = useState<FormState>(defaultstate);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [formError, setFormError] = useState<boolean>(false);
    const handleFormValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const handleFormSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();
        const { firstName, lastName, email, message } = formValues;
        if (!firstName || !lastName || !email || !message) {
            setFormError(true);
        } else {
            setFormSubmitted(true);
        }
    }

    return (
        <Box>
            {formSubmitted ? <Complete handleBackClick={() => setFormSubmitted(false)} /> : <Form formError={formError} handleFormSubmit={handleFormSubmit} handleFormValueChange={handleFormValueChange} formValues={formValues} title="Title" description="description" />}
        </Box>

    )

}