import React from "react";
import { Accordion } from "react-bootstrap";
import styles from "../donate.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const faqs = [
  { q: "Is my donation secure?", a: "Yes, we use industry-standard encryption and partner with trusted payment gateways to ensure your transaction is 100% secure." },
  { q: "Will I receive a receipt?", a: "Absolutely. A detailed receipt will be sent to your registered email address immediately after successful payment processing." },
  { q: "Are donations tax exempt?", a: "Yes, all donations made to SIAWED are eligible for tax exemption under section 80G of the Income Tax Act." },
  { q: "How is my contribution used?", a: "Your contribution directly funds skill development programs, micro-loans for women entrepreneurs, and resources for self-help groups. We maintain high transparency and share annual impact reports." },
];

const DonateFAQ = () => {
  return (
    <section className={styles.faqSection}>
      <CustomContainer>
        <h2 className="text-center mb-5" data-aos="fade-up">Frequently Asked Questions</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up" data-aos-delay="100">
          <Accordion>
            {faqs.map((faq, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={idx}>
                <Accordion.Header>{faq.q}</Accordion.Header>
                <Accordion.Body>{faq.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </CustomContainer>
    </section>
  );
};

export default DonateFAQ;
