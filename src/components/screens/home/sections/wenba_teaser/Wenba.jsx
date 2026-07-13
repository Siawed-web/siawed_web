import React from "react";
import styles from "./Wenba.module.scss";
import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import CustomButton from "../../../../ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";
import { Image } from "react-bootstrap";

const WenbaSection = () => {
  return (
    <div className={styles.wenbaContainer}>
      <SectionWrapper id="wenba" bgColor="charcoal" aos="fade-up">
        <div className={styles.wenbaTop}>
          {/* Left: WENBA brand + info */}
          <div>
            <div
              className={styles.wenbaBrandCard}
              role="img"
              aria-label="WENBA - Women Entrepreneurs Native Business Association"
            >
            <Image src="/logo/wenba_logo.png" width={90} alt="wenba_logo"/>
              <div>
                <span className={styles.wenbaBrandCardPowered}>
                  Powered by SIAWED
                </span>
                <span className={styles.wenbaBrandCardName}>
                  Women Entrepreneurs
                  <br />
                  Native Business Association
                </span>
              </div>
            </div>

            <p className="eyebrow eyebrow-teal">Discover WENBA</p>
            <h2 className={`section-heading heading-inv ${FONTS.font2}`}>
              The Native Business <em className="em-teal">Marketplace</em>
            </h2>
            <p className="lead lead-inv">
              WENBA is SIAWED&#39;s dedicated platform connecting women
              entrepreneurs, rural artisans, and SHGs directly with consumers
              and corporate buyers across India.
            </p>
            {/* 
            <div className={styles.wenbaCats} role="group" aria-label="Filter by category">
              <button className={`${styles.wenbaCat} ${styles.isActive}`}>All</button>
              <button className={styles.wenbaCat}>Handicrafts</button>
              <button className={styles.wenbaCat}>Organic Foods</button>
              <button className={styles.wenbaCat}>Jewellery</button>
              <button className={styles.wenbaCat}>Textiles</button>
              <button className={styles.wenbaCat}>Home Decor</button>
            </div> */}
          </div>

          {/* Right: CTAs + stats */}
          <div className={styles.wenbaRight}>
            <div
              className={styles.ctaGroup}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CustomButton href="/wenba#register" variant="teal" size="lg">
                Register as Vendor
              </CustomButton>
              &nbsp; &nbsp;
              <CustomButton
                href="/wenba#procurement"
                variant="outline-white"
                size="lg"
              >
                Corporate Procurement &#8594;
              </CustomButton>
            </div>
            <div
              className={styles.wenbaStats}
              role="list"
              aria-label="WENBA statistics"
            >
              <div role="listitem">
                <span className={styles.wenbaStatNumber}>1,000+</span>
                <span className={styles.wenbaStatLabel}>Products Listed</span>
              </div>
              <div role="listitem">
                <span className={styles.wenbaStatNumber}>500+</span>
                <span className={styles.wenbaStatLabel}>Women Artisans</span>
              </div>
              <div role="listitem">
                <span className={styles.wenbaStatNumber}>50+</span>
                <span className={styles.wenbaStatLabel}>Categories</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product image grid */}
        <div className={styles.wenbaImgs}>
          <div className={styles.wenbaImgCard} data-category="handicrafts">
            <Image
              src="/wenba_prod_1.webp"
              alt="Authentic Handicrafts on WENBA"
              loading="lazy"
            />
            <div className={styles.wenbaImgCardLabel}>
              Authentic Handicrafts
            </div>
          </div>
          <div className={styles.wenbaImgCard} data-category="textiles">
            <Image
              src="/wenba_2.webp"
              alt="Women Entrepreneurs on WENBA"
              loading="lazy"
            />
            <div className={styles.wenbaImgCardLabel}>Women Entrepreneurs</div>
          </div>
          <div className={styles.wenbaImgCard} data-category="all">
            <Image
              src="/images/wenba.webp"
              alt="SIAWED Community Impact"
              loading="lazy"
            />
            <div className={styles.wenbaImgCardLabel}>Community Impact</div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default WenbaSection;
