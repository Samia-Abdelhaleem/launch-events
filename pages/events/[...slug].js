import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/Events";
import EventDetailsInfo from "../../components/Events/EventDetails";
import { useState } from "react";
import EventsList from "../../components/Events/EventsList";
import ResultsTitle from "../../components/Events/ResultsTitle";
import ErrorAlert from "../../components/Events/ErrorAlert";

export default function FilteredEventPage() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!router.query.slug) {
    return <p>Loading...............</p>;
  } else {
    const [year, month] = filteredData;
    const events = getFilteredEvents({
      year: Number(year),
      month: Number(month),
    });
    const eventsDate = new Date(year, month - 1);
    return (
      <>
        {events.length ? (
          <>
            <ResultsTitle date={eventsDate} />
            <EventsList events={events} />
          </>
        ) : (
          <ErrorAlert>
            <p> No events found</p>
          </ErrorAlert>
        )}
      </>
    );
  }
}
// const event = getFilteredEvents(router.query.slug[0], router.query.slug[1]);

// const year = router.query.slug[0];
// const month = Number(router.query.slug[1]);
// const event = getFilteredEvents(year, month);
