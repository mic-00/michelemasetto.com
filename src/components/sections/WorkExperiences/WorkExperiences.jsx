import {collection, getDocs} from "@firebase/firestore";
import {CalendarMonth, Place, Work} from "@mui/icons-material";
import TimelineOppositeContent, {timelineOppositeContentClasses} from "@mui/lab/TimelineOppositeContent";
import {timelineItemClasses} from "@mui/lab/TimelineItem";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {firestore} from "firebase.js";

const workTimeline = [{
  name: 'Stagista',
  place: 'VISIONEIMPRESA S.r.l., Pernumia (PD)',
  start: 'Luglio 2017',
  end: 'Agosto 2017',
  content: 'Tirocinio in ambito PCTO (Percorsi per le Competenze Trasversali e per l\'Orientamento).'
}, {
  name: 'Stagista',
  place: 'Comune di San Pietro Viminario, San Pietro Viminario (PD)',
  start: 'Luglio 2018',
  end: 'Agosto 2018',
  content: 'Tirocinio in ambito PCTO (Percorsi per le Competenze Trasversali e per l\'Orientamento). Sono state svolte le ' +
      'seguenti attività: gestione database anagrafico dei cittadini del Comune; digitalizzazione di documenti provenienti dall\'' +
      'archivio cartaceo.'
}, {
  name: 'Stagista - Sviluppatore front-end',
  place: 'RiskApp S.r.l., Conselve (PD)',
  start: 'Giugno 2022',
  end: 'Settembre 2022',
  content: 'Tirocinio curriculare universitario svolto al termine del percorso di studi. Sono state svolte le ' +
      'seguenti attività: analisi, progettazione e sviluppo di funzionalità mancanti in un sistema di videoispezione.'
}, {
  name: 'Full-stack developer',
  place: 'Scai Itec, Padova (PD)',
  start: 'Maggio 2023',
  end: '*'
}];

function WorkExperiences() {

  const [ workExperiences, setWorkExperiences ] = useState([]);

  useEffect(() => {
    getDocs(collection(firestore, 'work_experiences')).then(({ docs }) => 
      setWorkExperiences(docs.map(doc => doc.data()))
    );
  }, []);

  return (
      <Timeline sx={{
        '&': {
          height: '100%',
          margin: 0,
          justifyContent: 'space-between'
        }, [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0,
          padding: 0
        }, [`& .${timelineItemClasses.root}`]: {
          flexGrow: 1
        }
      }}>
        {workExperiences.map((it, key) => (
            <TimelineItem key={key}>
              <TimelineOppositeContent></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <Work fontSize="small" />
                </TimelineDot>
                {key !== workTimeline.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h3">
                  {it.role}
                </Typography>
                <List>
                  {it.place && (
                      <ListItem>
                        <ListItemIcon><Place fontSize="small" /></ListItemIcon>
                        <ListItemText>{it.place}</ListItemText>
                      </ListItem>
                  )}
                  {it.start && (
                      <ListItem>
                        <ListItemIcon><CalendarMonth fontSize="small" /></ListItemIcon>
                        <ListItemText>{it.start}{it.end && ' - ' + it.end}</ListItemText>
                      </ListItem>
                  )}
                </List>
                {it.description && (
                    <Typography>{it.content}</Typography>
                )}
              </TimelineContent>
            </TimelineItem>
        ))}
      </Timeline>
  );
}

export default WorkExperiences;
