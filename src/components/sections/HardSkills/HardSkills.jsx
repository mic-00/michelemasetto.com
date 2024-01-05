import {Chip, Grid, Skeleton} from "@mui/material";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {firestore} from "firebase.js";


function HardSkills() {

  const language = useSelector(state => state.language);
  const [hardSkills, setHardSkills] = useState([]);

  useEffect(() => {
    getDocs(query(collection(firestore, `${language}/translations/hard_skills`), orderBy('value')))
        .then(({ docs }) => setHardSkills(docs.map(doc => doc.data()))
    );
  }, [ language ]);

  return (
      <Grid container spacing={1}>
        {hardSkills.length === 0 && (
            <Grid item xs={12}>
              <Skeleton variant="text" height={60} />
            </Grid>
        )}
        {hardSkills.length > 0 && hardSkills.map((skill, key) => (
            <Grid item key={key}>
              <Chip label={skill.value} color="primary" />
            </Grid>
        ))}
      </Grid>
  );
}

export default HardSkills;
