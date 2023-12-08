import {Box, Typography} from "@mui/material";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

const ImageViewer = forwardRef(({ children }, ref) => {

  const language = useSelector(state => state.language);
  const { t, i18n } = useTranslation(['imageViewer']);
  
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [ i18n, language ]);

  const [ current, setCurrent ] = useState(0);

  useImperativeHandle(ref, () => ({
    count: () => children.length,
    current: (i) => setCurrent(i)
  }), [ children.length ]);

  return(
    <Box sx={{
      [`& > *:not(:nth-of-type(${current + 1}))`]: {
        display: 'none'
      }
    }}>
      {children.length !== 0 && children}
      {children.length === 0 && (
        <Typography>{t('noImage')}</Typography>
      )}
    </Box>
  );
});

export default ImageViewer;
