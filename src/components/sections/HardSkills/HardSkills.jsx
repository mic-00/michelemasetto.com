import {Chip, Grid} from "@mui/material";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {firestore} from "firebase.js";

function HardSkills() {

  const [hardSkills, setHardSkills] = useState([]);
  const language = useSelector(state => state.language);

  useEffect(() => {
    getDocs(query(collection(firestore, `${language}/translations/hard_skills`), orderBy('value')))
        .then(({ docs }) => setHardSkills(docs.map(doc => doc.data()))
    );
  }, [ language ]);

  return (
      <Grid container spacing={1}>
        {hardSkills.map((skill, key) => (
            <Grid item key={key}>
              <Chip label={skill.value} color="primary" />
            </Grid>
        ))}
      </Grid>
  );
}

export default HardSkills;
