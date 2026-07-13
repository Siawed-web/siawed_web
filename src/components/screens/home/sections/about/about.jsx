import React from "react";
import styles from "./about.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import CustomButton from "../../../../ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";
import { RocketTakeoff, People, Tree, Megaphone } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";

const AboutSection = () => {
  return (
    <div className={styles.aboutContainer}>
      <SectionWrapper id="about" bgColor="white" aos="fade-up">
        <div className={styles.aboutGrid}>
          {/* Left Col: Overlapping Images */}
          <div className={styles.aboutImages}>
            <Image src="/images/img-1.JPG" alt="Women collaborating" loading="lazy" className={styles.aboutImgMain}/>
            <Image src="/wenba_2.webp" alt="Workshop session" loading="lazy" className={styles.aboutImgAccent}/>
            <div className={styles.aboutStamp}>
              <span className={styles.aboutStampNum}>14</span>
              <span className={styles.aboutStampLbl}>Years of Impact</span>
            </div>
          </div>

          {/* Right Col: Text & Pillars */}
          <div>
            <p className="eyebrow eyebrow-blue">About SIAWED</p>
            <h2 className={`section-heading ${FONTS.font2}`}>Empowering Women Through <em className="em-blue">Entrepreneurship</em></h2>
            <p className="lead">
              Southern Industrial Academy for Women Entrepreneurs Development (SIAWED) is a not-for-profit organisation dedicated to empowering women through entrepreneurship, skill development, leadership and economic opportunities across India.
            </p>

            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}><RocketTakeoff /></div>
                <div>
                  <h4 className={`${styles.pillarTitle} ${FONTS.font2}`}>Enterprise Support</h4>
                  <p className={styles.pillarDesc}>Training, mentorship &amp; market access</p>
                </div>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}><People /></div>
                <div>
                  <h4 className={`${styles.pillarTitle} ${FONTS.font2}`}>Corporate Connect</h4>
                  <p className={styles.pillarDesc}>Linking women-owned businesses to buyers</p>
                </div>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}><Tree /></div>
                <div>
                  <h4 className={`${styles.pillarTitle} ${FONTS.font2}`}>Community Growth</h4>
                  <p className={styles.pillarDesc}>SHG support &amp; artisan uplift</p>
                </div>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}><Megaphone /></div>
                <div>
                  <h4 className={`${styles.pillarTitle} ${FONTS.font2}`}>Advocacy &amp; Policy</h4>
                  <p className={styles.pillarDesc}>Human rights &amp; women&#39;s dignity</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '36px' }}>
              <CustomButton href="/about" variant="blue" size="lg">Read Our Story &#8594;</CustomButton>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutSection;
