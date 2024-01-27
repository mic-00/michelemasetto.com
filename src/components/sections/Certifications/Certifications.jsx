import {List, ListItem, ListItemButton, ListItemIcon, Skeleton} from "@mui/material";
import {Download} from "@mui/icons-material";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {firestore} from "firebase.js";


function Certifications() {

  const language = useSelector(state => state.language);
  const [ certifications, setCertifications ] = useState([]);

  useEffect(() => {
    setCertifications([]);
    getDocs(query(collection(firestore, `${language}/translations/certifications`), orderBy('name')))
        .then(({ docs }) => setCertifications(docs.map(doc => doc.data()))
    );
  }, [ language ]);

  return (
      <List>
        {certifications.length === 0 && (
            <>
              <Skeleton variant="text" height={50} />
              <Skeleton variant="text" height={50} />
              <Skeleton variant="text" height={50} />
              <Skeleton variant="text" height={50} />
            </>
        )}
        {certifications.length > 0 && certifications.map((certification, key) => (
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
