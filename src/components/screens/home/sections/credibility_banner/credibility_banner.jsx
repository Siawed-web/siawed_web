import React from "react";
import styles from "./credibility_banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import { AwardFill } from "react-bootstrap-icons";

const CredibilityBanner = () => {
  return (
    <section className={styles.CredibilityBanner}>
      <CustomContainer>
        <div className={styles.wrap} data-aos="zoom-in" data-aos-duration="800">
          <div className={styles.iconWrap}>
            <AwardFill className={styles.icon} />
          </div>
          <div className={styles.textContent}>
            <h3 className={`${`${styles.title} ${FONTS.font2}`} ${FONTS.font2}`}>Built on Entrepreneurial Excellence</h3>
            <p className={styles.quote}>
              “Led by first-generation entrepreneurs with over 25 years of business leadership experience and a passion for empowering women-led enterprises.”
            </p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default CredibilityBanner;
