import MembershipScreen from "@/components/screens/membership/membership";
import SEO from "@/components/common/seo";

const MembershipPage = () => {
  return (
    <>
      <SEO 
        title="Membership | SIAWED" 
        description="Become a member of SIAWED and enjoy exclusive benefits, networking opportunities, and resources designed to accelerate your growth as an entrepreneur." 
      />
      <MembershipScreen />
    </>
  );
};

export default MembershipPage;
