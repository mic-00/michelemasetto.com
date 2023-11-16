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
        root: {}
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
              transform: 'translateY(0)'
            },
            '100%' : {
              transform: 'translateY(450px)'
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
            backgroundImage: 'radial-gradient(4px 4px at 100px 50px,#00000080,transparent),' +
                'radial-gradient(6px 6px at 200px 150px,#00000080,transparent),' +
                'radial-gradient(3px 3px at 300px 250px,#00000080,transparent),' +
                'radial-gradient(4px 4px at 400px 350px,#00000080,transparent),' +
                'radial-gradient(6px 6px at 500px 100px,#00000080,transparent),' +
                'radial-gradient(3px 3px at 50px 700px,#00000080,transparent),' +
                'radial-gradient(4px 4px at 150px 300px,#00000080,transparent),' +
                'radial-gradient(6px 6px at 250px 400px,#00000080,transparent),' +
                'radial-gradient(3px 3px at 350px 500px,#00000080,transparent),' +
                'radial-gradient(4px 4px at 550px 550px,#00000080,transparent),' +
                'radial-gradient(6px 6px at 600px 50px,#00000080,transparent),' +
                'radial-gradient(3px 3px at 700px 750px,#00000080,transparent),' +
                'radial-gradient(4px 4px at 800px 250px,#00000080,transparent),' +
                'radial-gradient(6px 6px at 900px 500px,#00000080,transparent),' +
                'radial-gradient(3px 3px at 750px 400px,#00000080,transparent),' +
                'radial-gradient(4px 4px at 625px 350px,#00000080,transparent),' +
                'radial-gradient(6px 6px at 500px 500px,#00000080,transparent),' +
                'radial-gradient(3px 3px at 850px 600px,#00000080,transparent),' +
                'radial-gradient(4px 4px at 650px 300px,#00000080,transparent),' +
                'radial-gradient(6px 6px at 1200px 850px,#00000080,transparent),' +
                'radial-gradient(3px 3px at 1100px 400px,#00000080,transparent),' +
                'radial-gradient(4px 4px at 950px 500px,#00000080,transparent),' +
                'radial-gradient(6px 6px at 950px 700px,#00000080,transparent),' +
                'radial-gradient(3px 3px at 1150px 500px,#00000080,transparent),' +
                'radial-gradient(4px 4px at 1000px 300px,#00000080,transparent)' +
                '',
            backgroundSize: '100%',
            backgroundRepeat: 'repeat',
            filter: 'blur(1px)',
            animation: 'snow 2s linear infinite'
          }
        }
      }
    },
  }
});

export default christmasTheme;
