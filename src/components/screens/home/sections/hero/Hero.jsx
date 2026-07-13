import React from "react";
import styles from "./Hero.module.scss";

import CustomButton from "../../../../ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";
import { Trophy } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroPill} data-aos="fade-right"
          data-aos-delay='100'
          >
            <span className={styles.heroPillDot}></span> Est. 2013 &#183;
            Chennai, India
          </div>
          <h1
            className={`${styles.heroH1} ${FONTS.font2}`}
            data-aos="fade-right"
          >
            Empowering
            <br />
            <em>Women</em>
            <br />
            Entrepreneurs.
          </h1>
          <p className={styles.heroSub} data-aos="fade-right"
          data-aos-delay='200'
          >
            SIAWED connects women-led enterprises, rural artisans, SHGs and
            social enterprises with corporates, institutions and consumers
            &#8212; creating lasting economic freedom.
          </p>
          <div className={styles.heroCtas} data-aos="fade-right"
          data-aos-delay='300'
          data-aos-offset="-1000px"
          >
            <CustomButton href="/membership" variant="orange" size="lg" flickering={true}>
              Join SIAWED
            </CustomButton>
            <CustomButton href="/wenba" variant="outline-white" size="lg">
              Register on WENBA &#8594;
            </CustomButton>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={`${styles.heroStatNumber} ${FONTS.font2}`}>
                14+
              </span>
              <span className={styles.heroStatLabel}>Years Active</span>
            </div>
            <div className={styles.heroStat}>
              <span className={`${styles.heroStatNumber} ${FONTS.font2}`}>
                100+
              </span>
              <span className={styles.heroStatLabel}>Volunteers</span>
            </div>
            <div className={styles.heroStat}>
              <span className={`${styles.heroStatNumber} ${FONTS.font2}`}>
                1,000+
              </span>
              <span className={styles.heroStatLabel}>Beneficiaries</span>
            </div>
            <div className={styles.heroStat}>
              <span className={`${styles.heroStatNumber} ${FONTS.font2}`}>
                400+
              </span>
              <span className={styles.heroStatLabel}>Entrepreneurs</span>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <Image
            src="/hero/hero-img-lg.jpeg"
            alt="Women Entrepreneurs smiling"
            loading="lazy"
            className={styles.heroPhoto}
          />
          <div className={styles.heroOverlay}></div>

          <div
            className={styles.heroBadge}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={styles.heroBadgeIcon}>
              <Trophy />
            </div>
            <div className={styles.heroBadgeContent}>
              <span className={styles.heroBadgeTitle}>100+ Women Artisans</span>
              <span className={styles.heroBadgeSub}>Empanelled on WENBA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
