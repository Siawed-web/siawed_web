import React from "react";
import styles from "./what_we_do.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { CheckCircleFill } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";

const WhatWeDoSection = () => {
  const points = [
    "Promote entrepreneurship and self-employment among women",
    "Conduct skill development, business, and leadership training programs",
    "Connect women entrepreneurs with markets, buyers, investors, and corporate procurement channels",
    "Support business visibility through digital platforms and promotional initiatives",
    "Encourage innovation, sustainability, and inclusive economic growth",
    "Create opportunities for women-owned enterprises through the WENBA business ecosystem",
  ];

  return (
    <section className={styles.WhatWeDoSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.left} data-aos="fade-right">
            <SectionHeading
              title="What We Do"
              head="Empowering Women to Start, Grow, and Scale"
              caption="At SIAWED, we empower women to start, grow, and scale their businesses through a comprehensive ecosystem of support and opportunities."
              leftAllign
            />
            <div className={styles.pointsList}>
              {points.map((pt, i) => (
                <div className={styles.pointItem} key={i}>
                  <CheckCircleFill className={styles.checkIcon} />
                  <p>{pt}</p>
                </div>
              ))}
            </div>
            <p className={styles.goalText}>
              Our goal is not merely to create entrepreneurs, but to nurture confident business leaders capable of creating lasting economic and social impact.
            </p>
            <div className={styles.btnWrap}>
              <CustomButton href="/programs">Read More &rarr;</CustomButton>
            </div>
          </div>
          <div className={styles.right} data-aos="fade-left">
            <div className={styles.imageWrap}>
              <Image src="/founder.webp" alt="What We Do" className={styles.mainImage} />
              <div className={styles.floatingBox}>
                <h4 className={FONTS.font2}>Comprehensive Ecosystem</h4>
                <p>Support and Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default WhatWeDoSection;
