import React from "react";
import styles from "../donate.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";

const CorporateCSR = () => {
  return (
    <section>
      <CustomContainer>
        <div className={styles.corporateSection} data-aos="zoom-in">
          <h2>Corporate & CSR Partnerships</h2>
          <p className="lead mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Empower your organization&apos;s CSR goals by partnering with SIAWED. We facilitate bulk donations, corporate sponsorships, and employee giving programs to maximize social impact.
          </p>
          <CustomButton href="/contact" variant="teal" size="lg">
            Partner With Us
          </CustomButton>
        </div>
      </CustomContainer>
    </section>
  );
};

export default CorporateCSR;
