import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./wenba_teaser.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import FONTS from "@/styles/fonts";
import { ArrowRight, BagHeartFill, BasketFill, Gem, BoxSeam } from "react-bootstrap-icons";

const CATEGORIES = [
  { icon: <BagHeartFill />, name: "Handicrafts" },
  { icon: <BasketFill />, name: "Organic Foods" },
  { icon: <Gem />, name: "Jewelry" },
  { icon: <BoxSeam />, name: "Apparel" },
];

const WenbaTeaserSection = () => {
  return (
    <section className={styles.WenbaTeaserSection}>
      <Container>
        <div className={styles.teaserWrap}>
          <Row className="align-items-center">
            {/* Logo & Intro Column */}
            <Col lg={5} md={12} className={styles.leftCol}>
              <div data-aos="fade-right">
                <div className={styles.logoWrap}>
                  <Image
                    src="/logo/wenba_logo.png"
                    alt="WENBA Logo"
                    className={styles.wenbaLogo}
                  />
                </div>
                <h3 className={`${`${styles.heading} ${FONTS.font2}`} ${FONTS.font1}`}>
                  Empowering Native Business Artisans
                </h3>
                <p className={styles.desc}>
                  WENBA is SIAWED&apos;s dedicated marketplace designed to connect
                  women entrepreneurs, rural artisans, and self-help groups
                  directly with consumers and corporate buyers. Discover
                  authentic, handcrafted, and high-quality products while
                  supporting women-led enterprises.
                </p>
                <CustomButton
                  variant="primary"
                  className={styles.ctaBtn}
                  onClick={() => window.open("https://www.wenba.in", "_blank")}
                >
                  Explore WENBA <ArrowRight className={styles.icon} />
                </CustomButton>
              </div>
            </Col>

            {/* Categories Column */}
            <Col lg={7} md={12} className={styles.rightCol}>
              <div className={styles.categoriesWrap} data-aos="fade-left">
                <h4 className={`${FONTS.font1} ${FONTS.font2}`}>Popular Categories</h4>
                <div className={styles.grid}>
                  {CATEGORIES.map((cat, idx) => (
                    <div key={idx} className={styles.catBox}>
                      <div className={styles.iconCircle}>{cat.icon}</div>
                      <span>{cat.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className={styles.infoBanner}>
                  <strong>Are you a woman entrepreneur?</strong>
                  <p>Register your products on WENBA today.</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default WenbaTeaserSection;
