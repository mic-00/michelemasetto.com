import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {Box, FormControl, FormControlLabel, IconButton, Radio, RadioGroup} from "@mui/material";
import {useEffect, useState} from "react";


function ImageViewerControls({ imageViewer }) {

  const [ value, setValue ] = useState(0);

  useEffect(() => {
    imageViewer?.current(0);
  }, [ imageViewer ]);

  useEffect(() => {
    imageViewer?.current(value);
  }, [ imageViewer, value ]);
  
  return (
    <>
    {imageViewer?.count() > 0 && (
      <Box>
        <IconButton onClick={() => setValue(Math.abs(value - 1) % imageViewer?.count())}><ArrowBack /></IconButton>
        <FormControl>
          <RadioGroup row value={value} sx={{ marginLeft: 3 }}>
            {Array(imageViewer?.count()).fill(0).map((_, key) => (
              <FormControlLabel
                  key={key}
                  value={key}
                  control={<Radio onClick={() => setValue(key)} />}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <IconButton onClick={() => setValue(Math.abs(value + 1) % imageViewer?.count())}><ArrowForward /></IconButton>
      </Box>
    )}
    </>
  );
}

export default ImageViewerControls;
