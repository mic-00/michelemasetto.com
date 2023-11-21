import {Chip, Grid} from "@mui/material";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {firestore} from "firebase.js";

function SoftSkills() {

  const [ softSkills, setSoftSkills ] = useState([]);
  const language = useSelector(state => state.language);

  useEffect(() => {
    getDocs(query(collection(firestore, `${language}/translations/soft_skills`), orderBy('value')))
        .then(({ docs }) => setSoftSkills(docs.map(doc => doc.data()))
    );
  }, [ language ]);

  return (
      <Grid container spacing={1}>
        {softSkills.map((skill, key) => (
            <Grid item key={key}>
              <Chip label={skill.value} color="primary" />
            </Grid>
        ))}
      </Grid>
  );
}

export default SoftSkills;
