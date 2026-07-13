import React from "react";
import { Container, Tabs, Tab, Image } from "react-bootstrap";
import PageBanner from "@/components/common/page_banner/page_banner";
import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./events.module.scss";
import Link from "next/link";

const EventsScreen = ({ upcomingEvents = [], previousEvents = {}, webinars = [], workshops = [], businessVisits = [] }) => {
  // Sort years in descending order
  const sortedYears = Object.keys(previousEvents).sort((a, b) => b - a);

  // Combine all previous events into one array for the "All" tab
  const allPreviousEvents = sortedYears.flatMap((year) => previousEvents[year]);

  return (
    <main className={styles.eventsPage}>
      <PageBanner
        title="Events"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
        bgImage="/images/img-6.JPG"
        bgPos="0px -50px"
      />
      <Container className="pt-5">
        {/* Upcoming Events Section */}
        <section className="mb-5">
          <h2 className={styles.sectionTitle} id="upcoming">
            Upcoming Events
          </h2>
          {upcomingEvents && upcomingEvents.length > 0 ? (
            <div className={styles.eventsGrid}>
              {upcomingEvents.map((event) => (
                <Link
                  href={`/events/${event.id}`}
                  key={event.id}
                  className={styles.eventCard}
                >
                  {event.image_url && (
                    <Image
                      src={event.image_url}
                      alt={event.title}
                      className={styles.cardImage}
                    />
                  )}
                  <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                    <div className={styles.eventDate}>{event.event_date}</div>
                    {event.type && (
                      <span className="badge text-capitalize" style={{ fontSize: '0.75rem', backgroundColor: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd' }}>
                        {event.type}
                      </span>
                    )}
                  </div>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDesc}>{event.description}</p>
                  <div className={styles.cardAction}>
                    <CustomButton variant="outline-blue" size="sm" fullWidth>
                      View Details
                    </CustomButton>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted">
              No upcoming events at the moment. Stay tuned!
            </p>
          )}
        </section>

        {/* Previous Events Section */}
        <section className={styles.previousSection} id="past">
          <h2 className={styles.sectionTitle}>Past Events</h2>
          <Tabs
            defaultActiveKey={sortedYears.length > 0 ? sortedYears[0] : "All"}
            id="previous-events-tabs"
            className="mb-4 left-aligned-tabs"
          >
            {sortedYears.map((year) => (
              <Tab eventKey={year} title={year} key={year}>
                <div className={styles.eventsGrid}>
                  {previousEvents[year].map((event) => (
                    <div key={event.id} className={styles.eventCard}>
                      {event.image_url && (
                        <Image
                          src={event.image_url}
                          alt={event.title}
                          className={styles.cardImage}
                        />
                      )}
                      <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                        <div className={styles.eventDate}>{event.event_date}</div>
                        {event.type && (
                          <span className="badge text-capitalize" style={{ fontSize: '0.75rem', backgroundColor: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd' }}>
                            {event.type}
                          </span>
                        )}
                      </div>
                      <h3 className={styles.eventTitle}>{event.title}</h3>
                      <p className={styles.eventDesc}>{event.description}</p>
                      <div className={styles.cardAction}>
                        <CustomButton
                          href={`/events/${event.id}`}
                          variant="outline-blue"
                          size="sm"
                          fullWidth
                        >
                          View Details
                        </CustomButton>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab>
            ))}

            <Tab eventKey="All" title="All">
              <div className={styles.eventsGrid}>
                {allPreviousEvents.map((event) => (
                  <div key={event.id} className={styles.eventCard}>
                    {event.image_url && (
                      <Image
                        src={event.image_url}
                        alt={event.title}
                        className={styles.cardImage}
                      />
                    )}
                    <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                      <div className={styles.eventDate}>{event.event_date}</div>
                      {event.type && (
                        <span className="badge text-capitalize" style={{ fontSize: '0.75rem', backgroundColor: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd' }}>
                          {event.type}
                        </span>
                      )}
                    </div>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventDesc}>{event.description}</p>
                    <div className={styles.cardAction}>
                      <CustomButton
                        href={`/events/${event.id}`}
                        variant="outline-blue"
                        size="sm"
                        fullWidth
                      >
                        View Details
                      </CustomButton>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>
          </Tabs>
        </section>

        {/* Webinars Section */}
        <section className="mb-5" id="webinars">
          <h2 className={styles.sectionTitle}>Webinars</h2>
          {webinars && webinars.length > 0 ? (
            <div className={styles.eventsGrid}>
              {webinars.map((event) => (
                <Link href={`/events/${event.id}`} key={event.id} className={styles.eventCard}>
                  {event.image_url && <Image src={event.image_url} alt={event.title} className={styles.cardImage} />}
                  <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                    <div className={styles.eventDate}>{event.event_date}</div>
                    {event.type && (
                      <span className="badge text-capitalize" style={{ fontSize: '0.75rem', backgroundColor: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd' }}>
                        {event.type}
                      </span>
                    )}
                  </div>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDesc}>{event.description}</p>
                  <div className={styles.cardAction}>
                    <CustomButton variant="outline-blue" size="sm" fullWidth>View Details</CustomButton>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted">No webinars at the moment. Stay tuned!</p>
          )}
        </section>

        {/* Workshops Section */}
        <section className="mb-5" id="workshops">
          <h2 className={styles.sectionTitle}>Workshops</h2>
          {workshops && workshops.length > 0 ? (
            <div className={styles.eventsGrid}>
              {workshops.map((event) => (
                <Link href={`/events/${event.id}`} key={event.id} className={styles.eventCard}>
                  {event.image_url && <Image src={event.image_url} alt={event.title} className={styles.cardImage} />}
                  <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                    <div className={styles.eventDate}>{event.event_date}</div>
                    {event.type && (
                      <span className="badge text-capitalize" style={{ fontSize: '0.75rem', backgroundColor: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd' }}>
                        {event.type}
                      </span>
                    )}
                  </div>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDesc}>{event.description}</p>
                  <div className={styles.cardAction}>
                    <CustomButton variant="outline-blue" size="sm" fullWidth>View Details</CustomButton>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted">No workshops at the moment. Stay tuned!</p>
          )}
        </section>

        {/* Business Visits Section */}
        <section className="mb-5" id="visits">
          <h2 className={styles.sectionTitle}>Business Visits</h2>
          {businessVisits && businessVisits.length > 0 ? (
            <div className={styles.eventsGrid}>
              {businessVisits.map((event) => (
                <Link href={`/events/${event.id}`} key={event.id} className={styles.eventCard}>
                  {event.image_url && <Image src={event.image_url} alt={event.title} className={styles.cardImage} />}
                  <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                    <div className={styles.eventDate}>{event.event_date}</div>
                    {event.type && (
                      <span className="badge text-capitalize" style={{ fontSize: '0.75rem', backgroundColor: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd' }}>
                        {event.type}
                      </span>
                    )}
                  </div>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDesc}>{event.description}</p>
                  <div className={styles.cardAction}>
                    <CustomButton variant="outline-blue" size="sm" fullWidth>View Details</CustomButton>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted">No business visits at the moment. Stay tuned!</p>
          )}
        </section>
      </Container>
    </main>
  );
};

export default EventsScreen;
