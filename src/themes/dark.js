import {deepmerge} from '@mui/utils';
import defaultTheme from "./default";

const palette = {
  primary: {
    main: '#ffab91'
  },
  secondary: {
    main: '#62efff'
  }
}

const darkTheme = deepmerge(defaultTheme, {
  palette: {mode: 'dark', ...palette}
});

export default darkTheme;
