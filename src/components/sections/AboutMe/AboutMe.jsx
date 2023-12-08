import {Box, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';

function AboutMe() {

  const { t } = useTranslation(['aboutMe']);

  return (
      <Box>
        { t('a', { returnObjects: true }).map((v, i) =>
            <Typography key={i}>{ v }</Typography>
        )}
      </Box>
  );
}

export default AboutMe;
