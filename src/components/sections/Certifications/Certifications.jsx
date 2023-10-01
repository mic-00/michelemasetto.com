import degree from "./assets/degree.pdf";
import diploma from "./assets/diploma.pdf";
import unreal_engine_4 from "./assets/unreal_engine_4.pdf";
import {List, ListItem, ListItemButton, ListItemIcon} from "@mui/material";
import {Download} from "@mui/icons-material";
import { useTranslation } from "react-i18next";


function Certifications() {

  const { t } = useTranslation();
  
  const certifications = [{
    name: t('certifications', { returnObjects: true })[0],
    href: diploma
  }, {
    name: t('certifications', { returnObjects: true })[1],
    href: degree
  }, {
    name: t('certifications', { returnObjects: true })[2],
    href: unreal_engine_4
  }];

  return (
      <List>
        {certifications.map((c, key) => (
            <ListItem key={key}>
              <ListItemButton href={c.href} target="_blank">
                <ListItemIcon>
                  <Download />
                </ListItemIcon>
                { c.name }
              </ListItemButton>
            </ListItem>
        ))}
      </List>
  );
}

export default Certifications;
