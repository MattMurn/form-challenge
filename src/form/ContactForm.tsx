// top level component that has state for screen

import { useState, ReactElement } from 'react';
import { Box } from '@material-ui/core';
import { Complete } from '../complete';
import { Form } from './Form';

export const ContactForm = (): ReactElement => {

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    return (
        <Box>
            {formSubmitted ? <Complete handleBackClick={() => setFormSubmitted(false)} /> : <Form handleFormSubmission={() => setFormSubmitted(true)} description="Description" title="Title" />}
        </Box>

    )

}