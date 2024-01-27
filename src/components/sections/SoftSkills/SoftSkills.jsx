import {Chip, Grid, Skeleton} from "@mui/material";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {firestore} from "firebase.js";

function SoftSkills() {

  const language = useSelector(state => state.language);
  const [ softSkills, setSoftSkills ] = useState([]);

  useEffect(() => {
    setSoftSkills([]);
    getDocs(query(collection(firestore, `${language}/translations/soft_skills`), orderBy('value')))
        .then(({ docs }) => setSoftSkills(docs.map(doc => doc.data()))
    );
  }, [ language ]);

  return (
      <Grid container spacing={1}>
        {softSkills.length === 0 && (
            <Grid item xs={12}>
              <Skeleton variant="text" height={60} />
            </Grid>
        )}
        {softSkills.length > 0 && softSkills.map((skill, key) => (
            <Grid item key={key}>
              <Chip label={skill.value} color="primary" />
            </Grid>
        ))}
      </Grid>
  );
}

export default SoftSkills;
