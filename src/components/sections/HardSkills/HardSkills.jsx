import {Chip, Grid} from "@mui/material";
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";
import {firestore} from "firebase.js";

function HardSkills() {

  const [hardSkills, setHardSkills] = useState([]);

  useEffect(() => {
    getDocs(collection(firestore, 'hard_skills')).then(({ docs }) => 
      setHardSkills(docs.map(doc => doc.data()))
    )
  }, []);

  return (
      <Grid container spacing={1}>
        {hardSkills.map((skill, key) => (
            <Grid item key={key}>
              <Chip label={skill.name} color="primary" />
            </Grid>
        ))}
      </Grid>
  );
}

export default HardSkills;
