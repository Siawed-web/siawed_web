import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./founder_spotlight.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import FONTS from "@/styles/fonts";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

const FounderSpotlightSection = () => {
  return (
    <section className={styles.FounderSpotlightSection}>
      <Container>
        <div className={styles.spotlightWrap}>
          <Row className="align-items-center">
            {/* Image Column */}
            <Col lg={4} md={12} className={styles.imgCol}>
              <div className={styles.imgWrap} data-aos="fade-right">
                <Image
                  src="/founder.webp"
                  alt="Founder Spotlight"
                  className={styles.founderImg}
                />
                <div className={styles.accentCircle}></div>
              </div>
            </Col>

            {/* Content Column */}
            <Col lg={8} md={12} className={styles.contentCol}>
              <div className={styles.contentWrap} data-aos="fade-left">
                <span className={styles.label}>Founder Spotlight</span>
                <h3 className={`${`${styles.heading} ${FONTS.font2}`} ${FONTS.font2}`}>
                  Empowering women to lead, build, and scale their dreams.
                </h3>
                <p className={styles.intro}>
                  For over 14 years, our founder has dedicated her life to
                  creating opportunity, dignity, and economic freedom for women
                  across India. Her visionary leadership has shaped SIAWED into a
                  thriving ecosystem where thousands of women entrepreneurs
                  find the resources, network, and courage to succeed.
                </p>
                <Link href="/about" passHref legacyBehavior>
                  <CustomButton variant={2} className={styles.readMoreBtn}>
                    Read Full Story <ArrowRight className={styles.icon} />
                  </CustomButton>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FounderSpotlightSection;
