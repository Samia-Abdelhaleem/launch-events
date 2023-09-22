import React from "react";
import Event from "./Event";

import styles from "../../styles/EventsList.module.css";
const EventsList = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => {
        return <Event key={event.id} event={event} />;
      })}
    </ul>
  );
};

export default EventsList;
