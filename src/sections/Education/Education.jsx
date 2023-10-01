import TimelineOppositeContent, {timelineOppositeContentClasses} from "@mui/lab/TimelineOppositeContent";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {CalendarMonth, Place, WorkspacePremium} from "@mui/icons-material";
import {List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";

const eduTimeline = [{
  name: 'Diploma di istruzione superiore',
  start: '2014',
  end: '2019',
  place: 'Istituto Tecnico J. F. Kennedy, Monselice (PD)'
}, {
  name: 'Laurea triennale in Informatica',
  start: 'Ottobre 2019',
  end: 'Dicembre 2022',
  place: 'Dipartimento di Matematica Tullio-Levi Civita, Università degli Studi di Padova, Padova (PD)'
}];

function Education() {
  return (
      <Timeline sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0,
        },
      }}>
        {eduTimeline.map((it, key) => (
            <TimelineItem key={key}>
              <TimelineOppositeContent></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkspacePremium fontSize="small" />
                </TimelineDot>
                {key !== eduTimeline.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h3">
                  {it.name}
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
                {it.content && (
                    <Typography>{it.content}</Typography>
                )}
              </TimelineContent>
            </TimelineItem>
        ))}
      </Timeline>
  );
}

export default Education;
