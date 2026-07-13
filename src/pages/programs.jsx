import ProgramsScreen from "@/components/screens/programs/programs";
import SEO from "@/components/common/seo";

const ProgramsPage = () => {
  return (
    <>
      <SEO 
        title="Programs | SIAWED" 
        description="Explore SIAWED's various programs aimed at empowering women, including skill training, mentorship, and business development initiatives." 
      />
      <ProgramsScreen />
    </>
  );
};

export default ProgramsPage;
