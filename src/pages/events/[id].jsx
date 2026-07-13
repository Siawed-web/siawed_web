import React from "react";
import Head from "next/head";
import { supabase } from "@/lib/supabaseClient";
import EventDetailsScreen from "@/components/screens/event_details/event_details";

const EventDetailsPage = ({ event }) => {
  const title = event ? `${event.title} - SIAWED Events` : "Event Details - SIAWED";
  const description = event 
    ? event.description.substring(0, 150) + "..."
    : "Explore the details of SIAWED's events for women empowerment and entrepreneurial development.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Open Graph Tags for better social sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        {event?.image_url && <meta property="og:image" content={event.image_url} />}
      </Head>
      <EventDetailsScreen event={event} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  // Validate if id is a UUID
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  
  if (!uuidRegex.test(id)) {
    return { props: { event: null } };
  }

  const { data: event, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !event) {
    console.error("Error fetching event:", error);
    return {
      props: {
        event: null
      }
    };
  }

  return {
    props: {
      event,
    }
  };
}

export default EventDetailsPage;
