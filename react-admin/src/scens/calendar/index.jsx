import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { tokens } from '../../theme'


import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";


export default function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  currentEvents.map((event) => (console.log(event.start)))

  console.log("hiiiiiii")
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    //   find calendar in api
    const calendarApi = selected.view.calendar;
    console.log(calendarApi)
    //    unselect cell
    calendarApi.unselect();

    if (title) {
      console.log(selected.allDay)
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          sx={{
            backgroundColor:colors.primary[400],
            padding:"15px",
            borderRadius:"4px",
            [theme.breakpoints.only("xs")]: {
              display: "none",
            }
          }}
        >
          <Typography variant="h5"

          >Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",

                }}
              >
                <ListItemText
                  primary={event.title}
                  sx={{ color: "red" }}
                  secondary={
                    <Typography
                    >

                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px" width="10px" sx={{
          '& .fc-header-toolbar': {
            width: "100%",
            [theme.breakpoints.down("md")]: {
              fontSize: "17px",
            },
            [theme.breakpoints.only("xs")]: {
              fontSize: "10px",
            }

          },
          "& .fc-toolbar-title": {
            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
            },
            [theme.breakpoints.only("xs")]: {
              fontSize: "10px",
            }
          },
          "& .fc-today-button": {
            [theme.breakpoints.down("md")]: {
              display: "none"
            },
            [theme.breakpoints.only("xs")]: {
              display: "none"
            }
          },
          '& .fc-prev-button,& .fc-next-button': {
            [theme.breakpoints.down("md")]: {
              fontSize: "10px"
            },
            [theme.breakpoints.only("xs")]: {
              fontSize: "5px"
            }
          },
          "& .fc-col-header-cell": {
            [theme.breakpoints.only("xs")]: {
              fontSize: "13px"
            }
          }
        }}>
          <FullCalendar

            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",

            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};