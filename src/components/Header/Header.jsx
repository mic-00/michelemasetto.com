import {
  AppBar,
  Avatar,
  Box,
  Button, Grid, IconButton,
  List,
  ListItem,
  ListItemIcon, ListItemText, styled, Switch,
  Toolbar,
  Typography, useMediaQuery, useTheme
} from '@mui/material';
import profile from './1674239272817.jpg';
import {Cake, DirectionsCar, GitHub, Language, LinkedIn, Mail, Phone, Place, Translate} from "@mui/icons-material";
import {useSelector, useStore} from "react-redux";


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.secondary.main,
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


function Header() {

  const lightMode = useSelector((state) => state.lightMode);
  const store = useStore();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));

  return (
      <AppBar position="static" sx={{ paddingY: 2 }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          {md && (
              <Avatar src={profile} sx={{
                width: '8rem',
                height: 'auto',
                marginRight: 4,
                borderRadius: '50%'
              }}>
                MM
              </Avatar>
          )}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h1">
              Michele Masetto
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><Place /></ListItemIcon>
                <ListItemText>Via del Convento 35, San Pietro Viminario (PD), Italia</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><Cake /></ListItemIcon>
                <ListItemText>28-03-2000</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><DirectionsCar /></ListItemIcon>
                <ListItemText>AM / B</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><Translate /></ListItemIcon>
                <ListItemText>Italiano (madrelingua) / English (B2)</ListItemText>
              </ListItem>
            </List>
          </Box>
        </Toolbar>
        {md && (
            <Grid container spacing={2} sx={{ paddingX: 2 }}>
              <Grid item>
                <Button
                    href="https://www.michelemasetto.com"
                    target="_blank"
                    startIcon={<Language />}
                    color="inherit"
                >
                  michelemasetto.com
                </Button>
              </Grid>
              <Grid item>
                <Button
                    href="mailto:michele.masetto@gmail.com"
                    startIcon={<Mail />}
                    color="inherit"
                >
                  michele.masetto@gmail.com
                </Button>
              </Grid>
              <Grid item>
                <Button
                    href="tel:+393401619476"
                    startIcon={<Phone />}
                    color="inherit"
                >
                  +39 340 161 9476
                </Button>
              </Grid>
              <Grid item>
                <Button
                    href="https://www.linkedin.com/in/michele-masetto-994281261/"
                    target="_blank"
                    startIcon={<LinkedIn />}
                    color="inherit"
                >
                  linkedin.com/in/michele-masetto-994281261
                </Button>
              </Grid>
              <Grid item>
                <Button
                    href="https://www.github.com/mic-00/"
                    target="_blank"
                    startIcon={<GitHub />}
                    color="inherit"
                >
                  github.com/mic-00
                </Button>
              </Grid>
            </Grid>
        )}
        {!md && (
            <Grid container spacing={1} sx={{ paddingX: 1 }}>
              <Grid item>
                <IconButton
                    href="https://www.michelemasetto.com"
                    target="_blank"
                    color="inherit"
                    aria-label="michelemasetto.com"
                >
                  <Language />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                    href="mailto:michele.masetto@gmail.com"
                    color="inherit"
                    aria-label="michele.masetto@gmail.com"
                >
                  <Mail />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                    href="tel:+393401619476"
                    color="inherit"
                    aria-label="+39 340 161 9476"
                >
                  <Phone />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                    href="https://www.linkedin.com/in/michele-masetto-994281261/"
                    target="_blank"
                    color="inherit"
                    aria-label="linkedin.com/in/michele-masetto-994281261"
                >
                  <LinkedIn />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                    href="https://www.github.com/mic-00/"
                    target="_blank"
                    color="inherit"
                    aria-label="github.com/mic-00"
                >
                  <GitHub />
                </IconButton>
              </Grid>
            </Grid>
        )}
      </AppBar>
  );
}

export default Header;