import {Box, Skeleton, Typography} from '@mui/material';
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {firestore} from "firebase.js";

function AboutMe() {

  const language = useSelector(state => state.language);
  const [ aboutMe, setAboutMe ] = useState([]);

  useEffect(() => {
    setAboutMe([]);
    getDocs(query(collection(firestore, `${language}/translations/about_me`), orderBy('id')))
        .then(({ docs }) => setAboutMe(docs.map(doc => doc.data()))
    );
  }, [ language ]);

  return (
      <Box>
        {aboutMe.length === 0 && (
            <>
              <Skeleton variant="text" height={40} />
              <Skeleton variant="text" height={40} />
              <Skeleton variant="text" height={40} />
              <Skeleton variant="text" height={40} />
              <Skeleton variant="text" height={40} />
            </>
        )}
        {aboutMe.length > 0 && aboutMe.map((phrase, key) => (
            <Typography key={key}>{phrase.value}</Typography>
        ))}
      </Box>
  );
}

export default AboutMe;
