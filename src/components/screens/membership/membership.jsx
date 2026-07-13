import React from "react";
import SectionWrapper from "@/components/ui/section_wrapper/section_wrapper";
import { FONTS } from "@/styles/fonts";
import HomeMembershipSection from "@/components/screens/home/sections/membership/membership";
import PageBanner from "@/components/common/page_banner/page_banner";
import styles from "./membership.module.scss";
import { Check, Check2Circle, CheckCircle } from "react-bootstrap-icons";

const MEMBERSHIP_CATEGORIES = [
  { icon: "🥉", title: "Bronze", desc: "Students" },
  { icon: "🥈", title: "Silver", desc: "Homepreneurs" },
  { icon: "🥇", title: "Gold", desc: "Small & Medium Entrepreneurs (SMEs)" },
  { icon: "💎", title: "Diamond", desc: "Established Women Entrepreneurs & Mentors" },
];

const MEMBERSHIP_BENEFITS = [
  "Participate in networking meetings",
  "Attend webinars, workshops and training programmes",
  "Connect with entrepreneurs, mentors and industry experts",
  "Access business support and entrepreneurial development initiatives",
  "Participate in business exhibitions, factory visits and exposure programmes",
  "Receive updates on collaborations, opportunities and special member events",
];

const MEMBER_EXPECTATIONS = [
  "• Maintain professionalism and mutual respect.",
  "• Promote ethical business practices.",
  "• Foster collaboration and knowledge sharing.",
  "• Support fellow members whenever possible.",
  "• Represent SIAWED positively in all interactions.",
];

const MembershipScreen = () => {
  return (
    <>
      {/* Become a Member Section */}
      <div id="become-member">
        <PageBanner
          title="Become a Member"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Membership" }]}
          bgImage="/images/img-11.JPG"
        />
      </div>

      {/* Benefits Section */}
      <SectionWrapper id="benefits" bgColor="white" aos="fade-up">
        <p className="eyebrow eyebrow-blue">Membership Benefits</p>
        <h2 className={`section-heading ${FONTS.font2}`}>
          Why <em className="em-orange">Join Us?</em>
        </h2>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              flex: "1 1 300px",
              padding: "2rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
            }}
          >
            <h3 className={FONTS.font2}>Networking Opportunities</h3>
            <p>
              Connect with like-minded women entrepreneurs, mentors, and
              industry leaders.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 300px",
              padding: "2rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
            }}
          >
            <h3 className={FONTS.font2}>Skill Development</h3>
            <p>
              Access to workshops, training sessions, and resources to enhance
              your business skills.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 300px",
              padding: "2rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
            }}
          >
            <h3 className={FONTS.font2}>Market Access</h3>
            <p>
              Gain visibility for your products and services through our
              platforms and events.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Existing Membership Plans Section from Home */}
      <HomeMembershipSection />

      {/* Guidelines Section */}
      <SectionWrapper id="guidelines" bgColor="parchment" aos="fade-up">
        <p className="eyebrow eyebrow-orange">Guidelines</p>
        <h2 className={`section-heading ${FONTS.font2}`}>
          Membership <em className="em-blue">Guidelines</em>
        </h2>
        <div className={styles.guidelinesContent}>
          <p className={styles.paragraph}><span className={styles.strongText}>Welcome to the SIAWED Community!</span></p>
          <p className={styles.paragraph}>Thank you for your interest in becoming a member of SIAWED – Southern Industrial Academy for Women Entrepreneurs Development.</p>
          <p className={styles.paragraph}>SIAWED is a professional platform committed to empowering women through entrepreneurship, leadership, networking, mentoring and skill development. Our members form a vibrant community that believes in learning together, supporting one another and creating opportunities for women at every stage of their entrepreneurial journey.</p>
          <p className={styles.paragraph}>By becoming a member, you agree to uphold the following guidelines.</p>
          
          <h3 className={styles.subHeading}>Membership Categories:</h3>
          <p className={styles.paragraph}>Membership is open under the following categories:</p>
          
          <div className={styles.categoriesGrid}>
            {MEMBERSHIP_CATEGORIES.map((category, index) => (
              <div key={index} className={styles.categoryCard}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <div className={`${styles.categoryTitle} ${FONTS.font2}`}>{category.title}</div>
                <div className={styles.categoryDesc}>{category.desc}</div>
              </div>
            ))}
          </div>

          <h3 className={styles.subHeading}>What Can You Expect from SIAWED?</h3>
          <p className={styles.paragraph}>As a member, you will have opportunities to:</p>
          <ul className={styles.list}>
            {MEMBERSHIP_BENEFITS.map((benefit, index) => (
              <li key={index} className={styles.listItem}>
                <CheckCircle/>
                {benefit}</li>
            ))}
          </ul>
          <p className={`${styles.paragraph} ${styles.noteText}`}>Please note: Benefits may vary depending on the membership category.</p>

          <h3 className={styles.subHeading}>Our Expectations from Members:</h3>
          <p className={styles.paragraph}>We request every member to:</p>
          <ul className={styles.list}>
            {MEMBER_EXPECTATIONS.map((expectation, index) => (
              <li key={index} className={styles.listItem}>{expectation}</li>
            ))}
          </ul>

          <h3 className={styles.subHeading}>Membership Validity:</h3>
          <p className={styles.paragraph}>Membership is valid for one year from the official commencement date communicated by SIAWED and may be renewed annually.</p>

          <h3 className={styles.subHeading}>Membership Fees:</h3>
          <p className={styles.paragraph}>Membership fees are payable annually as applicable to the selected membership category.</p>
          <p className={styles.paragraph}>Memberships are non-transferable. Fees are generally non-refundable, except where approved by SIAWED under exceptional circumstances.</p>

          <h3 className={styles.subHeading}>Privacy:</h3>
          <p className={styles.paragraph}>Personal information shared with SIAWED will be used only for membership administration, programme communication and official updates. We respect your privacy and do not disclose member information without consent, except where required by law.</p>

          <h3 className={styles.subHeading}>General Information:</h3>
          <p className={styles.paragraph}>Participation in SIAWED programmes does not guarantee employment, business opportunities, funding or commercial success. SIAWED serves as a platform to facilitate learning, networking and entrepreneurial growth.</p>
          <p className={styles.paragraph}>SIAWED reserves the right to revise membership policies and programme offerings from time to time in the interest of the organisation and its members.</p>
        </div>
      </SectionWrapper>
    </>
  );
};

export default MembershipScreen;
