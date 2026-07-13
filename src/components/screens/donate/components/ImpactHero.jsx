import React, { useEffect, useState } from "react";
import styles from "../donate.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const ImpactHero = () => {
  return (
    <section className={styles.heroSection}>
      <CustomContainer>
        <h1 className={styles.heroTitle} data-aos="fade-down">Create Lasting Impact</h1>
        <p className={styles.heroSubtitle} data-aos="fade-up" data-aos-delay="100">
          Your contribution empowers women, educates children, and builds sustainable communities across the region.
        </p>
        
        <div className={styles.statsGrid} data-aos="fade-up" data-aos-delay="200">
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10,000+</div>
            <div className={styles.statLabel}>Women Empowered</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>SHGs Connected</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Projects Completed</div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ImpactHero;
