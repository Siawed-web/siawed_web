import React from "react";
import styles from "./CtaBanner.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import CustomButton from "../../../../ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const CtaBannerSection = () => {
  return (
    <div className={styles.ctaBannerContainer}>
      <div className={styles.ctaBanner}>
        <CustomContainer>
          <div className={styles.ctaBannerInner}>
            <div>
              <h2 className={`${styles.ctaBannerHeading} ${FONTS.font2}`}>
                Ready to <em>Empower</em>
                <br />
                or Be Empowered?
              </h2>
              <p className={styles.ctaBannerSub}>
                Whether you&#39;re a woman entrepreneur ready to grow, or a
                corporate seeking diverse vendors &#8212; there&#39;s a place
                for you in the SIAWED ecosystem.
              </p>
            </div>
            <div className={styles.ctaBannerBtns}>
              <CustomButton href="/membership" variant="orange" size="lg" flickering={true}>
                Join SIAWED &#8594;
              </CustomButton>
              <CustomButton href="https://www.wenba.in" target="_blank" variant="outline-white" size="lg">
                Register in WENBA
              </CustomButton>
              <CustomButton href="/donate" variant="outline-white">
                &#9829; Donate
              </CustomButton>
            </div>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
};

export default CtaBannerSection;
