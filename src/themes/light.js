import {deepmerge} from '@mui/utils';
import defaultTheme from './default';

const palette = {
  background: {
    default: '#fbe9e7'
  },
  primary: {
    main: '#ff5722',
    light: '#e64a19',
    dark: '#ffab91'
  },
  secondary: {
    main: '#00bcd4',
    light: '#62efff',
    dark: '#008ba3'
  }
};

const lightTheme = deepmerge(defaultTheme, {
  palette: palette
});

export default lightTheme;
