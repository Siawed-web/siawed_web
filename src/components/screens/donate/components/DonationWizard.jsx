import React, { useState } from "react";
import { Form, FloatingLabel, Modal, Spinner } from "react-bootstrap";
import { HeartFill, PersonBoundingBox, BookHalf, StarFill, CreditCard, Bank2, Wallet2, QrCodeScan } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import styles from "../donate.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";

const predefinedImpacts = [
  { value: 500, label: "Feeds one family", icon: <HeartFill /> },
  { value: 1000, label: "Supports skill development", icon: <PersonBoundingBox /> },
  { value: 2500, label: "Provides educational resources", icon: <BookHalf />, recommended: true },
  { value: 5000, label: "Empowers a woman entrepreneur", icon: <StarFill /> },
];

const paymentMethods = [
  { id: 'upi', label: 'UPI', icon: <QrCodeScan /> },
  { id: 'card', label: 'Card', icon: <CreditCard /> },
  { id: 'netbanking', label: 'Net Banking', icon: <Bank2 /> },
  { id: 'wallet', label: 'Wallet', icon: <Wallet2 /> },
];

const DonationWizard = () => {
  const router = useRouter();
  const [frequency, setFrequency] = useState("one-time");
  const [amount, setAmount] = useState(2500);
  const [isCustom, setIsCustom] = useState(false);
  const [customVal, setCustomVal] = useState("");
  const [payMethod, setPayMethod] = useState("upi");
  const [donationCause, setDonationCause] = useState("Social cause");
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', pan: '', anonymous: false });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [submittedDonationId, setSubmittedDonationId] = useState(null);

  const handleImpactSelect = (val) => {
    setAmount(val);
    setIsCustom(false);
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomVal(val);
    setAmount(val ? parseInt(val) : 0);
    setIsCustom(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload = {
        frequency,
        amount,
        pay_method: 'QR Code', // Defaulted since the UI selection was removed
        donation_cause: donationCause,
        donor_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        pan: formData.pan,
        is_anonymous: formData.anonymous,
        status: 'Pending'
      };

      const { data, error } = await supabase
        .from('donations')
        .insert([payload])
        .select();

      if (error) throw error;

      setSubmittedDonationId(data[0].id);
      setShowQrModal(true);

    } catch (error) {
      console.error(error);
      toast.error(error.message || "An error occurred while processing your donation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentCompleted = async () => {
    try {
      if (submittedDonationId) {
        await supabase
          .from('donations')
          .update({ status: 'Paid' })
          .eq('id', submittedDonationId);
      }
      
      setShowQrModal(false);
      toast.success("Thank you for your generous donation! We will contact you soon.");
      router.push("/");
    } catch (error) {
      console.error("Error updating payment status", error);
      setShowQrModal(false);
      toast.success("Thank you for your generous donation! We will contact you soon.");
      router.push("/");
    }
  };

  return (
    <section className={styles.wizardSection}>
      <CustomContainer>
        <div className={styles.wizardContainer} data-aos="fade-up">
          <h2 className={styles.wizardTitle}>Choose Your Impact</h2>
          
          <div className={styles.frequencyToggle}>
            <button className={frequency === 'one-time' ? styles.active : ''} onClick={() => setFrequency('one-time')}>One-Time</button>
            <button className={frequency === 'monthly' ? styles.active : ''} onClick={() => setFrequency('monthly')}>Monthly Supporter ❤️</button>
            <button className={frequency === 'annual' ? styles.active : ''} onClick={() => setFrequency('annual')}>Annual</button>
          </div>

          <div className={styles.impactCards}>
            {predefinedImpacts.map(item => (
              <div 
                key={item.value} 
                className={`${styles.impactCard} ${!isCustom && amount === item.value ? styles.active : ''}`}
                onClick={() => handleImpactSelect(item.value)}
              >
                {item.recommended && <div className={styles.badgeRecommended}>Recommended</div>}
                <div className={styles.cardIcon}>{item.icon}</div>
                <div className={styles.cardAmount}>&#8377;{item.value}</div>
                <div className={styles.cardDesc}>{item.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.customDonation}>
            <h5 className="text-center mb-3">Or enter a custom amount</h5>
            <div className={styles.customInputWrapper}>
              <span className={styles.currencyPrefix}>&#8377;</span>
              <input 
                type="text" 
                className={styles.customInput} 
                placeholder="Other Amount" 
                value={isCustom ? customVal : ''}
                onChange={handleCustomChange}
                onClick={() => setIsCustom(true)}
              />
            </div>
            <div className={styles.liveImpactMessage}>
              {amount > 0 && isCustom && `Your donation of ₹${amount} can support ${Math.max(1, Math.floor(amount / 500))} initiatives.`}
            </div>
          </div>

          <form className={styles.formSection} onSubmit={handleSubmit}>
            <div className="text-center mb-4" style={{ color: '#0D7A6E', fontWeight: 'bold' }}>
              All donations to SIAWED are eligible for 80 G & 12 A Income Tax Exemptions.
            </div>
            
            <h4 className="mb-4">Donor Information</h4>
            <div className="row g-3 mb-4">
              <div className="col-12 mb-2">
                <FloatingLabel label="I would like to support...">
                  <Form.Select value={donationCause} onChange={(e) => setDonationCause(e.target.value)}>
                    <option value="Social cause">Social cause</option>
                    <option value="Educate a girl child">Educate a girl child</option>
                    <option value="Go green initiatives">Go green initiatives</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
              <div className="col-md-6">
                <FloatingLabel label="Full Name">
                  <Form.Control type="text" placeholder="Full Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} disabled={formData.anonymous} />
                </FloatingLabel>
              </div>
              <div className="col-md-6">
                <FloatingLabel label="Email Address">
                  <Form.Control type="email" placeholder="name@example.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </FloatingLabel>
              </div>
              <div className="col-md-6">
                <FloatingLabel label="Phone Number">
                  <Form.Control type="tel" placeholder="Phone" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </FloatingLabel>
              </div>
              <div className="col-md-6">
                <FloatingLabel label="PAN (Optional for Tax Receipt)">
                  <Form.Control type="text" placeholder="PAN Number" value={formData.pan} onChange={e => setFormData({...formData, pan: e.target.value})} />
                </FloatingLabel>
              </div>
            </div>
            
            <Form.Check 
              type="switch"
              id="anonymous-switch"
              label="Donate Anonymously"
              className="mb-4"
              checked={formData.anonymous}
              onChange={e => setFormData({...formData, anonymous: e.target.checked, name: e.target.checked ? 'Anonymous' : ''})}
            />

            <div className="text-center mt-4">
              <CustomButton type="submit" variant="orange" size="lg" fullWidth={false} disabled={isSubmitting}>
                {isSubmitting ? <><Spinner size="sm" className="me-2"/> Processing...</> : `Complete Donation of ₹${amount || 0}`}
              </CustomButton>
            </div>
          </form>

        </div>
      </CustomContainer>

      {/* QR Code Payment Modal */}
      <Modal show={showQrModal} onHide={() => {}} backdrop="static" keyboard={false} centered>
        <Modal.Header>
          <Modal.Title>Complete Your Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p className="mb-4">Please scan the QR code below to complete your generous donation of <strong>₹{amount}</strong>.</p>
          
          <div style={{ maxWidth: '300px', margin: '0 auto', border: '1px solid #e5e7eb', padding: '10px', borderRadius: '12px' }}>
            <img src="/payment-qr.jpeg" alt="Donation QR Code" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
          
          <p className="text-muted mt-4" style={{ fontSize: '0.9rem' }}>
            Once you have completed the payment via your preferred app, please click the button below to confirm.
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <CustomButton variant="blue" onClick={handlePaymentCompleted}>
            Payment Completed
          </CustomButton>
        </Modal.Footer>
      </Modal>

    </section>
  );
};

export default DonationWizard;
