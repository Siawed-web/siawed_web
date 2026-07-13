import React from "react";
import styles from "./impact.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import { FONTS } from "@/styles/fonts";

const ImpactSectionx = () => {
  return (
    <div className={styles.impactContainer}>
      <SectionWrapper id="impact" bgColor="charcoal" aos="fade-up" className={styles.impactWrapper}>
        <div className={styles.impactGrid}>
          <div className={styles.impactCell}>
            <span className={`${styles.impactCellNumber} ${FONTS.font2}`}>400+</span>
            <span className={styles.impactCellLabel}>Women Entrepreneurs</span>
          </div>
          <div className={styles.impactCell}>
            <span className={`${styles.impactCellNumber} ${FONTS.font2}`}>150+</span>
            <span className={styles.impactCellLabel}>Vendor Partners</span>
          </div>
          <div className={styles.impactCell}>
            <span className={`${styles.impactCellNumber} ${FONTS.font2}`}>50+</span>
            <span className={styles.impactCellLabel}>Training Programs</span>
          </div>
          <div className={styles.impactCell}>
            <span className={`${styles.impactCellNumber} ${FONTS.font2}`}>1,000+</span>
            <span className={styles.impactCellLabel}>Beneficiaries</span>
          </div>
          <div className={styles.impactCell}>
            <span className={`${styles.impactCellNumber} ${FONTS.font2}`}>100+</span>
            <span className={styles.impactCellLabel}>Active Volunteers</span>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ImpactSectionx;
