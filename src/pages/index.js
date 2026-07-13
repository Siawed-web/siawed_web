import HomeScreen from "@/components/screens/home/home";
import SEO from "@/components/common/seo";

const Home = () => {
  return (
    <>
      <SEO 
        title="SIAWED | Women Empowerment & Entrepreneurship NGO" 
        description="SIAWED (est. 2013) is a trusted NGO empowering women through entrepreneurship, skill development, and mentoring. Discover our WENBA platform today." 
      />
      <HomeScreen />
    </>
  );
};

export default Home;
