import {Box, Typography} from "@mui/material";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useSelector, useStore} from "react-redux";

function ImageViewerContent({ children }) {

  const language = useSelector(state => state.language);
  const { t, i18n } = useTranslation(['imageViewer']);
  
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [ i18n, language ]);

  const count = useSelector(state => state.count);
  const current = useSelector(state => state.current);
  const store = useStore();

  useEffect(() => {
    store.dispatch({ type: 'count', payload: children.length });
  }, [ store, children ]);

  return (
    <Box sx={{
      [`& > *:not(:nth-of-type(${current + 1}))`]: {
        display: 'none'
      }
    }}>
      {count !== 0 && children}
      {count === 0 && (
        <Typography>{t('noImage')}</Typography>
      )}
    </Box>
  );
}

export default ImageViewerContent;
