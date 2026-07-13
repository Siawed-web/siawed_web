import React, { useState } from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./wenba.module.scss";
import FONTS from "@/styles/fonts";
import { 
  Globe, Shop, CalendarEvent, Gift, 
  Megaphone, Cart3, Whatsapp, PeopleFill,
  CheckCircleFill,
  Building, BriefcaseFill, BoxSeam, Award,
  GraphUpArrow, Layers, Search, BarChartFill
} from "react-bootstrap-icons";
import { Image, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { supabase } from "@/lib/supabaseClient";

const WenbaScreen = () => {

  const [formData, setFormData] = useState({
    organization: "",
    contactPerson: "",
    requirement: "",
    quantity: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload = {
        organization: formData.organization,
        contact_person: formData.contactPerson,
        requirement: formData.requirement,
        quantity: formData.quantity,
        status: 'Open'
      };

      const { error } = await supabase
        .from('procurement_requests')
        .insert([payload]);
        
      if (error) throw error;
      
      toast.success("Procurement Request Submitted Successfully! We will contact you soon.");
      
      setFormData({
        organization: "",
        contactPerson: "",
        requirement: "",
        quantity: ""
      });
      
    } catch (error) {
      console.error(error);
      toast.error(error.message || "An error occurred while submitting your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.wenbaPage}>
      <PageBanner
        title="WENBA Marketplace"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "WENBA" },
        ]}
        bgImage="/images/wenba-banner.webp"
      />

      <header className={styles.sectionHeader}>
        <CustomContainer>
          <h1 className={FONTS.font2}>Welcome to <span>WENBA</span></h1>
          <p>
            Connecting dynamic women entrepreneurs, self-help groups, and rural artisans 
            with corporate procurement and impactful market opportunities across India.
          </p>
        </CustomContainer>
      </header>
      
      <div className={styles.sectionDivider}></div>

      <div className={styles.sectionDivider}></div>

      {/* ================= SECTION 1: INTRODUCTION ================= */}
      <CustomContainer>
        <div id="about" className={styles.groupHeading} data-aos="fade-up">
          <h2 className={FONTS.font2}>Welcome to WENBA!</h2>
        </div>
      </CustomContainer>

      <section className={`${styles.section} ${styles.sectionLight}`} style={{ paddingTop: '20px' }}>
        <CustomContainer>
          <div className={styles.aboutGrid}>
             <div className={styles.aboutImageWrap} data-aos="fade-left">
              <img src="/logo/wenba_logo.png" alt="Welcome to WENBA" />
            </div>
            <div className={styles.aboutContent} data-aos="fade-right">
              <h3 className={`${styles.heading} ${FONTS.font2}`}>The Flagship Initiative of SIAWED</h3>
              <p className={styles.description}>
                WENBA (Women Entrepreneurs Network & Business Alliance) is a digital platform to display products of women, ecofriendly and organic producers, native entrepreneurs and indigenous artisans.
              </p>
              <p className={styles.description}>
                Through WENBA, we create business opportunities, market access, professional networking and growth-oriented collaborations.
              </p>
              <p className={styles.description}>
                Whether you are a home-based entrepreneur, startup founder, artisan, manufacturer or MSME owner, WENBA provides a platform to connect, collaborate, and grow.
              </p>
            </div>
           
          </div>
        </CustomContainer>
      </section>

      {/* ================= SECTION 2: WHY JOIN WENBA ================= */}
      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <CustomContainer>
          <div className="text-center" data-aos="fade-up">
            <h3 className={`${styles.heading} ${FONTS.font2} mx-auto text-center`}>Why Join WENBA?</h3>
            <p className={styles.description} style={{ maxWidth: "800px", margin: "0 auto 40px" }}>
              By registering with WENBA, you become part of a growing community committed to supporting women-led enterprises through knowledge sharing, collaboration, and sustainable business growth.
            </p>
          </div>
          
          <div className={styles.checklistGrid} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.checklistItem}>
              <CheckCircleFill className={styles.checkIcon} /> Showcase your products to a wider audience
            </div>
            <div className={styles.checklistItem}>
              <CheckCircleFill className={styles.checkIcon} /> Access business networking & B2B collaborations
            </div>
            <div className={styles.checklistItem}>
              <CheckCircleFill className={styles.checkIcon} /> Receive enquiries for bulk orders & corporate gifting
            </div>
            <div className={styles.checklistItem}>
              <CheckCircleFill className={styles.checkIcon} /> Participate in exhibitions, business meets & webinars
            </div>
            <div className={styles.checklistItem}>
              <CheckCircleFill className={styles.checkIcon} /> Gain visibility through WENBA’s digital platforms
            </div>
            <div className={styles.checklistItem}>
              <CheckCircleFill className={styles.checkIcon} /> Connect with mentors & industry experts
            </div>
            <div className={styles.checklistItem} style={{ gridColumn: "1 / -1" }}>
              <CheckCircleFill className={styles.checkIcon} /> Explore opportunities for business outsourcing, exports, and strategic partnerships
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* ================= SECTION 3: CALL TO ACTION ================= */}
      <section id="register" className={`${styles.section} ${styles.sectionLight}`}>
        <CustomContainer>
          <div className={styles.requestGrid}>
            <div className={styles.requestInfo} data-aos="fade-right">
              <h3 className={`${styles.heading} ${FONTS.font2}`}>Ready to Grow Your Business?</h3>
              <p className={styles.description}>
                Join WENBA today and grow your business with a network that believes in empowering women through entrepreneurship.
              </p>
              <p className={styles.description} style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#e8701a' }}>
                “Complete the registration form and become part of the WENBA Business Network.”
              </p>
              
              <div style={{ marginTop: '30px' }}>
                <CustomButton href="/wenba/register" target="_blank" variant="orange" size="lg" flickering={true}>
                  Register Now
                </CustomButton>
              </div>
            </div>
            
            <div className={styles.requestFormWrap} data-aos="fade-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fcf6f2', padding: '40px', borderRadius: '24px', borderTop: '6px solid #e8701a', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h4 className={FONTS.font2} style={{ color: '#002f5b', marginBottom: '20px' }}>Need more help?</h4>
              <p className={styles.description} style={{ marginBottom: '15px' }}>
                Reach us on WhatsApp for any guidance.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#128C7E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                  <Whatsapp />
                </div>
                <a href="https://wa.me/916381814441" target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', fontWeight: '800', color: '#128C7E', textDecoration: 'none' }}>
                  +91 63818 14441
                </a>
              </div>
              
              <p className={styles.description} style={{ marginBottom: '10px' }}>
                To explore more on WENBA, please reach out to:
              </p>
              <a href="https://www.wenba.in" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', fontWeight: '700', color: '#e8701a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe /> www.wenba.in
              </a>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* ================= SECTION 4: PRODUCT CATEGORIES ================= */}
      <section id="categories" className={`${styles.section} ${styles.sectionSoft}`}>
        <CustomContainer>
          <div className="text-center" data-aos="fade-up">
            <h3 className={`${styles.heading} ${FONTS.font2} mx-auto text-center`}>Product Categories</h3>
            <p className={styles.description} style={{ maxWidth: "800px", margin: "0 auto 40px" }}>
              Explore a wide range of authentic, sustainable, and handcrafted products from our network of women entrepreneurs and artisans.
            </p>
          </div>
          
          <div className={styles.capacityGrid} data-aos="fade-up">
            <div className={styles.capacityCard}>
              <div className={styles.iconWrap}><Shop /></div>
              <h4>Handicrafts</h4>
            </div>
            <div className={styles.capacityCard}>
              <div className={styles.iconWrap}><Gift /></div>
              <h4>Corporate Gifting</h4>
            </div>
            <div className={styles.capacityCard}>
              <div className={styles.iconWrap}><BoxSeam /></div>
              <h4>Organic Food</h4>
            </div>
            <div className={styles.capacityCard}>
              <div className={styles.iconWrap}><BriefcaseFill /></div>
              <h4>Apparel & Textiles</h4>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* ================= FOR VENDORS ================= */}
      {/* Temporarily commented out as per requirement 
      <CustomContainer>
        <div className={styles.groupHeading}>
          <h2 className={FONTS.font2}>For Vendors</h2>
        </div>
      </CustomContainer>
...
      */}

      {/* 4. Raise Procurement Request */}
      <section id="raise-request" className={`${styles.section} ${styles.sectionSoft}`}>
        <CustomContainer>
          <div className={styles.requestGrid}>
            <div className={styles.requestInfo} data-aos="fade-up">
              <h3 className={`${styles.heading} ${FONTS.font2}`}>Raise a Procurement Request</h3>
              <p className={styles.description}>
                Looking for customized products, corporate gifts, employee engagement kits, or bulk supplies? 
                Share your requirements, and our team will connect you with verified enterprises best suited to your needs.
              </p>
              
              <div className={styles.requestCategories}>
                <div className={styles.categoryCard}>
                  <Gift className={styles.icon} />
                  <h5>Corporate Gifts</h5>
                </div>
                <div className={styles.categoryCard}>
                  <BriefcaseFill className={styles.icon} />
                  <h5>Employee Kits</h5>
                </div>
                <div className={styles.categoryCard}>
                  <BoxSeam className={styles.icon} />
                  <h5>Bulk Orders</h5>
                </div>
                <div className={styles.categoryCard}>
                  <Award className={styles.icon} />
                  <h5>Customized Products</h5>
                </div>
              </div>
            </div>
            
            <div className={styles.requestFormWrap} data-aos="fade-up" data-aos-delay="200">
              <form className={styles.requestForm} onSubmit={handleFormSubmit}>
                <div className={styles.formGroup}>
                  <label>Organization Name</label>
                  <input 
                    type="text" 
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Enter your company name" 
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input 
                    type="text" 
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    placeholder="Phone number" 
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Product Requirement</label>
                  <textarea 
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleInputChange}
                    placeholder="Describe the products you are looking for..." 
                    required
                  ></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Approximate Quantity</label>
                  <input 
                    type="text" 
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="e.g., 500 units" 
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-3 fw-bold" style={{backgroundColor: '#e8701a', border: 'none'}} disabled={isSubmitting}>
                  {isSubmitting ? <><Spinner size="sm" className="me-2"/> Submitting...</> : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* 5. CSR Partnerships */}
      {/* Temporarily commented out as per requirement
      <section id="csr" className={`${styles.section} ${styles.sectionLight}`}>
        <CustomContainer>
          <div className={styles.csrGrid}>
            <div className={styles.aboutImageWrap} data-aos="fade-right">
              <Image src="/images/img-6.JPG" alt="CSR Partnerships" />
            </div>
            
            <div className={styles.csrContent} data-aos="fade-left">
              <h3 className={`${styles.heading} ${FONTS.font2}`}>CSR Partnerships</h3>
              <p className={styles.description}>
                Collaborate with SIAWED to design and implement high-impact CSR initiatives. 
                Together, we can create lasting social transformation.
              </p>
              
              <div className={styles.impactCards}>
                <div className={styles.impactCard}>
                  <h4><GraphUpArrow className={styles.icon} /> Women Entrepreneurship</h4>
                </div>
                <div className={styles.impactCard}>
                  <h4><Layers className={styles.icon} /> Skill Development</h4>
                </div>
                <div className={styles.impactCard}>
                  <h4><BriefcaseFill className={styles.icon} /> Livelihood Generation</h4>
                </div>
                <div className={styles.impactCard}>
                  <h4><Building className={styles.icon} /> Sustainable Communities</h4>
                </div>
              </div>
              
              <CustomButton href="/contact" variant="blue" size="lg">Partner with SIAWED</CustomButton>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* 6. WENBA Dashboard */}
      <section id="dashboard" className={`${styles.section} ${styles.dashboardSection}`}>
        <CustomContainer>
          <div className="text-center" data-aos="fade-up">
            <h3 className={`${styles.heading} ${FONTS.font2} mx-auto text-center`}>WENBA Dashboard</h3>
            <p className={styles.description} style={{ maxWidth: "800px", margin: "0 auto" }}>
              A dedicated digital platform providing seamless access to vendors, product catalogues, 
              procurement requests, order tracking, and impact metrics—enabling corporates to make 
              responsible and inclusive sourcing decisions with ease.
            </p>
          </div>
          
          <div className={styles.dashboardShowcase} data-aos="zoom-in" data-aos-delay="200">
            <div className={styles.dashboardImageWrap}>
              <img src="/images/wenba_dashboard.png" alt="WENBA Dashboard Mockup" />
            </div>
            
            {/* Floating Features */}
            <div className={`${styles.floatingCard} ${styles.float1}`}>
              <div className={styles.icon}><Search /></div>
              Vendor Directory
            </div>
            <div className={`${styles.floatingCard} ${styles.float2}`}>
              <div className={styles.icon}><Shop /></div>
              Product Catalogue
            </div>
            <div className={`${styles.floatingCard} ${styles.float3}`}>
              <div className={styles.icon}><BoxSeam /></div>
              Order Tracking
            </div>
            <div className={`${styles.floatingCard} ${styles.float4}`}>
              <div className={styles.icon}><BarChartFill /></div>
              Impact Metrics
            </div>
          </div>
          
          <div className="text-center mt-5">
            <CustomButton href="#register" variant="teal" size="lg">Access Dashboard</CustomButton>
          </div>
        </CustomContainer>
      </section>

      {/* 7. Final CTA Section */}
      <section className={styles.finalCta}>
        <CustomContainer>
          <div className={styles.ctaContent} data-aos="fade-up">
            <h2 className={FONTS.font2}>Join India&apos;s Inclusive Procurement Movement</h2>
            <p>
              Whether you are a vendor looking to expand your reach, or a corporate seeking sustainable 
              sourcing partners, WENBA provides the platform and support to achieve measurable social impact.
            </p>
            <div className={styles.btnGroup}>
              <CustomButton href="#raise-request" variant="orange" size="lg">Raise Procurement Request</CustomButton>
              <CustomButton href="/contact" variant="outline" size="lg" style={{ borderColor: 'white', color: 'white' }}>Contact Us</CustomButton>
            </div>
          </div>
        </CustomContainer>
      </section>
      

    </div>
  );
};

export default WenbaScreen;
