import AboutScreen from "@/components/screens/about/about";
import SEO from "@/components/common/seo";

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us | SIAWED" 
        description="Learn more about SIAWED, our mission to empower women, our history since 2013, and our impact in skill development and entrepreneurship." 
      />
      <AboutScreen />
    </>
  );
};

export default AboutPage;
