import { createMuiTheme } from '@material-ui/core/styles';


const baseTheme = {
  props: {
    MuiSvgIcon: {
      htmlColor: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Raleway, san-serif',
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
  },
  overrides: {
    MuiInputBase: {
      root: {
        "& input": {
          "&:-webkit-autofill": {
            transition:
                    "background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s",
          },
          "&:-webkit-autofill:focus": {
            transition:
                    "background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s",
          },
          "&:-webkit-autofill:hover": {
            transition:
                    "background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s",
          },
        },
      },
    },
  },
};

export const lightTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    primary: {
      light: '#6DD6CC',
      main: '#4DB6AC',
      dark: '#D8E4F2',
      contrastText: '#fff',
    },
    secondary: {
      light: '#718792',
      main: '#455a64',
      dark: '#D8E4F2',
      contrastText: '#fff',
    },
    type: 'light',
  },
});

export const darkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    background: {
      default: '#222',
    },
    primary: {
      light: '#6DD6CC',
      main: '#4DB6AC',
      dark: '#00867D',
      contrastText: '#fff',
    },
    secondary: {
      light: '#718792',
      main: '#455a64',
      dark: '#1c313a',
      contrastText: '#fff',
    },
    type: 'dark',
  },
});
