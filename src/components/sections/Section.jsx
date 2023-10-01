import {Box, Paper, Typography, useTheme} from '@mui/material';
import {AnimationOnScroll} from "react-animation-on-scroll";


function Section({ title, children }) {

  const theme = useTheme();

  return (
      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce offset={0} initiallyVisible>
        <Paper elevation={3} className="section" sx={{
          position: 'relative',
          height: '100%',
          paddingTop: 1,
          paddingRight: 2,
          paddingBottom: 1,
          paddingLeft: 1
        }}>
          {title && (
              <Paper sx={{
                display: 'inline-block',
                position: 'absolute',
                top: theme.spacing(-2),
                paddingLeft: 0.5,
                paddingRight: 1
              }}>
                <Typography variant="h2">
                  {title}
                </Typography>
              </Paper>
          )}
          <Box sx={{ height: '100%', paddingTop: 4 }}>
            {children}
          </Box>
        </Paper>
      </AnimationOnScroll>
  );
}

export default Section;
