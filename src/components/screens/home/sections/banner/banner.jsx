import React from "react";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { ArrowRight, PeopleFill } from "react-bootstrap-icons";
import FONTS from "@/styles/fonts";

const BannerSection = () => {
  const images = ["avtr1.jpg", "avtr1.jpg", "avtr1.jpg", "avtr1.jpg"];

  return (
    <section className={styles.BannerSection}>
      <div className={styles.top}>
        <CustomContainer>
          <div className={styles.topWrap}>
            <div
              className={styles.badge14Years}
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <strong>Est. 2013</strong>
              <span>Serving women for 14 years</span>
            </div>
            <div
              className={styles.bar}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className={styles.images}>
                {images.map((img, idx) => {
                  return (
                    <Image
                      key={`img_${idx}`}
                      src={img}
                      width={25}
                      height={25}
                      alt=""
                    />
                  );
                })}
              </div>
              Southern Industrial Academy for Women Entrepreneurs Development
            </div>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className={FONTS.font2}
            >
              <span>Empowering</span>
              <br />
              Women Entrepreneurs. <br />
              <span>Enabling</span>
              <br />
              Responsible Procurement.
            </h1>

            <div
              className={styles.btns}
              data-aos="fade-up"
              data-aos-offset="-1000"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <CustomButton flickering={true}>
                Join Siawed <PeopleFill />
              </CustomButton>

              <CustomButton variant={2}>Become a CSR Partner <ArrowRight/></CustomButton>
            </div>
          </div>
        </CustomContainer>
      </div>

      <div className={styles.btm}>
        <CustomContainer>
          <div className={styles.btmWrap}>
            <div
              className={styles.btmLft}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p
                className={styles.heroSubline}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                14 years of creating opportunity, dignity and economic freedom
                for women across India.
              </p>
              <p className={styles.txt}>
                Connecting women-led enterprises, native entrepreneurs, rural
                artisans, SHGs and social enterprises with corporates,
                institutions and consumers.
              </p>
              <br />
              <CustomButton>Request Corporate Catalogue</CustomButton>
            </div>
          </div>
        </CustomContainer>
      </div>
    </section>
  );
};

export default BannerSection;
