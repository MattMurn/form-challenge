import { Box, Typography } from '@material-ui/core';
import { FormIcon } from '../Icons';
import { makeStyles } from '@mui/styles';
import { ReactElement } from 'react';

const useStyles = makeStyles({
    root: {
        height: '112px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        letterSpacing: '-.3px'
    },
    title: {
        fontWeight: 600
    },
    description: {
        color: '#000000',
        opacity: '.54',
        fontWeight: 400
    }
})

export type FormProps = {
    title?: string,
    description?: string
}

export const FormHeader = ({ title, description }: FormProps): ReactElement => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box mr="8px" ml="40px">
                <FormIcon />
            </Box>
            <Box className={classes.content}>
                <Typography className={classes.title} id="form-header-title" variant="h5">
                    {title}
                </Typography>
                <Typography className={classes.description} id="form-header-title">
                    {description}
                </Typography>
            </Box>
        </Box>
    )
}
