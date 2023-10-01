import {Chip, Grid} from "@mui/material";

const hardSkills = [
    "JavaScript", "TypeScript", "HTML", "CSS", "Figma", "Git", "PHP", "SQL", "React", "Angular", "Node.js",
    "Redux", "D3.js", "Bootstrap", "AntDesign", "MUI", "Python", "Numpy", "Matplotlib", "C++", "Matlab", "Java",
    "Unreal Engine 4"
];

function HardSkills() {
  return (
      <Grid container spacing={1}>
        {hardSkills.map((skill, key) => (
            <Grid item key={key}>
              <Chip label={skill} color="primary" />
            </Grid>
        ))}
      </Grid>
  );
}

export default HardSkills;
