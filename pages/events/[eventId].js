import { useRouter } from "next/router";
import { getEventById } from "../../data/Events";
import Event from "../../components/Events/Event";
import EventDetailsInfo from "../../components/Events/EventDetails";
import ErrorAlert from "../../components/Events/ErrorAlert";

export default function EventDetails() {
  const router = useRouter();

  if (router.query) {
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    return (
      <>
        {!event ? (
          <ErrorAlert>
            <p>No Event Found</p>{" "}
          </ErrorAlert>
        ) : (
          <EventDetailsInfo event={event} />
        )}
      </>
    );
  }
}
