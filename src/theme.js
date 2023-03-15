import { deepmerge } from '@mui/utils';


const lightColors = {
  background: '#fbe9e7',

  primary: '#ff5722',
  primaryDark: '#e64a19',
  primaryLight: '#ffab91',

  secondary: '#00bcd4',
  secondaryDark: '#008ba3',
  secondaryLight: '#62efff',
};

const darkColors = {
  primary: '#ffab91',

  secondary: '#62efff'
}

const defaultTheme = {
  components: {
    MuiListItem: {
      defaultProps: { disablePadding: true }
    }
  },
  spacing: (value) => `${value / 2}rem`,
  typography: {
    allVariants: {
      fontFamily: 'Calibri, Helvetica, Verdana, Trebuchet MS, Lato, sans-serif'
    }
  }
}

const lightTheme = deepmerge(defaultTheme, {
  palette: {
    background: {
      default: lightColors.background
    }, primary: {
      main: lightColors.primary,
      light: lightColors.primaryLight,
      dark: lightColors.primaryDark
    }, secondary: {
      main: lightColors.secondary,
      light: lightColors.secondaryLight,
      dark: lightColors.secondaryDark
    }
  }
});

const darkTheme = deepmerge(defaultTheme, {
  palette: {
    mode: 'dark',
    primary: { main: darkColors.primary},
    secondary: { main: darkColors.secondary }
  }
});

export {lightTheme, darkTheme};
