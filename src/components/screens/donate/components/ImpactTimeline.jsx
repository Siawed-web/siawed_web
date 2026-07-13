import React from "react";
import { CheckCircleFill, GearFill, GiftFill, CheckAll } from "react-bootstrap-icons";
import styles from "../donate.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const steps = [
  { icon: <CheckCircleFill />, text: "Donation Received" },
  { icon: <GearFill />, text: "Program Allocation" },
  { icon: <GiftFill />, text: "Impact Delivery" },
  { icon: <CheckAll />, text: "Impact Report Sent" },
];

const ImpactTimeline = () => {
  return (
    <section className={styles.timelineSection}>
      <CustomContainer>
        <h2 className="text-center mb-5" data-aos="fade-up">The Journey of Your Donation</h2>
        <div className={styles.timeline} data-aos="fade-up" data-aos-delay="100">
          {steps.map((step, idx) => (
            <div key={idx} className={styles.timelineStep}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <div className={styles.stepText}>{step.text}</div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default ImpactTimeline;
