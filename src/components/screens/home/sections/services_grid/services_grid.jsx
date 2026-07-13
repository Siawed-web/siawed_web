import React from "react";
import styles from "./services_grid.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";
import { 
  RocketTakeoff, 
  Mortarboard, 
  Shop, 
  Building, 
  People, 
  Palette
} from "react-bootstrap-icons";

const ServicesGridSection = () => {
  const services = [
    {
      title: "Entrepreneurship Development",
      desc: "End-to-end training programs for aspiring and existing women entrepreneurs \u2014 from idea validation to business launch and growth.",
      icon: <RocketTakeoff aria-hidden="true" />
    },
    {
      title: "Capacity Building & Training",
      desc: "Industry-relevant skill programs to enhance professional and entrepreneurial competencies, including digital and leadership skills.",
      icon: <Mortarboard aria-hidden="true" />
    },
    {
      title: "Market Access & WENBA",
      desc: "Showcase products through exhibitions, events and the WENBA marketplace \u2014 reaching corporate buyers and consumers nationwide.",
      icon: <Shop aria-hidden="true" />
    },
    {
      title: "Corporate Linkages",
      desc: "Connecting women-owned businesses with corporate procurement teams, investors and strategic partners for sustainable growth.",
      icon: <Building aria-hidden="true" />
    },
    {
      title: "Community Outreach",
      desc: "Health, wellness, human rights advocacy and environmental awareness programs that uplift entire communities and families.",
      icon: <People aria-hidden="true" />
    },
    {
      title: "SHG & Artisan Support",
      desc: "Dedicated pathways for self-help groups and native artisans to formalise, brand and scale their craft-based enterprises.",
      icon: <Palette aria-hidden="true" />
    }
  ];

  return (
    <section className={styles.ServicesGridSection}>
      <CustomContainer>
        <SectionHeading
          title="What We Do"
          head={<>A Complete Ecosystem to <em className="em-orange">Start, Grow &amp; Scale</em></>}
          caption=""
        />

        <div className={styles.gridWrap}>
          {services.map((service, idx) => (
            <div 
              className={styles.serviceCard} 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className={styles.iconWrap}>{service.icon}</div>
              <h4 className={`${styles.cardTitle} ${FONTS.font2}`}>{service.title}</h4>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServicesGridSection;
