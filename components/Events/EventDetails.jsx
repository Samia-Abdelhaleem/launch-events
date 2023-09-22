import React from "react";
import EventSummary from "./EventSummary";
import EventLogistics from "./EventLogistics";
import EventContent from "./EventContent";

const EventDetailsInfo = ({ event }) => {
  const { id, description, title } = event;
  return (
    <>
      <EventSummary title={title} />

      <EventLogistics event={event} />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailsInfo;
