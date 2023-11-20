import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#202b3b',
        },
        secondary: {
            main: '#939aa3',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#0B131E',
        },
        text: {
            primary: '#dde0e5',
            secondary: '#939aa3',
        },
    },
    typography: {
        fontFamily: [
            'Open Sans',
            'sans-serif',
        ].join(','),
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    // #1F2A38
                    backgroundColor: '#202b3b',
                    borderRadius: '1rem',
                    padding: '.5rem 1rem',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        color: '#939aa3',
                        opacity: 1,
                    },
                }
            }
        },
        MuiDivider: {
            variants: [
                {
                    props: {variant: 'middle'},
                    style: {
                        backgroundColor: '#939aa3',
                        opacity: 1,
                    }
                },
                {
                    props: {variant: 'fullWidth'},
                    style: {
                        backgroundColor: '#939aa3',
                    }
                }
            ]
        },
    },
});

export default theme;