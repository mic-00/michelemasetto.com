import {collection, getDocs, orderBy, query} from "@firebase/firestore";
import {CalendarMonth, Place, Work} from "@mui/icons-material";
import TimelineOppositeContent, {timelineOppositeContentClasses} from "@mui/lab/TimelineOppositeContent";
import {timelineItemClasses} from "@mui/lab/TimelineItem";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {List, ListItem, ListItemIcon, ListItemText, Skeleton, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {firestore} from "firebase.js";


function WorkExperiences() {

  const [ workExperiences, setWorkExperiences ] = useState([]);
  const language = useSelector(state => state.language);

  useEffect(() => {
    setWorkExperiences([]);
    getDocs(query(collection(firestore, `${language}/translations/work_experiences`), orderBy('start')))
        .then(({ docs }) => setWorkExperiences(docs.map(doc => doc.data()))
    );
  }, [ language ]);

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
        {workExperiences.length === 0 && (
            <>
              <TimelineItem>
                <TimelineOppositeContent></TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                      <Work fontSize="small" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Skeleton variant="text" height={60} />
                    <Skeleton variant="rectangular" height={100} />
                  </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent></TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                      <Work fontSize="small" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Skeleton variant="text" height={60} />
                    <Skeleton variant="rectangular" height={100} />
                  </TimelineContent>
              </TimelineItem>
            </>
        )}
        {workExperiences.length > 0 && workExperiences.map((it, key) => (
            <TimelineItem key={key}>
              <TimelineOppositeContent></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <Work fontSize="small" />
                </TimelineDot>
                {key !== workExperiences.length - 1 && <TimelineConnector />}
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
                    <Typography>{it.description}</Typography>
                )}
              </TimelineContent>
            </TimelineItem>
        ))}
      </Timeline>
  );
}

export default WorkExperiences;
