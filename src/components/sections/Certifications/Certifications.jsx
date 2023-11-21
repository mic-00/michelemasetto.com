import {List, ListItem, ListItemButton, ListItemIcon} from "@mui/material";
import {Download} from "@mui/icons-material";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {firestore} from "firebase.js";


function Certifications() {

  const [ certifications, setCertifications ] = useState([]);
  const language = useSelector(state => state.language);

  useEffect(() => {
    getDocs(query(collection(firestore, `${language}/translations/certifications`), orderBy('name')))
        .then(({ docs }) => setCertifications(docs.map(doc => doc.data()))
    );
  }, [ language ]);

  return (
      <List>
        {certifications.map((certification, key) => (
            <ListItem key={key}>
              <ListItemButton href={certification.downloadURL} target="_blank">
                <ListItemIcon>
                  <Download />
                </ListItemIcon>
                { certification.name }
              </ListItemButton>
            </ListItem>
        ))}
      </List>
  );
}

export default Certifications;
