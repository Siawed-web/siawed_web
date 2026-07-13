import React from "react";
import styles from "./donate.module.scss";

import PageBanner from "@/components/common/page_banner/page_banner";
import DonationWizard from "./components/DonationWizard";
import ImpactTimeline from "./components/ImpactTimeline";
import WhyDonate from "./components/WhyDonate";
import DonateCauses from "./components/DonateCauses";
import SuccessStories from "./components/SuccessStories";
import CorporateCSR from "./components/CorporateCSR";
import DonateFAQ from "./components/DonateFAQ";
import FinalCTA from "./components/FinalCTA";

const DonateScreen = () => {
  return (
    <div className={styles.donateWrapper}>
      <PageBanner
        title="Donate"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Donate" },
        ]}
        bgImage="/impact-rally-1.png"
      />
      <div id="donate-section">
        <DonationWizard />
      </div>
      <ImpactTimeline />
      <WhyDonate />
      <DonateCauses />
      <SuccessStories />
      <CorporateCSR />
      <DonateFAQ />
      <FinalCTA />
    </div>
  );
};

export default DonateScreen;
