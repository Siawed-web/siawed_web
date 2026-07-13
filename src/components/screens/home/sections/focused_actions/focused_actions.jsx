import React, { useState } from "react";
import styles from "./focused_actions.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import {
  BagHeartFill,
  BasketFill,
  Gem,
  Grid,
  TelephoneFill,
  ArrowUpRight,
} from "react-bootstrap-icons";
import { Image } from "react-bootstrap";
import FONTS from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button/custom_button";

const FocusedActionsSection = () => {
  const [activeTab, setActiveTab] = useState("handicrafts");

  const tabsContent = {
    handicrafts: {
      title: "Authentic Handicrafts",
      description:
        "Support rural artisans by purchasing unique, handcrafted products made with traditional techniques and cultural heritage.",
      icon: <BagHeartFill className={styles.icon} />,
    },
    organic: {
      title: "Organic Foods",
      description:
        "Sourced directly from women farmers, offering high-quality, chemical-free produce and nutritious packaged goods.",
      icon: <BasketFill className={styles.icon} />,
    },
    jewelry: {
      title: "Exquisite Jewelry",
      description:
        "Discover beautiful, handcrafted jewelry pieces that empower the talented women who design and create them.",
      icon: <Gem className={styles.icon} />,
    },
  };

  return (
    <section className={styles.FocusedActionsSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          {/* Left Column: Image Collage & Metric Cards */}
          <div className={styles.left} data-aos="fade-right">
            <div className={styles.collageContainer}>
              {/* Top-Left Card */}
              <div className={styles.cardVolunteers}>
                <h4 className={`${styles.cardTitle} ${FONTS.font2}`}>500+ Women Artisans</h4>
                <div className={styles.avatarsRow}>
                  <Image
                    src="/images/testimonials/1.webp"
                    alt="Artisan 1"
                    className={styles.avatar}
                  />
                  <Image
                    src="/images/testimonials/2.webp"
                    alt="Artisan 2"
                    className={styles.avatar}
                  />
                  <Image
                    src="/images/testimonials/3.webp"
                    alt="Artisan 3"
                    className={styles.avatar}
                  />
                  <Image
                    src="/images/testimonials/4.webp"
                    alt="Artisan 4"
                    className={styles.avatar}
                  />
                </div>
              </div>

              {/* Top-Right Image (Behind) */}
              <div className={styles.imgTopRight}>
                <Image src="/wenba_prod_1.webp" alt="WENBA Products" />
              </div>

              {/* Middle-Left Image */}
              <div className={styles.imgMiddleLeft}>
                <Image src="/wenba_2.webp" alt="Women Entrepreneurs" />
              </div>

              {/* Middle-Right Image (Main) */}
              <div className={styles.imgMain}>
                <Image src="/logo/wenba_logo.jpeg" alt="WENBA Marketplace" />
              </div>

              {/* Bottom-Left Card */}
              <div className={styles.cardProjects}>
                <div className={styles.iconCircle}>
                  <Grid className={styles.gridIcon} />
                </div>
                <div className={styles.projectsInfo}>
                  <h4 className={FONTS.font2}>1,000+</h4>
                  <p>Products Listed</p>
                </div>
              </div>

              {/* Floating WENBA Logo on Left */}
            </div>
          </div>

          {/* Right Column: Tab switcher and details */}
          <div className={styles.right}>
            <div className={styles.badge} data-aos="fade-down">
              <span className={styles.dot} /> Discover WENBA
            </div>

            <h2 className={`${`${styles.title} ${FONTS.font2}`} ${FONTS.font2}`} data-aos="fade-up">
              Empowering Native Business Artisans
            </h2>
            <p
              className={styles.description}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              WENBA is SIAWED&apos;s dedicated marketplace designed to connect
              women entrepreneurs, rural artisans, and self-help groups directly
              with consumers and corporate buyers.
            </p>

            {/* Tabs Row */}
            <div
              className={styles.tabsRow}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <button
                className={`${styles.tabBtn} ${activeTab === "handicrafts" ? styles.active : ""}`}
                onClick={() => setActiveTab("handicrafts")}
              >
                Handicrafts
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === "organic" ? styles.active : ""}`}
                onClick={() => setActiveTab("organic")}
              >
                Organic Foods
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === "jewelry" ? styles.active : ""}`}
                onClick={() => setActiveTab("jewelry")}
              >
                Jewelry
              </button>
            </div>

            {/* Dynamic Content Display */}
            <div
              className={styles.dynamicContent}
              key={activeTab} // triggers re-render animation
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.contentIconContainer}>
                {tabsContent[activeTab].icon}
              </div>
              <div className={styles.contentText}>
                <h3 className={`${styles.contentTitle} ${FONTS.font2}`}>
                  {tabsContent[activeTab].title}
                </h3>
                <p className={styles.contentDescription}>
                  {tabsContent[activeTab].description}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div
              className={styles.buttonWrapper}
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-offset="-1000"
            >
              <CustomButton variant={2}>
                Explore WENBA <ArrowUpRight className={styles.arrow}  />
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Bottom Contact Note */}
        <div
          className={styles.bottomNote}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className={styles.noteAvatarWrapper}>
            <Image
              src="/avtr1.jpg"
              alt="Representative"
              className={styles.noteAvatar}
            />
            <div className={styles.phoneBadge}>
              <TelephoneFill className={styles.phoneIcon} />
            </div>
          </div>
          <p className={styles.noteText}>
            Are you a woman entrepreneur?{" "}
            <a
              href="https://www.wenba.in/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register your products on WENBA today.
            </a>
          </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default FocusedActionsSection;
