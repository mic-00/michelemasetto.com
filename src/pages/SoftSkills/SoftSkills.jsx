import {Chip, Grid, Stack} from "@mui/material";

const softSkills = [ "Team working", "Time management", "Critical thinking", "Decision making", "Troubleshooting", "Communication" ];

function SoftSkills() {
  return (
      <Grid container spacing={1}>
        {softSkills.map((skill, key) => (
            <Grid item key={key}>
              <Chip label={skill} color="primary" />
            </Grid>
        ))}
      </Grid>
  );
}

export default SoftSkills;
