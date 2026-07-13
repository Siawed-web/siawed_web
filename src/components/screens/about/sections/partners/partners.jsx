import React from "react";
import styles from "./partners.module.scss";
import SectionWrapper from "@/components/ui/section_wrapper/section_wrapper";
import { FONTS } from "@/styles/fonts";
import { AwardFill, BuildingFill, Bank2 } from "react-bootstrap-icons";

const PartnersSection = () => {
  const partners = [
    {
      name: "CTTE college for Women",
      location: "Sembium",
      status: "Partner",
      icon: <BuildingFill />
    },
    {
      name: "Avinashilingam University",
      location: "Coimbatore",
      status: "Partner",
      icon: <Bank2 />
    },
    {
      name: "Vels University",
      location: "Pallavaram",
      status: "Past MOU partner",
      icon: <Bank2 />
    },
    {
      name: "CED, Anna University",
      location: "Guindy",
      status: "Past MOU Partner",
      icon: <Bank2 />
    },
    {
      name: "Dr MGR university",
      location: "Maduravoyal",
      status: "Collaborative partner",
      icon: <Bank2 />
    }
  ];

  return (
    <div id="partners" className={styles.partnersContainer}>
      <SectionWrapper bgColor="charcoal" aos="fade-up">
        <div className={styles.header}>
          <p className="eyebrow eyebrow-blue">Network</p>
          <h2 className={`section-heading heading-inv ${FONTS.font2}`}>
            Partners & <em className="em-blue">Affiliates</em>
          </h2>
          <p className="lead lead-inv">
            We collaborate with leading educational institutions to foster entrepreneurship and empower young women with business acumen.
          </p>
        </div>

        <div className={styles.grid}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.card} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={styles.iconWrapper}>
                <AwardFill/>
              </div>
              <div className={styles.content}>
                <h3 className={`${styles.name} ${FONTS.font2}`}>{partner.name}</h3>
                <span className={styles.location}>{partner.location}</span>
                <span className={styles.status}>{partner.status}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PartnersSection;
