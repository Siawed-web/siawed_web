import React from "react";
import styles from "./WhatWeDo.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import { FONTS } from "@/styles/fonts";
import { 
  RocketTakeoff, 
  Mortarboard, 
  Shop, 
  Building, 
  People, 
  Palette
} from "react-bootstrap-icons";

const WhatWeDoSection = () => {
  return (
    <div className={styles.wwdContainer}>
      <SectionWrapper id="programs" bgColor="ivory" aos="fade-up">
        <p className="eyebrow eyebrow-orange">What We Do</p>
        <h2 className={`section-heading ${FONTS.font2}`}>A Complete Ecosystem to <em className="em-orange">Start, Grow &amp; Scale</em></h2>

        <div className={styles.wwdGrid}>
          <article className={`${styles.wwdCard} ${styles.wwdCardFeatured}`}>
            <div className={styles.wwdCardIcon} aria-hidden="true"><RocketTakeoff /></div>
            <h3 className={FONTS.font2}>Entrepreneurship Development</h3>
            <p>End-to-end training programs for aspiring and existing women entrepreneurs &#8212; from idea validation to business launch and growth.</p>
          </article>

          <article className={styles.wwdCard}>
            <div className={`${styles.wwdCardIcon} ${styles.iconBgBlue}`} aria-hidden="true"><Mortarboard /></div>
            <h3 className={FONTS.font2}>Capacity Building &amp; Training</h3>
            <p>Industry-relevant skill programs to enhance professional and entrepreneurial competencies, including digital and leadership skills.</p>
          </article>

          <article className={styles.wwdCard}>
            <div className={`${styles.wwdCardIcon} ${styles.iconBgOrange}`} aria-hidden="true"><Shop /></div>
            <h3 className={FONTS.font2}>Market Access &amp; WENBA</h3>
            <p>Showcase products through exhibitions, events and the WENBA marketplace &#8212; reaching corporate buyers and consumers nationwide.</p>
          </article>

          <article className={styles.wwdCard}>
            <div className={`${styles.wwdCardIcon} ${styles.iconBgBlue}`} aria-hidden="true"><Building /></div>
            <h3 className={FONTS.font2}>Corporate Linkages</h3>
            <p>Connecting women-owned businesses with corporate procurement teams, investors and strategic partners for sustainable growth.</p>
          </article>

          <article className={styles.wwdCard}>
            <div className={`${styles.wwdCardIcon} ${styles.iconBgGreen}`} aria-hidden="true"><People /></div>
            <h3 className={FONTS.font2}>Community Outreach</h3>
            <p>Health, wellness, human rights advocacy and environmental awareness programs that uplift entire communities and families.</p>
          </article>

          <article className={styles.wwdCard}>
            <div className={`${styles.wwdCardIcon} ${styles.iconBgTeal}`} aria-hidden="true"><Palette /></div>
            <h3 className={FONTS.font2}>SHG &amp; Artisan Support</h3>
            <p>Dedicated pathways for self-help groups and native artisans to formalise, brand and scale their craft-based enterprises.</p>
          </article>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default WhatWeDoSection;
