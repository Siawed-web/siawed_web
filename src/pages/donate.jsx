import SEO from "@/components/common/seo";
import DonateScreen from "@/components/screens/donate/donate";

const DonatePage = () => {
  return (
    <>
      <SEO 
        title="Donate | SIAWED" 
        description="Support SIAWED by making a donation. Your contribution helps empower women entrepreneurs, build skills, and fund initiatives that drive social change." 
      />
      <DonateScreen />
    </>
  );
};

export default DonatePage;
