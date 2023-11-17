import TimelineOppositeContent, {timelineOppositeContentClasses} from "@mui/lab/TimelineOppositeContent";
import {timelineItemClasses} from "@mui/lab/TimelineItem";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {CalendarMonth, Place, WorkspacePremium} from "@mui/icons-material";
import {List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";


function Education() {

  const { t } = useTranslation();

  const timeline = t('education', { returnObjects: true });

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
        {timeline.map((it, key) => (
            <TimelineItem key={key}>
              <TimelineOppositeContent></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkspacePremium fontSize="small" />
                </TimelineDot>
                {key !== timeline.length - 1 && <TimelineConnector />}
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
                {it.description && (
                    <Typography>{it.description}</Typography>
                )}
              </TimelineContent>
            </TimelineItem>
        ))}
      </Timeline>
  );
}

export default Education;
