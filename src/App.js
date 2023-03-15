import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {
  Box,
  createTheme,
  CssBaseline, Grid,
  ThemeProvider, useMediaQuery
} from '@mui/material';
import AboutMe from './pages/AboutMe';
import Certifications from "./pages/Certifications";
import Education from "./pages/Education";
import WorkExperiences from "./pages/WorkExperiences";
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Section from "./components/Section";
import {lightTheme, darkTheme} from './theme';
import 'animate.css/animate.min.css';
import SoftSkills from "./pages/SoftSkills";
import HardSkills from "./pages/HardSkills";

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

  const lightMode = useSelector(state => state.lightMode);
  let theme = useMemo(
      () => {
        let t = createTheme(lightMode ? lightTheme : darkTheme);
        return createTheme(lightMode ? lightTheme : darkTheme, {
          typography: {
            h1: {
              fontWeight: 600,
              fontSize: '3rem',
              [t.breakpoints.down('md')]: { fontSize: '2.5rem' },
              [t.breakpoints.only('xs')]: {fontSize: '2.25rem'}
            },
            h2: {
              fontWeight: 600,
              fontSize: '2.5rem',
              [t.breakpoints.down('md')]: { fontSize: '2.25rem' },
              [t.breakpoints.only('xs')]: {fontSize: '2.125rem'}
            }, h3: {
              fontWeight: 600,
              fontSize: '2.25rem',
              [t.breakpoints.down('md')]: { fontSize: '2.125rem' },
              [t.breakpoints.only('xs')]: {fontSize: '2.0625rem'}
            }, h4: {
              fontWeight: 600,
              fontSize: '2.125rem',
              [t.breakpoints.down('md')]: { fontSize: '2.0625rem' },
              [t.breakpoints.only('xs')]: {fontSize: '2.0312rem'}
            }
          }});
      },
      [lightMode]
  );

  const md = useMediaQuery(theme.breakpoints.up('md'));

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box sx={{ paddingX: 2, paddingY: 4 }}>
          <Grid container rowSpacing={md ? 4 : 2} columnSpacing={md ? 2 : 1} alignContent="stretch">
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
        <Footer />
      </ThemeProvider>
  );
}

export default App;
