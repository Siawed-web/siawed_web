import React from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./programs.module.scss";
import FONTS from "@/styles/fonts";
import { Image } from "react-bootstrap";

const ProgramsScreen = () => {
  return (
    <>
      <PageBanner
        title="Our Programs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs" },
        ]}
        bgImage="/images/img-1.JPG"
        bgPos="top"
      />

      <section className={styles.programsContentSection}>
        <CustomContainer>
          
          {/* EDP Program */}
          <div id="entrepreneurship" className={styles.sectionBlock} data-aos="fade-up">
            <div className={styles.imageWrap}>
              <Image src="/images/img-1.JPG" alt="Entrepreneurship Development" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                Entrepreneurship Development Program (EDP)
              </h2>
              <div className={styles.content}>
                <p><strong>Basic and Advanced.</strong></p>
                <p>
                  These programs are conducted to develop and implement training programs and workshops 
                  to promote women entrepreneurship. These programs offer customized mentorship and 
                  guidance for each target group as per their requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Capacity Building - Reversed */}
          <div id="training" className={`${styles.sectionBlock} ${styles.sectionBlockReverse}`} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.imageWrap}>
              <Image src="/images/img-4.JPG" alt="Capacity Building and Training" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                Capacity Building and Skill Training
              </h2>
              <div className={styles.content}>
                <p>
                  SIAWED creates a platform to facilitate collaboration with local women associations, 
                  corporate leaders, business entities, and academic institutions.
                </p>
                <p>
                  Such livelihood enhancement training establishes partnerships with government bodies, 
                  banks, investors, and venture capitalists to support entrepreneurial ventures.
                </p>
              </div>
            </div>
          </div>

          {/* SHG & Artisan */}
          <div id="shg" className={styles.sectionBlock} data-aos="fade-up" data-aos-delay="200">
            <div className={styles.imageWrap}>
              <Image src="/images/img-5.JPG" alt="SHG & Artisan Support" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                SHG & Artisan Support
              </h2>
              <div className={styles.content}>
                <p>
                  SIAWED empowers self help groups and artisans by providing entrepreneurship training, 
                  skill enhancement, mentoring and livelihood opportunities, thereby enabling sustainable 
                  and scalable enterprises for women and rural communities.
                </p>
                <p>
                  SIAWED helps SHG members transition from income generation activities to sustainable businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Employability & Placement */}
          <div id="employability" className={`${styles.sectionBlock} ${styles.sectionBlockReverse}`} data-aos="fade-up">
            <div className={styles.imageWrap}>
              <Image src="/images/img-2.JPG" alt="Employability & Placement support" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                Employability & Placement Support
              </h2>
              <div className={styles.content}>
                <p>
                  We offer dedicated support to enhance employability skills, including resume building, interview preparation, and soft skills training, to confidently connect candidates with top placement opportunities in the industry.
                </p>
              </div>
            </div>
          </div>

          {/* Internship programmes */}
          <div id="internship" className={styles.sectionBlock} data-aos="fade-up">
            <div className={styles.imageWrap}>
              <Image src="/images/img-3.JPG" alt="Internship programmes" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                Internship Programmes
              </h2>
              <div className={styles.content}>
                <p>
                  Our comprehensive internship programs are designed to provide students and early professionals with hands-on experience, practical knowledge, and valuable industry exposure to kickstart their careers.
                </p>
              </div>
            </div>
          </div>

          {/* Business networking */}
          <div id="networking" className={`${styles.sectionBlock} ${styles.sectionBlockReverse}`} data-aos="fade-up">
            <div className={styles.imageWrap}>
              <Image src="/images/img-6.JPG" alt="Business networking" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                Business Networking
              </h2>
              <div className={styles.content}>
                <p>
                  Facilitating valuable connections among entrepreneurs, professionals, and industry leaders to foster business growth, encourage collaborative ventures, and expand market reach.
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Partnerships */}
          <div id="corporate" className={styles.sectionBlock} data-aos="fade-up">
            <div className={styles.imageWrap}>
              <Image src="/wenba_2.webp" alt="Corporate Partnerships" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                Corporate Partnerships
              </h2>
              <div className={styles.content}>
                <p>
                  Collaborating with leading corporations to create impactful CSR initiatives, secure inclusive procurement opportunities, and build mutually beneficial ecosystems that drive sustainable social transformation.
                </p>
              </div>
            </div>
          </div>

          {/* College collaborations */}
          <div id="college" className={`${styles.sectionBlock} ${styles.sectionBlockReverse}`} data-aos="fade-up">
            <div className={styles.imageWrap}>
              <Image src="/hero/hero-img-lg.jpeg" alt="College collaborations" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                College Collaborations
              </h2>
              <div className={styles.content}>
                <p>
                  Partnering with academic institutions to bridge the gap between education and industry requirements. We bring practical entrepreneurial insights directly to students through specialized workshops and seminars.
                </p>
              </div>
            </div>
          </div>

          {/* Exhibitions */}
          <div id="exhibitions" className={styles.sectionBlock} data-aos="fade-up">
            <div className={styles.imageWrap}>
              <Image src="/wenba_prod_1.webp" alt="Exhibitions" />
            </div>
            <div className={styles.textWrap}>
              <h2 className={`${styles.heading} ${FONTS.font2}`}>
                Exhibitions
              </h2>
              <div className={styles.content}>
                <p>
                  Organizing and participating in diverse trade fairs, offline exhibitions, and business meets to showcase the unique products of our women entrepreneurs and artisans to a broader, engaged audience.
                </p>
              </div>
            </div>
          </div>

        </CustomContainer>
      </section>
    </>
  );
};

export default ProgramsScreen;
