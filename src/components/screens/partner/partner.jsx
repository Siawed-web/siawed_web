import React from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { FONTS } from "@/styles/fonts";
import { Whatsapp } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";
import styles from "./partner.module.scss";

const partnersData = [
  {
    id: "corporate",
    title: "Corporate Partnership",
    desc: "Collaborate through internships, placements, vendor development, business outsourcing, industry visits, and business networking.",
    image: "/images/img-1.JPG"
  },
  {
    id: "csr",
    title: "CSR Collaboration",
    desc: "Support impactful projects in women empowerment, skill development, entrepreneurship, and sustainable livelihoods.",
    image: "/images/csr.jpg"
  },
  {
    id: "education",
    title: "Educational Institutions",
    desc: "Partner for entrepreneurship programmes, internships, career guidance, industry interaction, and placement support.",
    image: "/images/img-2.JPG"
  },
  {
    id: "volunteers",
    title: "Volunteers",
    desc: "Contribute your time and skills through mentoring, events, outreach, training, and community initiatives.",
    image: "/images/img-4.JPG"
  },
  {
    id: "mentors",
    title: "Mentors",
    desc: "Guide aspiring women entrepreneurs by sharing your experience, knowledge, and industry expertise.",
    image: "/images/img-5.JPG"
  },
  {
    id: "sponsors",
    title: "Sponsors",
    desc: "Support SIAWED events and initiatives while enhancing your organization’s social impact and brand visibility.",
    image: "/images/img-6.JPG"
  }
];

const PartnerScreen = () => {
  return (
    <>
      <PageBanner
        title="Partner With Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partner" },
        ]}
        bgImage="/images/img-1.JPG"
        bgPos="top"
      />
      
      <section className={styles.partnerContentSection}>
        <CustomContainer>
          <div className={styles.introBox} data-aos="fade-up">
            <h2 className={FONTS.font2}>Join Hands with SIAWED</h2>
            <p>
              Join hands with SIAWED to empower women through entrepreneurship, skill development, employment, and business opportunities. Together, we can create a sustainable ecosystem of growth and empowerment.
            </p>
            <CustomButton href="https://wa.me/916381814441" target="_blank" variant="orange" size="lg" flickering={true}>
              <Whatsapp className="me-2" /> For Enquiries: +91 63818 14441
            </CustomButton>
          </div>

          <div>
            {partnersData.map((item, index) => (
              <div 
                id={item.id} 
                key={item.id} 
                className={`${styles.sectionBlock} ${index % 2 !== 0 ? styles.sectionBlockReverse : ''}`} 
                data-aos="fade-up"
              >
                <div className={styles.imageWrap}>
                  <Image src={item.image} alt={item.title} />
                </div>
                <div className={styles.textWrap}>
                  <h2 className={`${styles.heading} ${FONTS.font2}`}>
                    {item.title}
                  </h2>
                  <div className={styles.content}>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CustomContainer>
      </section>
    </>
  );
};

export default PartnerScreen;
