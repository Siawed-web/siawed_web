import React from "react";
import { Container, Image } from "react-bootstrap";
import PageBanner from "@/components/common/page_banner/page_banner";
import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./event_details.module.scss";

const EventDetailsScreen = ({ event }) => {
  if (!event) {
    return (
      <main className={styles.detailsPage}>
        <PageBanner 
          title="Event Not Found" 
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events", href: "/events" }, { label: "404" }]} 
        />
        <Container className="pt-5">
          <div className={styles.notFoundState}>
            <h2>Oops! We couldn&apos;t find that event.</h2>
            <p>It might have been removed, or the link is incorrect.</p>
            <CustomButton href="/events" variant="blue">
              Back to Events
            </CustomButton>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className={styles.detailsPage}>
      <PageBanner 
        title="Event Details" 
        breadcrumbs={[
          { label: "Home", href: "/" }, 
          { label: "Events", href: "/events" }, 
          { label: event.title }
        ]} 
      />
      <Container className="pt-5 pb-5">
        <div className={styles.contentWrapper}>
          <div className={styles.detailsCard}>
            
            <div className={styles.eventHeader}>
              <span className={styles.eventDate}>{event.event_date}</span>
              <h1 className={styles.eventTitle}>{event.title}</h1>
            </div>

            {event.image_url && (
              <Image 
                src={event.image_url} 
                alt={event.title} 
                className={styles.eventImage}
              />
            )}

            <div className={styles.eventDescription}>
              {/* Split by newlines if description has paragraphs */}
              {event.description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.actionSection}>
              <CustomButton href="/events" variant="outline-blue">
                &larr; Back to Events
              </CustomButton>
            </div>

          </div>
        </div>
      </Container>
    </main>
  );
};

export default EventDetailsScreen;
