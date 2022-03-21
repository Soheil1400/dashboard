import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#76F2FF',
            main:'#1CCAFF',
            dark:'#0E77B7'
        },
        secondary: {
            light: '#EDE7F6',
            main:'#673AB7',
            dark:'#5E35B1'
        },
        info: {
            light: '#74CAFF',
            main:'#1890FF',
            dark:'#0C53B7'
        },
        success: {
            light: '#AAF27F',
            main:'#2e7d32',
            dark:'#229A16'
        },
        warning: {
            light: '#FFE16A',
            main:'#FFC107',
            dark:'#B78103'
        },
        error: {
            light: '#FFA48D',
            main:'#FF4842',
            dark:'#B72136'
        },
        grey: {
            light: '#DFE3E8',
            main:'#616161',
            dark:'#919EAB'
        },
    },
});