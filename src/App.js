import {useMemo, useRef, useState} from "react";
import {useSelector, useStore} from "react-redux";
import {
  Box,
  createTheme,
  CssBaseline,
  Fab,
  Grid,
  Menu,
  MenuItem,
  ThemeProvider,
  useMediaQuery
} from "@mui/material";
import { Translate } from "@mui/icons-material";
import Header from "components/Header";
import Section from "components/sections/Section";
import AboutMe from "components/sections/AboutMe";
import Certifications from "components/sections/Certifications";
import Education from "components/sections/Education";
import HardSkills from "components/sections/HardSkills";
import SoftSkills from "components/sections/SoftSkills";
import WorkExperiences from "components/sections/WorkExperiences";
import {lightTheme, darkTheme} from "theme";
import "animate.css/animate.min.css";

const sections = [{
  title: 'Sommario',
  xs: 12,
  md: 8,
  content: <AboutMe />
}, {
  title: 'Certificazioni',
  xs: 12,
  md: 4,
  content: <Certifications />
}, {
  title: 'Formazione',
  xs: 12,
  md: 6,
  content: <Education />
}, {
  title: 'Esperienze lavorative',
  xs: 12,
  md: 6,
  content: <WorkExperiences />
}, {
  title: 'Soft skill',
  xs: 12,
  md: 12,
  content: <SoftSkills />
}, {
  title: 'Hard skill',
  xs: 12,
  md: 12,
  content: <HardSkills />
}];

function App() {

  const anchorRef = useRef();
  const lightMode = useSelector(state => state.lightMode);
  const [ isMenuOpen, setMenuOpen ] = useState(false);
  const store = useStore();

  let theme = useMemo(() => {
    let t = createTheme(lightMode ? lightTheme : darkTheme);
    return createTheme(lightMode ? lightTheme : darkTheme, {
      typography: {
        h1: {
          fontWeight: 600,
          fontSize: '2.5rem',
          [t.breakpoints.down('md')]: { fontSize: '2rem' },
          [t.breakpoints.only('xs')]: { fontSize: '1.75em' }
        }, h2: {
          fontWeight: 600,
          fontSize: '2rem',
          [t.breakpoints.down('md')]: { fontSize: '1.75rem' },
          [t.breakpoints.only('xs')]: { fontSize: '1.625rem' }
        }, h3: {
          fontWeight: 600,
          fontSize: '1.75rem',
          [t.breakpoints.down('md')]: { fontSize: '1.625rem' },
          [t.breakpoints.only('xs')]: { fontSize: '1.5625rem' }
        }, h4: {
          fontWeight: 600,
          fontSize: '1.625rem',
          [t.breakpoints.down('md')]: { fontSize: '1.5625rem' },
          [t.breakpoints.only('xs')]: { fontSize: '1.5313rem' }
        }
      }
    });
  }, [lightMode]);
  const md = useMediaQuery(theme.breakpoints.up('md'));

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box sx={{ paddingX: 1, paddingY: 4 }}>
          <Grid container rowSpacing={4} columnSpacing={md ? 2 : 1} alignContent="stretch">
            {sections.map((section, key) => (
                <Grid
                    item
                    xs={section.xs}
                    md={section.md}
                    component="section"
                    key={key}
                >
                  <Section title={section.title}>
                    {section.content}
                  </Section>
                </Grid>
            ))}
          </Grid>
        </Box>
        <Fab
            ref={anchorRef}
            color="secondary"
            onClick={() => setMenuOpen(true)}
            sx={{ position: 'fixed', bottom: '2em', right: '2em' }}
        >
          <Translate />
        </Fab>
        <Menu
            anchorEl={anchorRef.current}
            onClose={() => setMenuOpen(false)}
            open={isMenuOpen}
        >
          <MenuItem onClick={() => { store.dispatch({ type: 'language', payload: 'it' }); setMenuOpen(false); }}>
            Italiano
          </MenuItem>
          <MenuItem onClick={() => { store.dispatch({ type: 'language', payload: 'en' }); setMenuOpen(false); }}>
            English
          </MenuItem>
        </Menu>
      </ThemeProvider>
  );
}

export default App;
