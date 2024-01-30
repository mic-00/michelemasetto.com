import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {Box, FormControl, FormControlLabel, IconButton, Radio, RadioGroup} from "@mui/material";
import {useSelector, useStore} from "react-redux";

function ImageViewerControlsContent() {
  
  const count = useSelector(state => state.count);
  const current = useSelector(state => state.current);
  const store = useStore();

  return (
      <Box>
        <IconButton onClick={() => store.dispatch({ type: 'current', payload: (Math.abs(current - 1) % count)})}>
          <ArrowBack />
        </IconButton>
        <FormControl>
          <RadioGroup row value={current} sx={{ marginLeft: 3 }}>
            {Array(count).fill(0).map((_, key) => (
              <FormControlLabel
                  key={key}
                  value={key}
                  control={<Radio onClick={() => store.dispatch({ type: 'current', payload: key})} />}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <IconButton onClick={() => store.dispatch({ type: 'current', payload: (Math.abs(current + 1) % count)})}>
          <ArrowForward />
        </IconButton>
      </Box>
  );
}

export default ImageViewerControlsContent;
