import ContactScreen from "@/components/screens/contact/contact";
import SEO from "@/components/common/seo";

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact Us | SIAWED" 
        description="Get in touch with SIAWED for inquiries, partnerships, or to join our community supporting women entrepreneurs and skill development." 
      />
      <ContactScreen />
    </>
  );
};

export default ContactPage;
