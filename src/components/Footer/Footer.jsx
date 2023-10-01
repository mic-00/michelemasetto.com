import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import sign from './sign.png';

function Footer() {

  const theme = useTheme();
  const print = useMediaQuery('@media print');

  return (
      <Box component="footer" sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        paddingY: 1
      }}>
        <Container sx={{
          display: 'none',
          '@media print': { display: 'block' }
        }}>
          <Typography>
            Autorizzo il trattamento dei miei dati personali presenti nel CV ai sensi dell’art. 13 d. lgs. 30 giugno 2003 n. 196 - "Codice in
            materia di protezione dei dati personali" e dell’art. 13 GDPR 679/16 - "Regolamento europeo sulla protezione dei dati
            personali".
          </Typography>
          <Typography variant="overline">
            San Pietro Viminario, 17 Dicembre 2022
          </Typography>
          <Box>
            <img src={sign} alt="Firma di Michele Masetto" style={{ height: '6rem' }} />
          </Box>
        </Container>
      </Box>
  )
}

export default Footer;
