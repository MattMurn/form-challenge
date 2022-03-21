import { Box, Typography } from '@material-ui/core';
import { ReactElement } from 'react';
import { CompleteIcon } from '../Icons';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        height: '112px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#000000 54%',
        borderBottomStyle: 'solid',
        borderBottom: '1px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    title: {
        fontWeight: 600
    },
    description: {
        color: '#000000',
        opacity: '.54'
    }
})

export const CompleteHeader = (): ReactElement => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box mr="8px" ml="40px">
                <CompleteIcon />
            </Box>
            <Box className={classes.content}>
                <Typography className={classes.title} id="complete-header-title" variant="h5">
                    You're all set!
                </Typography>
                <Typography className={classes.description} id="complete-header-description">
                    Someone will reach out to you soon.
                </Typography>
            </Box>
        </Box>
    )
}
