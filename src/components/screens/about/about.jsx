import React from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./about.module.scss";
import { Image } from "react-bootstrap";
import FONTS from "@/styles/fonts";
import WhyChooseUsSection from "../home/sections/why_choose_us/why_choose_us";
import CredibilityBanner from "../home/sections/credibility_banner/credibility_banner";
import VisionMissionSection from "../home/sections/vision_mission/vision_mission";
import TestimonialsSection from "../home/sections/testimonials/testimonials";
import TeamSection from "./sections/team/team";
import AwardsSection from "./sections/awards/awards";
import PartnersSection from "./sections/partners/partners";
import FounderArticle from "./sections/founder_article/founder_article";

// import PartnersSection from "./sections/partners/partners";

const AboutScreen = () => {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        bgImage="/images/img-9.JPG"
        bgPos="center"
      />

      <section id="who-we-are" className={styles.aboutContentSection}>
        <CustomContainer>
          <div className={styles.wrap}>
            <div className={styles.left} data-aos="fade-right">
              <div className={styles.imageWrap}>
                <Image src="/founder.webp" alt="SIAWED Founders" className={styles.mainImage} />
                <div className={styles.experienceBadge}>
                  <span className={styles.years}>25+</span>
                  <span className={styles.text}>Years of Experience</span>
                </div>
              </div>
            </div>

            <div className={styles.right} data-aos="fade-left">
              <h2 className={`${`${styles.heading} ${FONTS.font2}`} ${FONTS.font2}`}>
                Empowering Women Through Entrepreneurship
              </h2>
              
              <div className={styles.textContent}>
                <p>
                  <strong>Southern Industrial Academy for Women Entrepreneurs Development (SIAWED)</strong> is a not-for-profit organization dedicated to empowering women through entrepreneurship, skill development, leadership, and economic opportunities.
                </p>
                <p>
                  Led by first-generation entrepreneurs with over 25 years of business leadership experience, SIAWED has been creating pathways for women to transform their ideas into successful enterprises — providing access to training, mentorship, networking market linkages and business support services.
                </p>
                
                <div className={styles.highlightBox}>
                  We believe that when women thrive as entrepreneurs, families prosper, communities grow stronger, and economies become more inclusive.
                </div>

                <p>
                  SIAWED is guided by leaders who understand the entrepreneurial journey firsthand. The organization is spearheaded by <strong>Ms. T. Vanadhi Devi</strong> and <strong>Mr. R. K. Mohankumar</strong> — first-generation entrepreneurs who rose from humble beginnings in the remote villages of Southern Tamil Nadu to establish successful business ventures through determination, perseverance, and vision.
                </p>
                <p>
                  Their entrepreneurial experience is reinforced by the legacy of Vista Expedition, a globally connected freight forwarding and logistics enterprise with over 25 years of industry presence. The practical business knowledge, professional networks, and leadership insights gained through decades of entrepreneurship continue to strengthen SIAWED’s mission of nurturing and supporting women-owned enterprises.
                </p>
              </div>
            </div>
          </div>
        </CustomContainer>
        <FounderArticle />
        <div id="vision">
          <VisionMissionSection/>
        </div>
        <TeamSection/>
        <WhyChooseUsSection/>
        <PartnersSection/>
        <AwardsSection/>
        <CredibilityBanner/>
        
        <TestimonialsSection/>
        
      </section>
    </>
  );
};

export default AboutScreen;
