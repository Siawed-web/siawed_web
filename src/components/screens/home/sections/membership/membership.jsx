import React from "react";
import styles from "./membership.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import CustomButton from "../../../../ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";

const MEMBERSHIP_PLANS = [
  {
    badge: "Student / Startup",
    title: "🥉 Bronze",
    tagline: "“From Student to Future Entrepreneur”",
    price: "1,000",
    period: "per year",
    features: [
      "Entrepreneurship exposure",
      "Skill development workshops",
      "Internship opportunities",
      "Startup challenges & competitions",
      "Mentor network access"
    ],
    button: { href: "/membership/join?type=student", variant: "blue", text: "Join Now" }
  },
  {
    badge: "Most Popular",
    title: "🥈 Silver",
    tagline: "“Homepreneurs - Turn Your Small Business into a Brand”",
    // tagline: "“Turn Your Small Business into a Brand”",
    price: "3,000",
    period: "per year",
    features: [
      "Marketing & social media training",
      "Sell through WENBA marketplace",
      "Branding & packaging guidance",
      "Exhibitions & sales events",
      "Govt scheme advisory"
    ],
    button: { href: "/membership/join?type=homepreneur", variant: "orange", text: "Join Now" },
    isFeatured: true
  },
  {
    badge: "SME / Established",
    title: "🥇 Gold",
    tagline: "“Small & Medium Entrepreneurs (SMEs)”",
    price: "5,000",
    period: "per year",
    features: [
      "Advanced business strategy",
      "Brand visibility at SIAWED events",
      "New markets via WENBA",
      "Partner collaboration opportunities",
      "Authority & mentoring track"
    ],
    button: { href: "/membership/join?type=sme", variant: "blue", text: "Join Now" }
  },
  {
    badge: "Diamond / Mentor",
    title: "💎 Diamond",
    tagline: "“Established Women Entrepreneurs & Mentors”",
    price: "10,000",
    period: "per year",
    features: [
      "Featured on SIAWED platforms",
      "Exclusive networking circles",
      "Speaking & panel opportunities",
      "Annual awards recognition",
      "Mentor aspiring entrepreneurs"
    ],
    button: { href: "/membership/join?type=diamond", variant: "blue", text: "Join Now" }
  },
  {
    badge: "Corporate",
    title: "Corporate Partner",
    tagline: "“Drive Vendor Diversity at Scale”",
    price: "25,000",
    period: "per year",
    features: [
      "Women-owned supplier database",
      "Buyer-seller meets access",
      "CSR partnership opportunities",
      "Vendor diversity sourcing support",
      "Women Empowerment Partner badge"
    ],
    button: { href: "/contact", variant: "teal", text: "Enquire Now" },
    isTeal: true
  }
];

const MembershipSection = () => {
  return (
    <div className={styles.membershipContainer}>
      <SectionWrapper id="membership" bgColor="ivory" aos="fade-up">
        <p className="eyebrow eyebrow-orange">Membership Plans</p>
        <h2 className={`section-heading ${FONTS.font2}`}>Find the Right Plan for <em className="em-blue">Your Journey</em></h2>
        <p className="lead">From students to established businesses &#8212; every woman entrepreneur has a place in the SIAWED ecosystem.</p>

        <div className={styles.membershipGrid}>
          {MEMBERSHIP_PLANS.slice(0, 4).map((plan, index) => (
            <article 
              key={index}
              className={`${styles.planCard} ${plan.isFeatured ? styles.planCardFeatured : ''} ${plan.isTeal ? styles.planCardTeal : ''}`.trim()}
            >
              <span className={styles.planCardBadge}>{plan.badge}</span>
              <h3 className={FONTS.font2}>{plan.title}</h3>
              <p className={styles.planCardTagline}>{plan.tagline}</p>
              <div className={`${styles.planCardPrice} ${FONTS.font2}`}>&#8377;{plan.price}</div>
              <div className={styles.planCardPeriod}>{plan.period}</div>
              <hr className={styles.planCardDivider}/>
              <ul className={styles.planCardFeatures}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
              <CustomButton href={plan.button.href} variant={plan.button.variant} fullWidth={true}>
                {plan.button.text}
              </CustomButton>
            </article>
          ))}
        </div>

        <div className={styles.corporateRow}>
          {MEMBERSHIP_PLANS.slice(4).map((plan, index) => (
            <article 
              key={`corp-${index}`}
              className={`${styles.planCard} ${styles.planCardTeal} ${styles.corporateCardFullWidth}`}
            >
              <div className={styles.corpHeader}>
                <span className={styles.planCardBadge}>{plan.badge}</span>
                <h3 className={FONTS.font2}>{plan.title}</h3>
                <p className={styles.planCardTagline}>{plan.tagline}</p>
              </div>

              <ul className={`${styles.planCardFeatures} ${styles.corpFeatures}`}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>

              <div className={styles.corpAction}>
                <div className={`${styles.planCardPrice} ${FONTS.font2}`}>&#8377;{plan.price}</div>
                <div className={styles.planCardPeriod}>{plan.period}</div>
                <CustomButton href={plan.button.href} variant={plan.button.variant} fullWidth={true}>
                  {plan.button.text}
                </CustomButton>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default MembershipSection;
