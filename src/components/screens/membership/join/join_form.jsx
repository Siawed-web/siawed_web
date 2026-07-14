import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Spinner, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./join_form.module.scss";

const initialFormState = {
  full_name: "",
  dob: "",
  mobile_number: "",
  whatsapp_number: "",
  email: "",
  city: "",
  district: "",
  state: "",
  linkedin_profile: "",
  instagram_page: "",
  membership_type: "", // This is set dynamically by the query param
  highest_education: "",
  field_of_study: "",
  current_occupation: "",
  business_name: "",
  year_business_started: "",
  type_of_business: "",
  business_stage: "",
  number_of_employees: "",
  monthly_revenue: "",
  business_role: "",
  support_needs: [],
  key_skills: [],
  reason_to_join: "",
  business_goals: "",
  mentor_years_exp: "",
  mentor_commitment: "",
  mentor_commitment_other: "",
  community_participation: [],
  community_participation_other: "",
  referral_source: "",
  referral_source_other: "",
  declaration_guidelines: false,
  declaration_values: false,
  declaration_communications: false,
  consent_name: "",
  consent_place: "",
  consent_date: "",
};

const JoinForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Payment Modal States
  const [showQrModal, setShowQrModal] = useState(false);
  const [submittedAppId, setSubmittedAppId] = useState(null);

  useEffect(() => {
    if (router.isReady && router.query.type) {
      const type = router.query.type.toLowerCase();
      const planMap = {
        student: "Student Membership – ₹1000 / year",
        homepreneur: "Homepreneur Membership – ₹3000 / year",
        sme: "SME Membership – ₹5000 / year",
        diamond: "Diamond Mentor Membership – ₹10,000 / year",
      };

      const mappedType = planMap[type];
      if (mappedType) {
        setFormData((prev) => ({ ...prev, membership_type: mappedType }));
      }
    }
  }, [router.isReady, router.query.type]);

  const isBusinessProfileVisible = [
    "Homepreneur Membership",
    "SME Membership",
    "Diamond Mentor Membership",
  ].some((type) => formData.membership_type.includes(type));

  const isDiamondMentorVisible =
    formData.membership_type.includes("Diamond Mentor");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name.startsWith("declaration_") || name === "consent_agreed") {
        setFormData({ ...formData, [name]: checked });
      } else {
        // Handle array fields (support_needs, key_skills, mentor_areas, community_participation)
        const arrayField = formData[name] || [];
        if (checked) {
          setFormData({ ...formData, [name]: [...arrayField, value] });
        } else {
          setFormData({
            ...formData,
            [name]: arrayField.filter((item) => item !== value),
          });
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        payment_status: "Pending", // Will update when they click completed
      };

      const { data, error } = await supabase
        .from("membership_applications")
        .insert([payload])
        .select();

      if (error) throw error;

      // Save ID and show QR Modal instead of finishing
      setSubmittedAppId(data[0].id);
      setShowQrModal(true);
    } catch (error) {
      console.error(error);
      toast.error(
        error.message || "An error occurred while submitting your application.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendMail = async () => {
    try {
      await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.full_name,
          email: formData.email,
          type: "membership",
        }),
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handlePaymentCompleted = async () => {
    try {
      // Mark as paid in the database
      if (submittedAppId) {
        await supabase
          .from("membership_applications")
          .update({ payment_status: "Paid" })
          .eq("id", submittedAppId);
      }

      sendMail();

      setShowQrModal(false);
      toast.success("Thanks, we will contact you soon!");
      router.push("/");
    } catch (error) {
      console.error("Error updating payment status", error);
      // Even if update fails, we want to give them the success flow since they paid
      setShowQrModal(false);
      toast.success("Thanks, we will contact you soon!");
      router.push("/");
    }
  };

  return (
    <div className={styles.joinPage}>
      <Container>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>Membership Registration Form</h1>
            <p>
              Join the SIAWED community and accelerate your entrepreneurial
              journey.
            </p>

            {formData.membership_type && (
              <div
                className={styles.planBanner}
                style={{
                  background: "#eef2ff",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid #c7d2fe",
                  marginTop: "20px",
                }}
              >
                <h3 style={{ color: "#3730a3", margin: 0, fontSize: "1.2rem" }}>
                  Selected Plan: {formData.membership_type.split("–")[0].trim()}
                </h3>
                <div
                  style={{
                    color: "#4f46e5",
                    fontWeight: "bold",
                    marginTop: "5px",
                  }}
                >
                  Fee: {formData.membership_type.split("–")[1].trim()}
                </div>
              </div>
            )}
          </div>

          <Form onSubmit={handleSubmit}>
            {/* SECTION 1 */}
            <div className={styles.formSection}>
              <h3>Section 1: Basic Personal Information</h3>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Date of Birth *</Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile Number *</Form.Label>
                    <Form.Control
                      type="tel"
                      name="mobile_number"
                      value={formData.mobile_number}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>WhatsApp Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="whatsapp_number"
                      value={formData.whatsapp_number}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>City / Town *</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>District *</Form.Label>
                    <Form.Control
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>State *</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>LinkedIn Profile</Form.Label>
                    <Form.Control
                      type="url"
                      name="linkedin_profile"
                      value={formData.linkedin_profile}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Instagram / Business Page</Form.Label>
                    <Form.Control
                      type="url"
                      name="instagram_page"
                      value={formData.instagram_page}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* SECTION 3 */}
            <div className={styles.formSection}>
              <h3>Section 3: Educational / Professional Background</h3>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Highest Educational Qualification *</Form.Label>
                    <Form.Control
                      type="text"
                      name="highest_education"
                      value={formData.highest_education}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Field of Study</Form.Label>
                    <Form.Control
                      type="text"
                      name="field_of_study"
                      value={formData.field_of_study}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Current Occupation *</Form.Label>
                    <Form.Select
                      name="current_occupation"
                      value={formData.current_occupation}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="Student">Student</option>
                      <option value="Homemaker">Homemaker</option>
                      <option value="Entrepreneur">Entrepreneur</option>
                      <option value="Working Professional">
                        Working Professional
                      </option>
                      <option value="Other">Other</option>
                    </Form.Select>
                    {formData.current_occupation === "Other" && (
                      <Form.Control
                        type="text"
                        name="current_occupation_other"
                        placeholder="Please specify"
                        className="mt-2"
                        value={formData.current_occupation_other || ""}
                        onChange={handleChange}
                      />
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* SECTION 4 (Conditional) */}
            {isBusinessProfileVisible && (
              <div className={styles.formSection}>
                <h3>Section 4: Business / Entrepreneur Profile</h3>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Business Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="business_name"
                        value={formData.business_name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Year Business Started</Form.Label>
                      <Form.Control
                        type="text"
                        name="year_business_started"
                        value={formData.year_business_started}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Type of Business</Form.Label>
                      <Form.Control
                        type="text"
                        name="type_of_business"
                        value={formData.type_of_business}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Business Stage</Form.Label>
                      <Form.Select
                        name="business_stage"
                        value={formData.business_stage}
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="Idea stage">Idea stage</option>
                        <option value="Early stage (less than 2 years)">
                          Early stage (less than 2 years)
                        </option>
                        <option value="Growth stage">Growth stage</option>
                        <option value="Established">Established</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Number of Employees</Form.Label>
                      <Form.Control
                        type="text"
                        name="number_of_employees"
                        value={formData.number_of_employees}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Monthly Revenue Range</Form.Label>
                      <Form.Select
                        name="monthly_revenue"
                        value={formData.monthly_revenue}
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="Less than ₹50,000">
                          Less than ₹50,000
                        </option>
                        <option value="₹50,000 – ₹2 Lakhs">
                          ₹50,000 – ₹2 Lakhs
                        </option>
                        <option value="₹2 – ₹10 Lakhs">₹2 – ₹10 Lakhs</option>
                        <option value="Above ₹10 Lakhs">Above ₹10 Lakhs</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Role in the Business</Form.Label>
                      <Form.Select
                        name="business_role"
                        value={formData.business_role}
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="Founder">Founder</option>
                        <option value="Co-Founder">Co-Founder</option>
                        <option value="Managing Director">
                          Managing Director
                        </option>
                        <option value="CEO">CEO</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                      {formData.business_role === "Other" && (
                        <Form.Control
                          type="text"
                          name="business_role_other"
                          placeholder="Please specify"
                          className="mt-2"
                          value={formData.business_role_other || ""}
                          onChange={handleChange}
                        />
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            )}

            {/* SECTION 5 */}
            <div className={styles.formSection}>
              <h3>Section 5: Mentorship & Support Needs</h3>
              <Form.Group className="mb-3">
                <Form.Label>
                  What kind of support are you looking for?
                </Form.Label>
                <div className={styles.checkGroup}>
                  {[
                    "Business mentoring",
                    "Marketing support",
                    "Digital marketing",
                    "Branding",
                    "Financial planning",
                    "Networking opportunities",
                    "Market access",
                    "Investor connections",
                    "Other",
                  ].map((item) => (
                    <div key={item}>
                      <Form.Check
                        type="checkbox"
                        label={item}
                        name="support_needs"
                        value={item}
                        onChange={handleChange}
                        checked={formData.support_needs.includes(item)}
                      />
                      {item === "Other" &&
                        formData.support_needs.includes("Other") && (
                          <Form.Control
                            type="text"
                            name="support_needs_other"
                            placeholder="Please specify"
                            className="mt-2 ms-4 w-auto"
                            value={formData.support_needs_other || ""}
                            onChange={handleChange}
                          />
                        )}
                    </div>
                  ))}
                </div>
              </Form.Group>
            </div>

            {/* SECTION 6 */}
            <div className={styles.formSection}>
              <h3>Section 6: Skills & Expertise</h3>
              <Form.Group className="mb-3">
                <Form.Label>Your Key Skills *</Form.Label>
                <div className={styles.checkGroup}>
                  {[
                    "Sales",
                    "Marketing",
                    "Product development",
                    "Finance",
                    "Digital marketing",
                    "Other",
                  ].map((item) => (
                    <div key={item}>
                      <Form.Check
                        type="checkbox"
                        label={item}
                        name="key_skills"
                        value={item}
                        onChange={handleChange}
                        checked={formData.key_skills.includes(item)}
                      />
                      {item === "Other" &&
                        formData.key_skills.includes("Other") && (
                          <Form.Control
                            type="text"
                            name="key_skills_other"
                            placeholder="Please specify"
                            className="mt-2 ms-4 w-auto"
                            value={formData.key_skills_other || ""}
                            onChange={handleChange}
                          />
                        )}
                    </div>
                  ))}
                </div>
              </Form.Group>
            </div>

            {/* SECTION 7 */}
            <div className={styles.formSection}>
              <h3>Section 7: Expectations From SIAWED</h3>
              <Form.Group className="mb-3">
                <Form.Label>Why do you want to join SIAWED?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="reason_to_join"
                  value={formData.reason_to_join}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  What are your business goals for the next 2 years?
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="business_goals"
                  value={formData.business_goals}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>

            {/* SECTION 8: Mentor Specifics */}
            {isDiamondMentorVisible && (
              <div className={styles.formSection}>
                <h3>Section 8: Diamond Mentor Profile & Commitment</h3>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-4">
                      <Form.Label>
                        Years of Entrepreneurial Experience
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="mentor_years_exp"
                        value={formData.mentor_years_exp}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>
                    “I confirm that I am willing to mentor a group of
                    entrepreneurs and students under the SIAWED mentorship
                    program.”
                  </Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Yes"
                      name="mentor_commitment"
                      value="Yes"
                      onChange={handleChange}
                      checked={formData.mentor_commitment === "Yes"}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="No"
                      name="mentor_commitment"
                      value="No"
                      onChange={handleChange}
                      checked={formData.mentor_commitment === "No"}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Other"
                      name="mentor_commitment"
                      value="Other"
                      onChange={handleChange}
                      checked={formData.mentor_commitment === "Other"}
                    />
                  </div>
                  {formData.mentor_commitment === "Other" && (
                    <Form.Control
                      type="text"
                      name="mentor_commitment_other"
                      placeholder="Please specify"
                      className="mt-2"
                      value={formData.mentor_commitment_other || ""}
                      onChange={handleChange}
                    />
                  )}
                </Form.Group>
              </div>
            )}

            {/* SECTION 10 */}
            <div className={styles.formSection}>
              <h3>Section 10: Community Participation</h3>
              <Form.Group className="mb-3">
                <Form.Label>Would you like to: *</Form.Label>
                <div className={styles.checkGroup}>
                  {[
                    "Volunteer for SIAWED programs",
                    "Speak at events",
                    "Mentor aspiring entrepreneurs",
                    "Support networking initiatives",
                    "Other",
                  ].map((item) => (
                    <div key={item}>
                      <Form.Check
                        type="checkbox"
                        label={item}
                        name="community_participation"
                        value={item}
                        onChange={handleChange}
                        checked={formData.community_participation.includes(
                          item,
                        )}
                      />
                      {item === "Other" &&
                        formData.community_participation.includes("Other") && (
                          <Form.Control
                            type="text"
                            name="community_participation_other"
                            placeholder="Please specify"
                            className="mt-2 ms-4 w-auto"
                            value={formData.community_participation_other || ""}
                            onChange={handleChange}
                          />
                        )}
                    </div>
                  ))}
                </div>
              </Form.Group>
            </div>

            {/* SECTION 11 */}
            <div className={styles.formSection}>
              <h3>Section 11: Referral Source</h3>
              <Form.Group className="mb-3">
                <Form.Label>How did you hear about SIAWED? *</Form.Label>
                <Form.Select
                  name="referral_source"
                  value={formData.referral_source}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="Social media">Social media</option>
                  <option value="Friend / referral">Friend / referral</option>
                  <option value="Event / workshop">Event / workshop</option>
                  <option value="College program">College program</option>
                  <option value="Website">Website</option>
                  <option value="Other">Other</option>
                </Form.Select>
                {formData.referral_source === "Other" && (
                  <Form.Control
                    type="text"
                    name="referral_source_other"
                    placeholder="Please specify"
                    className="mt-2"
                    value={formData.referral_source_other || ""}
                    onChange={handleChange}
                  />
                )}
              </Form.Group>
            </div>

            {/* SECTION 12: Declaration */}
            <div className={styles.formSection}>
              <h3>Section 12: Declaration</h3>
              <p>By applying for membership, I confirm that:</p>

              <Form.Group className="mb-2">
                <Form.Check
                  type="checkbox"
                  label="I have read and understood the Membership Guidelines. *"
                  name="declaration_guidelines"
                  checked={formData.declaration_guidelines}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Check
                  type="checkbox"
                  label="I agree to abide by the values, objectives and policies of SIAWED. *"
                  name="declaration_values"
                  checked={formData.declaration_values}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Check
                  type="checkbox"
                  label="I consent to receive official communications from SIAWED regarding programmes, events and membership activities. *"
                  name="declaration_communications"
                  checked={formData.declaration_communications}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div
                className="mb-4 p-3"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderLeft: "4px solid #f97316",
                  fontStyle: "italic",
                  color: "#4b5563",
                }}
              >
                “At SIAWED, we believe that when women support women,
                communities prosper. Every member is encouraged to learn, lead,
                mentor and inspire, contributing towards a stronger and more
                inclusive entrepreneurial ecosystem.”
              </div>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="consent_name"
                      value={formData.consent_name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Place *</Form.Label>
                    <Form.Control
                      type="text"
                      name="consent_place"
                      value={formData.consent_place}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Date *</Form.Label>
                    <Form.Control
                      type="date"
                      name="consent_date"
                      value={formData.consent_date}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <div className="text-center mt-5">
              <CustomButton
                type="submit"
                variant="orange"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Spinner size="sm" className="me-2" /> Saving...
                  </>
                ) : (
                  "Proceed to Payment"
                )}
              </CustomButton>
            </div>
          </Form>
        </div>
      </Container>

      {/* QR Code Payment Modal */}
      <Modal
        show={showQrModal}
        onHide={() => {}}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Complete Your Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p className="mb-4">
            Please scan the QR code below to pay your membership fee of{" "}
            <strong>{formData.membership_type.split("–")[1]?.trim()}</strong>.
          </p>

          <div
            style={{
              maxWidth: "300px",
              margin: "0 auto",
              border: "1px solid #e5e7eb",
              padding: "10px",
              borderRadius: "12px",
            }}
          >
            <img
              src="/payment-qr.jpeg"
              alt="Payment QR Code"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </div>

          <p className="text-muted mt-4" style={{ fontSize: "0.9rem" }}>
            Once you have completed the payment on your app, please click the
            button below to finish your application.
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <CustomButton variant="blue" onClick={handlePaymentCompleted}>
            Payment Completed
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JoinForm;
