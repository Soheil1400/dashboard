import {Box, Button, IconButton, ListItemButton, styled} from "@mui/material";
import {theme} from "../theme/theme";
import 'animate.css';

export const PrimeButton = styled(Button)({
    fontSize: '14px',
    boxShadow: 'none',
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    padding: '0.5rem',
    borderRadius: '6px',
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        boxShadow: 'none',
    }
})
export const PrimeIconButton = styled(IconButton)({
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    padding: '0.3rem',
    borderRadius: '6px',
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: '#fff',
    }
})

export const CustomDropMenu = styled(Box)({
    width: '100%',
    maxWidth: 200,
    borderRadius: '6px',
    position: 'absolute',
    right: '20px',
    top: '75px',
    boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) -20px 20px 40px -4px;',
    backgroundColor:'#fff',
    zIndex:'999'
})

export const PrimeListItem = styled(ListItemButton)({
    py: '5px',
    px: '10px',
    borderRadius: '6px',
    '&:hover': {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.light,
    }
})