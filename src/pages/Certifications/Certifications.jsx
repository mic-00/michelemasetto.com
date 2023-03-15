import degree from "./assets/degree.pdf";
import unreal_engine_4 from "./assets/unreal_engine_4.pdf";
import {List, ListItem, ListItemButton, ListItemIcon} from "@mui/material";
import {Download} from "@mui/icons-material";


const certifications = [{
  name: 'Laurea triennale in Informatica',
  href: degree
}, {
  name: 'Corso Unreal Engine 4',
  href: unreal_engine_4
}];

function Certifications() {
  return (
      <List>
        {certifications.map((c, key) => (
            <ListItem key={key}>
              <ListItemButton href={c.href} target="_blank">
                <ListItemIcon>
                  <Download />
                </ListItemIcon>
                {c.name}
              </ListItemButton>
            </ListItem>
        ))}
      </List>
  );
}

export default Certifications;
