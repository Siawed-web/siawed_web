import React from "react";
import SEO from "@/components/common/seo";
import EventsScreen from "@/components/screens/events/events";
import { supabase } from "@/lib/supabaseClient";

const EventsPage = ({ upcomingEvents, previousEvents, webinars, workshops, businessVisits }) => {
  return (
    <>
      <SEO 
        title="Events | SIAWED" 
        description="Explore the upcoming and previous events, workshops, and webinars organized by SIAWED for women empowerment and entrepreneurial development." 
      />
      <EventsScreen 
        upcomingEvents={upcomingEvents} 
        previousEvents={previousEvents}
        webinars={webinars}
        workshops={workshops}
        businessVisits={businessVisits}
      />
    </>
  );
};

export async function getServerSideProps() {
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: false });

  if (error) {
    console.error("Error fetching events:", error);
    return {
      props: {
        upcomingEvents: [],
        previousEvents: {},
        webinars: [],
        workshops: [],
        businessVisits: [],
      }
    };
  }

  // Get current date string in YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  
  const upcomingEvents = [];
  const previousEventsList = [];
  const webinars = [];
  const workshops = [];
  const businessVisits = [];

  events.forEach(event => {
    // 1. Group by category
    if (event.type === 'webinar') webinars.push(event);
    if (event.type === 'workshop') workshops.push(event);
    if (event.type === 'business visit') businessVisits.push(event);

    // 2. Upcoming gets ALL types of events that are in the future
    if (event.event_date >= today) {
      upcomingEvents.push(event);
    } else {
      // 3. Past Events only gets events of type 'event'
      if (event.type === 'event' || !event.type) {
        previousEventsList.push(event);
      }
    }
  });

  // Group previous events by year
  const previousEvents = {};
  previousEventsList.forEach(event => {
    const year = event.event_date.split('-')[0];
    if (!previousEvents[year]) {
      previousEvents[year] = [];
    }
    previousEvents[year].push(event);
  });

  return {
    props: {
      upcomingEvents,
      previousEvents,
      webinars,
      workshops,
      businessVisits
    }
  };
}

export default EventsPage;
