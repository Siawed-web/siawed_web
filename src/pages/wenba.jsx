import WenbaScreen from "@/components/screens/wenba/wenba";
import SEO from "@/components/common/seo";

const WenbaPage = () => {
  return (
    <>
      <SEO 
        title="WENBA | SIAWED" 
        description="Discover WENBA (Women Entrepreneurs Network and Business Association), SIAWED's premier platform for networking and business opportunities." 
      />
      <WenbaScreen />
    </>
  );
};

export default WenbaPage;
