import React from "react";
import styles from "./why_choose_us.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import {
  Award,
  Briefcase,
  Cart,
  Heart,
  GraphUp,
  CalendarEvent,
} from "react-bootstrap-icons";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import FONTS from "@/styles/fonts";
import SectionHeading from "@/components/common/section_heading/section_heading";

const WhyChooseUsSection = () => {
  return (
    <section className={styles.WhyChooseUsSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          {/* Left Column: Content and List */}
          <div className={styles.left}>
           

            <SectionHeading
              title={"Why Choose Us"}
              caption={` We approach every initiative with compassion, operate with full
              transparency, and focus on creating sustainable impact that improves
              lives.`}

              head={'What Makes our Impact Strong'}
              leftAllign
            />

            <div
              className={styles.listCard}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <Award className={styles.icon} />
                </div>
                <div className={styles.itemTextWrap}>
                  <h4 className={`${styles.itemTitle} ${FONTS.font2}`}>Proven Legacy</h4>
                  <p className={styles.itemText}>
                    Backed by 25+ years of entrepreneurial experience and 14+
                    years of dedicated service to women entrepreneurship
                    development.
                  </p>
                </div>
              </div>

              <div className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <Briefcase className={styles.icon} />
                </div>
                <div className={styles.itemTextWrap}>
                  <h4 className={`${styles.itemTitle} ${FONTS.font2}`}>
                    Holistic Business Support
                  </h4>
                  <p className={styles.itemText}>
                    Training, mentorship, networking, and market access — all
                    under one ecosystem.
                  </p>
                </div>
              </div>

              <div className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <Cart className={styles.icon} />
                </div>
                <div className={styles.itemTextWrap}>
                  <h4 className={`${styles.itemTitle} ${FONTS.font2}`}>
                    Market Access Through WENBA
                  </h4>
                  <p className={styles.itemText}>
                    Connecting women-owned businesses with buyers, corporates,
                    and new markets.
                  </p>
                </div>
              </div>

              <div className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <Heart className={styles.icon} />
                </div>
                <div className={styles.itemTextWrap}>
                  <h4 className={`${styles.itemTitle} ${FONTS.font2}`}>
                    Creating Impact Beyond Business
                  </h4>
                  <p className={styles.itemText}>
                    Empowering women entrepreneurs to drive economic
                    independence and community growth.
                  </p>
                </div>
              </div>

              <div className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <GraphUp className={styles.icon} />
                </div>
                <div className={styles.itemTextWrap}>
                  <h4 className={`${styles.itemTitle} ${FONTS.font2}`}>Vendor Development</h4>
                  <p className={styles.itemText}>
                    Supporting businesses in improving visibility, credibility,
                    and readiness for larger market opportunities.
                  </p>
                </div>
              </div>

              <div className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <CalendarEvent className={styles.icon} />
                </div>
                <div className={styles.itemTextWrap}>
                  <h4 className={`${styles.itemTitle} ${FONTS.font2}`}>
                    Events & Knowledge Sharing
                  </h4>
                  <p className={styles.itemText}>
                    Seminars, webinars, conferences, business meetups, and
                    learning forums that encourage collaboration and growth.
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              style={{ marginTop: "30px" }}
            >
              <CustomButton href="/about">Learn More &rarr;</CustomButton>
            </div>
          </div>

          {/* Right Column: Collage Images */}
          <div className={styles.right} data-aos="fade-left">
            <div className={styles.collageContainer}>
              <div className={styles.imageMain}>
                <Image src="/images/img-3.JPG" alt="Empowerment walk" />
              </div>
              <div className={styles.imageSub}>
                <Image
                  src="/images/img-2.JPG"
                  alt="World Population Day rally"
                />
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default WhyChooseUsSection;
