import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import { FormHeader } from './FormHeader';
import { FormField } from './FormFields';
import type { FormState } from './ContactForm';
import { SyntheticEvent } from 'react';

const useStyles = makeStyles({
    root: {
        width: 880,
        height: 611,
        margin: 'auto',
        boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.1)'
    },
    inputWrapper: {
        width: 880,
        height: 423,
        margin: "auto",
        backgroundColor: '#FAFAFA',
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        border: '1px',
        borderStyle: 'solid',
        borderRight: 0,
        borderLeft: 0
    },
    nameWrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        flex: 'none',
        flexGrow: 0,
        alignItems: 'center'
    },
    button: {
        "&:disabled": {
            backgroundColor: '#cfcfcf !important', // not exact. 
            color: '#505050 !important' // not exact. 
        },
        backgroundColor: '#444195 !important',
        color: '#FFFFFF !important'
    },
    nameField: {
        width: '216px !important'
    }
})

type FormProps = {
    title?: string,
    description?: string,
    formValues: FormState,
    formError: boolean,
    handleFormSubmit: (e: SyntheticEvent) => void,
    handleFormValueChange: any
}

export const Form = ({ handleFormSubmit, title, description, formValues, formError, handleFormValueChange }: FormProps) => {
    const classes = useStyles();

    return (
        <form onSubmit={handleFormSubmit}>
            <Box className={classes.root} >
                <FormHeader title={title} description={description} />
                <Box className={classes.inputWrapper} >
                    <Box sx={{ width: 457 }}>
                        <Box mt='8px' className={classes.nameWrapper}>
                            <FormField className={classes.nameField} name="firstName" id="form-first-name" label="First Name" value={formValues.firstName} handleFormValueChange={handleFormValueChange} error={formError && !formValues.firstName} helperText="Please enter your first name" />
                            <FormField className={classes.nameField} name="lastName" id="form-last-name" label="Last Name" value={formValues.lastName} handleFormValueChange={handleFormValueChange} error={formError && !formValues.lastName} helperText="Please enter your last name" />
                        </Box>
                        <FormField name="email" id="form-last-email" label="Email" value={formValues.email} handleFormValueChange={handleFormValueChange} type="email" error={formError && !formValues.email} helperText="Please enter a valid email address" />
                        <FormField name="department" id="form-last-department" label="Department" value={formValues.department} handleFormValueChange={handleFormValueChange} />
                        <FormField name="message" multiLine rows={5} id="form-last-message" label="Message" value={formValues.message} handleFormValueChange={handleFormValueChange} error={formError && !formValues.message} helperText="Please enter a message to your support representative" />
                    </Box>
                </Box>
                <Box mr='40px' my="16px" className={classes.buttonWrapper}>
                    <Button aria-describedby='submit-form' disabled={!formValues.firstName || !formValues.lastName || !formValues.email || !formValues.message} variant='contained' type='submit' className={classes.button} onSubmit={handleFormSubmit}>
                        <Typography id="submit-form">Submit</Typography>
                    </Button>
                </Box>
            </Box >
        </form>
    )
}