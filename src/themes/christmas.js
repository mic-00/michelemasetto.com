import {deepmerge} from '@mui/utils';
import defaultTheme from './default';

const palette = {
  background: {
    default: '#ffcdd2'
  },
  primary: {
    main: '#b71c1c'
  },
  secondary: {
    main: '#1b5e20'
  }
};

const christmasTheme = deepmerge(defaultTheme, {
  palette: palette,
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          '&::before': {
            content: '"hehehe"',
            position: 'absolute',
            width: '100%',
            height: '100%'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          zIndex: '1000'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          zIndex: '1000'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          zIndex: '1000'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          position: 'relative',
          '@keyframes snow': {
            '0' : {
              opacity: '0',
              transform: 'translateY(0)'
            },
            '66%': { opacity: '1' },
            '100%' : {
              opacity: '1',
              transform: 'translateY(650px)'
            }
          },
          '&::before': {
            content: '""',
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            zIndex: '999',
            backgroundImage: 'radial-gradient(4px 4px at 100px 50px,#00000080,transparent),radial-gradient(6px 6px at 200px 150px,#00000080,transparent),radial-gradient(3px 3px at 300px 250px,#00000080,transparent),radial-gradient(4px 4px at 400px 350px,#00000080,transparent),radial-gradient(6px 6px at 500px 100px,#00000080,transparent),radial-gradient(3px 3px at 50px 200px,#00000080,transparent),radial-gradient(4px 4px at 150px 300px,#00000080,transparent),radial-gradient(6px 6px at 250px 400px,#00000080,transparent),radial-gradient(3px 3px at 350px 500px,#00000080,transparent),radial-gradient(4px 4px at 550px 550px,#00000080,transparent)',
            backgroundSize: '100%',
            backgroundRepeat: 'repeat',
            opacity: '0',
            filter: 'blur(1px)',
            animation: 'snow 3s linear infinite'
          }
        }
      }
    },
  }
});

export default christmasTheme;
