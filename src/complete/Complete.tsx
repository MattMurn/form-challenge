import { Box, Button, IconButton, Typography } from "@material-ui/core"
import { CompleteHeader } from "./CompleteHeader"
import { BackArrow } from "../Icons"
import { makeStyles } from '@mui/styles';
import { ReactElement } from "react";

const useStyles = makeStyles({
    root: {
        width: '708px',
        boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.1)',
        margin: 'auto'
    },
    content: {
        display: 'flex',
        height: '74px',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#444195 !important',
        color: '#FFFFFF !important'
    }
});

type CompleteProps = {
    handleBackClick: () => void
}

export const Complete = ({ handleBackClick }: CompleteProps): ReactElement => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <CompleteHeader />
            <Box className={classes.content}>
                <Box ml="51px">
                    <IconButton aria-describedby="back-to-form" onClick={handleBackClick}>
                        <Box mr="8px" id="back-to-form">
                            <BackArrow />
                        </Box>
                        <Typography>Back</Typography>
                    </IconButton>
                </Box>
                <Box mr="40px" my="16px">
                    <Button data-testId="complete-button" aria-describedby="complete-done" variant='contained' className={classes.button} onClick={() => window.location.href = 'https://media.giphy.com/media/2nwTda1ewYssE/giphy.gif'}>
                        <Typography id="complete-done">
                            Done
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}