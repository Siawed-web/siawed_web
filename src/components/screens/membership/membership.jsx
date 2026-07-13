import React from "react";
import SectionWrapper from "@/components/ui/section_wrapper/section_wrapper";
import { FONTS } from "@/styles/fonts";
import HomeMembershipSection from "@/components/screens/home/sections/membership/membership";
import PageBanner from "@/components/common/page_banner/page_banner";

const MembershipScreen = () => {
  return (
    <>
      {/* Become a Member Section */}
      <div id="become-member">
        <PageBanner
          title="Become a Member"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Membership" },
          ]}
          bgImage="/images/img-11.JPG"
          
        />
      </div>

      {/* Benefits Section */}
      <SectionWrapper id="benefits" bgColor="white" aos="fade-up">
        <p className="eyebrow eyebrow-blue">Membership Benefits</p>
        <h2 className={`section-heading ${FONTS.font2}`}>
          Why <em className="em-orange">Join Us?</em>
        </h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <div style={{ flex: '1 1 300px', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <h3 className={FONTS.font2}>Networking Opportunities</h3>
            <p>Connect with like-minded women entrepreneurs, mentors, and industry leaders.</p>
          </div>
          <div style={{ flex: '1 1 300px', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <h3 className={FONTS.font2}>Skill Development</h3>
            <p>Access to workshops, training sessions, and resources to enhance your business skills.</p>
          </div>
          <div style={{ flex: '1 1 300px', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <h3 className={FONTS.font2}>Market Access</h3>
            <p>Gain visibility for your products and services through our platforms and events.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Existing Membership Plans Section from Home */}
      <HomeMembershipSection />
    </>
  );
};

export default MembershipScreen;
