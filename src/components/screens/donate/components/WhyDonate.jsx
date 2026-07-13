import React from "react";
import { ShieldCheck, Eye, Lock, FileEarmarkCheck } from "react-bootstrap-icons";
import styles from "../donate.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const features = [
  { icon: <Eye />, title: "100% Transparent", desc: "Every rupee is tracked and accounted for." },
  { icon: <ShieldCheck />, title: "Verified Beneficiaries", desc: "Direct support to vetted women entrepreneurs and SHGs." },
  { icon: <Lock />, title: "Secure Payments", desc: "Bank-grade encryption for all your transactions." },
  { icon: <FileEarmarkCheck />, title: "Real Impact Reports", desc: "Receive periodic updates on how your donation is used." },
];

const WhyDonate = () => {
  return (
    <section className={styles.whySection}>
      <CustomContainer>
        <h2 className="text-center" data-aos="fade-up">Why Donate to SIAWED?</h2>
        <div className={styles.featureGrid}>
          {features.map((item, idx) => (
            <div key={idx} className={styles.featureCard} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className={styles.featureIcon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default WhyDonate;
