import {Box, styled} from '@mui/material';


const VisuallyHidden = styled(Box)(() => ({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1
}));

export default VisuallyHidden;
