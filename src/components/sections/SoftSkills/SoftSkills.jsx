import {Chip, Grid} from "@mui/material";
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {firestore} from "firebase.js";

function SoftSkills() {

  const [ softSkills, setSoftSkills ] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    getDocs(collection(firestore, 'soft_skills')).then(({ docs }) =>
      setSoftSkills(docs.map(doc => doc.data()))
    )
  }, []);

  return (
      <Grid container spacing={1}>
        {softSkills.map((skill, key) => (
            <Grid item key={key}>
              <Chip label={skill.name} color="primary" />
            </Grid>
        ))}
      </Grid>
  );
}

export default SoftSkills;
