import React from "react";
import styles from "../donate.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";

const FinalCTA = () => {
  return (
    <section className={styles.finalCtaSection}>
      <div className="container" data-aos="fade-up">
        <h2>Every Contribution Creates Opportunity</h2>
        <p className="lead">Join us in making a difference. Your support today changes lives tomorrow.</p>
        <div className={styles.ctaButtons}>
          <CustomButton href="#donate-section" variant="white" size="lg" style={{ color: '#e8701a' }}>Donate Now</CustomButton>
          <CustomButton href="/contact" variant="outline-white" size="lg">Contact Us</CustomButton>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
