import React from "react";
import styles from "./team.module.scss";
import SectionWrapper from "@/components/ui/section_wrapper/section_wrapper";
import { FONTS } from "@/styles/fonts";
import { Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ms Kavitha Kannabiran",
      role: "Secretary",
      image: "/images/team/KavithaKannabiran.jpg",
      bio: "Dedicated Secretary of SIAWED, ensuring smooth operations and strategic execution.",
      linkedin: "#",
      email: "mailto:secretary@siawed.org",
    },
    {
      name: "Ms J Uma Maheswari",
      role: "Chief Co ordinator",
      image: "/images/team/UmaMaheswari.jpeg",
      bio: "Chief Coordinator driving program initiatives and managing key organizational activities.",
      linkedin: "#",
      email: "mailto:coordinator@siawed.org",
    },
    {
      name: "Ms Nandhini Saravanan",
      role: "Regional Co ordinator",
      image: "/images/team/NandhiniSaravanan.jpg",
      bio: "Regional Coordinator expanding SIAWED's reach and impact across local communities.",
      linkedin: "#",
      email: "mailto:regional@siawed.org",
    },
    {
      name: "Mr S Sivakumar",
      role: "System Administrator",
      image: "/images/team/Shivakumar.jpg",
      bio: "System Administrator managing IT infrastructure and digital platforms for SIAWED.",
      linkedin: "#",
      email: "mailto:sysadmin@siawed.org",
    },
  ];

  return (
    <div id="team" className={styles.teamContainer}>
      <SectionWrapper bgColor="white" aos="fade-up">
        <div className={styles.header}>
          <p className="eyebrow eyebrow-orange">Our Leadership</p>
          <h2 className={`section-heading ${FONTS.font2}`}>
            Meet the <em className="em-orange">Team</em>
          </h2>
          <p className="lead">
            Guided by leaders who understand the entrepreneurial journey
            firsthand, bringing decades of industry experience to empower the
            next generation of women leaders.
          </p>
        </div>
      </SectionWrapper>

      <CustomContainer lg>
        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  className={styles.image}
                  loading="lazy"
                />
                {/* <div className={styles.socialOverlay}>
                  <a href={member.linkedin} aria-label={`${member.name} LinkedIn`} className={styles.socialLink}>
                    <Linkedin />
                  </a>
                  <a href={member.email} aria-label={`Email ${member.name}`} className={styles.socialLink}>
                    <EnvelopeFill />
                  </a>
                </div> */}
              </div>
              <div className={styles.content}>
                <h3 className={`${styles.name} ${FONTS.font2}`}>
                  {member.name}
                </h3>
                <span className={styles.role}>{member.role}</span>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </div>
  );
};

export default TeamSection;
