import React from "react";
import styles from "./awards.module.scss";
import SectionWrapper from "@/components/ui/section_wrapper/section_wrapper";
import { FONTS } from "@/styles/fonts";
import { AwardFill, TrophyFill, StarFill, ShieldFillCheck } from "react-bootstrap-icons";

const AwardsSection = () => {
  const awardsList = [
    {
      title: "Excellence in Women Empowerment",
      organization: "National Entrepreneurship Board",
      year: "2023",
      icon: <TrophyFill />,
      desc: "Recognized for outstanding contribution to rural women entrepreneurship and SHG development."
    },
    {
      title: "Best Skilling Initiative",
      organization: "Skill India Awards",
      year: "2022",
      icon: <AwardFill />,
      desc: "Awarded for the WENBA program's innovative approach to market linkages."
    },
    {
      title: "Community Impact Leader",
      organization: "Social Impact Forum",
      year: "2021",
      icon: <StarFill />,
      desc: "Honored for creating sustainable livelihoods for over 1,000+ beneficiaries."
    },
    {
      title: "NGO Transparency Seal",
      organization: "Credibility Alliance",
      year: "2020",
      icon: <ShieldFillCheck />,
      desc: "Certified for maintaining the highest standards of financial transparency and governance."
    }
  ];

  return (
    <div id="awards" className={styles.awardsContainer}>
      <SectionWrapper bgColor="charcoal" aos="fade-up" containerSize="lg">
        <div className={styles.header}>
          <p className="eyebrow eyebrow-orange">Recognition</p>
          <h2 className={`section-heading heading-inv ${FONTS.font2}`}>
            Our <em className="em-orange">Awards</em>
          </h2>
          <p className="lead lead-inv">
            We are humbled by the recognition our initiatives have received, inspiring us to continue our mission with greater dedication.
          </p>
        </div>

        <div className={styles.grid}>
          {awardsList.map((award, index) => (
            <div key={index} className={styles.card} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={styles.iconWrapper}>
                {award.icon}
              </div>
              <div className={styles.content}>
                <span className={styles.year}>{award.year}</span>
                <h3 className={`${styles.title} ${FONTS.font2}`}>{award.title}</h3>
                <span className={styles.org}>{award.organization}</span>
                <p className={styles.desc}>{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AwardsSection;
