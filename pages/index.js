import { useRouter } from "next/router";
import EventsList from "../components/Events/EventsList";
import EventsSearch from "../components/Events/EventsSearch";
import Layout from "../components/layout/layout";
import { getFeaturedEvents } from "../data/Events";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  const router = useRouter();
  function SearchEvent(year, month) {
    router.push(`/events/${year}/${month}`);
  }
  return (
    <>
      <EventsSearch onSearchEvent={SearchEvent} />
      <EventsList events={featuredEvents} />
    </>
  );
}
