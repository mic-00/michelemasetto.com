import { Box, Typography } from "@mui/material";
import { useId } from "react";

function ImageViewerItem({ src, title, description }) {

  const id = 'imageViewerItem' + useId();

  return(
    <Box>
      {title && (
        <Box>
          <Typography>{title}</Typography>
        </Box>
      )}
      {description && (
        <Box id={id}>
          <Typography>{description}</Typography>
        </Box>
      )}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        height: 400
      }}>
        <img src={src} alt="" height="100%" aria-describedby={description && id} />
      </Box>
    </Box>
  );
}

export default ImageViewerItem;
