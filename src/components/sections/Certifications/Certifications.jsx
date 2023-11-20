import {List, ListItem, ListItemButton, ListItemIcon} from "@mui/material";
import {Download} from "@mui/icons-material";
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {firestore} from "firebase.js";


function Certifications() {

  const [ certifications, setCertifications ] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    getDocs(collection(firestore, 'certifications')).then(({ docs }) =>
      setCertifications(docs.map(doc => doc.data()))
    );
  }, []);

  return (
      <List>
        {certifications.map((certification, key) => (
            <ListItem key={key}>
              <ListItemButton href={certification.downloadURL} target="_blank">
                <ListItemIcon>
                  <Download />
                </ListItemIcon>
                { t(certification.name) }
              </ListItemButton>
            </ListItem>
        ))}
      </List>
  );
}

export default Certifications;
