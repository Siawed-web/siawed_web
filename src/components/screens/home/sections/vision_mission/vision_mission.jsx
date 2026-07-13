import React from "react";
import styles from "./vision_mission.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { Eye, Rocket } from "react-bootstrap-icons";
import { FONTS } from "@/styles/fonts";

const VisionMissionSection = () => {
  return (
    <section className={styles.VisionMissionSection}>
      <CustomContainer>
        <SectionHeading
          title="Our Focus"
          head="Vision & Mission"
          caption="Empowering Women. Connecting Markets. Creating sustainable Growth."
        />

        <div className={styles.cardsWrap}>
          {/* Vision Card */}
          <div
            className={styles.card}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className={styles.iconWrapper}>
              <Eye className={styles.icon} />
            </div>
            <h3 className={`${styles.cardTitle} ${FONTS.font2}`}>Vision</h3>
            <p className={styles.cardText}>
              Empowering women to become successful entrepreneurs, business leaders and contributors to a sustainable and inclusive economy.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className={styles.card}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className={styles.iconWrapper}>
              <Rocket className={styles.icon} />
            </div>
            <h3 className={`${styles.cardTitle} ${FONTS.font2}`}>Mission</h3>
            <p className={styles.cardText}>
              To support women entrepreneurs through training, networking, mentorship, market access and business opportunities enabling them to build, grow and scale successful enterprises through SIAWED and WENBA Eco system.
            </p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default VisionMissionSection;
