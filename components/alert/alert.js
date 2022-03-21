import {IconButton, Snackbar, Alert} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const AlertMessage = ({message, open, setOpen}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const action = (
        <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseRoundedIcon fontSize="small" />
            </IconButton>
        </>
    );
    return(
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={message === 'empty' ? 'error' : 'success'} variant={'filled'} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default AlertMessage