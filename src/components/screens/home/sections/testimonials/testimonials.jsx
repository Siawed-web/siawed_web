import React from "react";
import styles from "./testimonials.module.scss";

import SectionWrapper from "../../../../ui/section_wrapper/section_wrapper";
import { FONTS } from "@/styles/fonts";

const TestimonialsSection = () => {
  return (
    <div className={styles.testimonialsContainer}>
      <SectionWrapper id="testimonials" bgColor="white" aos="fade-up">
        <p className="eyebrow eyebrow-blue">Testimonials</p>
        <h2 className={`section-heading ${FONTS.font2}`}>Voices of Real <em className="em-orange">Impact</em></h2>
        <p className="lead">Hear from women entrepreneurs, educators, and partners whose lives have been shaped by the SIAWED ecosystem.</p>

        <div className={styles.testiGrid}>
          <article className={styles.testiCard}>
            <p className={`${styles.testiCardQuote} ${FONTS.font2}`}>The guidance from Ms Vanadhi Devi and recognition through the Budding Entrepreneur Award motivated me greatly. SIAWED helped me gain referrals, visibility, and valuable business support.</p>
            <div className={styles.testiCardAuthor}>
              <img src="https://siawed-demo.vercel.app/images/testimonials/6.webp" alt="Ms Kalyani" loading="lazy"/>
              <div>
                <span className={styles.testiCardName}>Ms Kalyani</span>
                <span className={styles.testiCardRole}>SIAWED Member &amp; Awardee</span>
              </div>
            </div>
          </article>

          <article className={styles.testiCard}>
            <p className={`${styles.testiCardQuote} ${FONTS.font2}`}>SIAWED is an amazing association for aspiring women entrepreneurs. The opportunities to connect, network, and grow together have been truly priceless.</p>
            <div className={styles.testiCardAuthor}>
              <img src="https://siawed-demo.vercel.app/images/testimonials/4.webp" alt="Mrs Manju" loading="lazy"/>
              <div>
                <span className={styles.testiCardName}>Mrs Manju</span>
                <span className={styles.testiCardRole}>Founder, Arigni Herbal Products</span>
              </div>
            </div>
          </article>

          <article className={styles.testiCard}>
            <p className={`${styles.testiCardQuote} ${FONTS.font2}`}>Creating safe workplaces, educating women, and training on job skills are key. SIAWED contributes significantly towards women&#39;s economic empowerment.</p>
            <div className={styles.testiCardAuthor}>
              <img src="https://siawed-demo.vercel.app/images/testimonials/2.webp" alt="Dr K Deepa Mala" loading="lazy"/>
              <div>
                <span className={styles.testiCardName}>Dr K Deepa Mala</span>
                <span className={styles.testiCardRole}>Founder, Research &amp; Action Centre</span>
              </div>
            </div>
          </article>

          <article className={styles.testiCard}>
            <p className={`${styles.testiCardQuote} ${FONTS.font2}`}>Through SIAWED, I received speaking opportunities, business leads, and recognition as Budding Entrepreneur of the Year 2017. Truly grateful for all the support.</p>
            <div className={styles.testiCardAuthor}>
              <img src="https://siawed-demo.vercel.app/images/testimonials/5.webp" alt="Ms Deepika V" loading="lazy"/>
              <div>
                <span className={styles.testiCardName}>Ms Deepika V</span>
                <span className={styles.testiCardRole}>Digital Marketer, Rajapalayam</span>
              </div>
            </div>
          </article>

          <article className={styles.testiCard}>
            <p className={`${styles.testiCardQuote} ${FONTS.font2}`}>SIAWED is a great platform for college students and aspiring women entrepreneurs to connect with industry professionals. I look forward to extending continued support.</p>
            <div className={styles.testiCardAuthor}>
              <img src="https://siawed-demo.vercel.app/images/testimonials/3.webp" alt="Prof Dr Rama Vaidyanathan" loading="lazy"/>
              <div>
                <span className={styles.testiCardName}>Prof Dr Rama Vaidyanathan</span>
                <span className={styles.testiCardRole}>Director R&amp;D, APJ Abdul Kalam Centre</span>
              </div>
            </div>
          </article>

          <article className={styles.testiCard}>
            <p className={`${styles.testiCardQuote} ${FONTS.font2}`}>This programme has been crafted with so much care. It is a great step towards entrepreneurship. I wish SIAWED scales greater heights &#8212; my college will stand with you every step.</p>
            <div className={styles.testiCardAuthor}>
              <img src="https://siawed-demo.vercel.app/images/testimonials/1.webp" alt="Prof Dr Malathy Selvakkumar" loading="lazy"/>
              <div>
                <span className={styles.testiCardName}>Prof Dr Malathy Selvakkumar</span>
                <span className={styles.testiCardRole}>Principal, S.A. College of Arts &amp; Science</span>
              </div>
            </div>
          </article>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default TestimonialsSection;
