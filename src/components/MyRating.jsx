import {Box, Container, Rating, Typography} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';


function MyRating(props) {

  return (
      <Box sx={{ padding: 1 }}>
        <Typography gutterBottom>{props.name}:</Typography>
        <Rating
            name={`skill-${props.name}`}
            max={10}
            value={props.value}
            precision={0.25}
            icon={<CheckCircle sx={{ color: 'primary.main' }} fontSize="small" />}
            emptyIcon={<CheckCircle fontSize="small" />}
            getLabelText={(v) => `>${v} out of 10`}
            readOnly
        />
      </Box>
  );
}

export default MyRating;
