import React, { useState } from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./register_form.module.scss";

const initialFormState = {
  // SECTION 1
  business_name: "",
  contact_person: "",
  designation: "",
  mobile_number: "",
  whatsapp_number: "",
  email_address: "",
  website: "",
  business_address: "",
  city: "",
  pin_code: "",
  state: "",
  gst_number: "",
  year_established: "",
  business_type: "",
  
  // SECTION 2
  product_category: "",
  company_description: "",
  best_selling_products: "",
  unique_selling_points: "",
  
  // SECTION 3
  retail_price_range: "",
  wholesale_price_range: "",
  minimum_order_quantity: "",
  monthly_production_capacity: "",
  packaging_options: "",
  custom_branding: "",
  
  // SECTION 4
  delivery_timeline: "",
  areas_served: [],
  shipping_partner: "",
  certifications: "",
  
  // SECTION 5
  suitable_for_gifting: "",
  provide_samples: "",
  sample_details: "",
  interested_in: [],
  
  // SECTION 6
  authorized_directories: [],
  additional_comments: "",
  consent_agreed: false
};

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // File states
  const [catalogueFile, setCatalogueFile] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  // Cleanup object URLs to avoid memory leaks
  React.useEffect(() => {
    return () => {
      imagePreviews.forEach(url => URL.revokeObjectURL(url));
    };
  }, [imagePreviews]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      if (name === "consent_agreed") {
        setFormData({ ...formData, [name]: checked });
      } else {
        // Handle array fields (areas_served, interested_in, authorized_directories)
        const arrayField = formData[name] || [];
        if (checked) {
          setFormData({ ...formData, [name]: [...arrayField, value] });
        } else {
          setFormData({ ...formData, [name]: arrayField.filter((item) => item !== value) });
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCatalogueChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      toast.error("Catalogue file size should be less than 10MB");
      e.target.value = null;
      return;
    }
    setCatalogueFile(file);
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 10) {
      toast.error("You can only upload a maximum of 10 images");
      e.target.value = null;
      return;
    }
    
    // Check sizes
    for (let file of files) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error(`Image ${file.name} is larger than 10MB`);
        e.target.value = null;
        return;
      }
    }
    
    // Create object URLs for previews
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
    setProductImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let catalogueUrl = null;
      let imageUrls = [];

      // 1. Upload Catalogue
      if (catalogueFile) {
        const fileExt = catalogueFile.name.split('.').pop();
        const fileName = `cat_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('wenba_uploads')
          .upload(`catalogues/${fileName}`, catalogueFile);
          
        if (uploadError) throw new Error("Error uploading catalogue: " + uploadError.message);
        
        const { data: { publicUrl } } = supabase.storage
          .from('wenba_uploads')
          .getPublicUrl(`catalogues/${fileName}`);
          
        catalogueUrl = publicUrl;
      }

      // 2. Upload Images
      if (productImages && productImages.length > 0) {
        for (let i = 0; i < productImages.length; i++) {
          const file = productImages[i];
          const fileExt = file.name.split('.').pop();
          const fileName = `img_${Date.now()}_${i}_${Math.random().toString(36).substring(7)}.${fileExt}`;
          
          const { error: uploadError } = await supabase.storage
            .from('wenba_uploads')
            .upload(`products/${fileName}`, file);
            
          if (uploadError) throw new Error(`Error uploading image ${file.name}: ` + uploadError.message);
          
          const { data: { publicUrl } } = supabase.storage
            .from('wenba_uploads')
            .getPublicUrl(`products/${fileName}`);
            
          imageUrls.push(publicUrl);
        }
      }

      // 3. Prepare Payload
      const payload = {
        ...formData,
        catalogue_url: catalogueUrl,
        product_image_urls: imageUrls,
        custom_branding: formData.custom_branding === "Yes",
        suitable_for_gifting: formData.suitable_for_gifting === "Yes",
        provide_samples: formData.provide_samples === "Yes"
      };

      // 4. Insert to Database
      const { error } = await supabase
        .from('wenba_vendors')
        .insert([payload]);
        
      if (error) throw error;
      
      toast.success("Registration submitted successfully! We will contact you soon.");
      router.push("/wenba");
      
    } catch (error) {
      console.error(error);
      toast.error(error.message || "An error occurred while submitting your registration.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.registerPage}>
      <Container>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>WENBA Vendor Registration</h1>
            <p>Join the WENBA network and showcase your products to a wider audience.</p>
          </div>

          <Form onSubmit={handleSubmit}>
            {/* SECTION 1 */}
            <div className={styles.formSection}>
              <h3>Section 1: Company Details</h3>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Business / Brand Name *</Form.Label>
                    <Form.Control type="text" name="business_name" value={formData.business_name} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Contact Person Name *</Form.Label>
                    <Form.Control type="text" name="contact_person" value={formData.contact_person} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control type="text" name="designation" value={formData.designation} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile Number *</Form.Label>
                    <Form.Control type="tel" name="mobile_number" value={formData.mobile_number} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>WhatsApp Number *</Form.Label>
                    <Form.Control type="tel" name="whatsapp_number" value={formData.whatsapp_number} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control type="email" name="email_address" value={formData.email_address} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Website (if any)</Form.Label>
                    <Form.Control type="url" name="website" value={formData.website} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Business Address *</Form.Label>
                    <Form.Control type="text" name="business_address" value={formData.business_address} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>City *</Form.Label>
                    <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>State *</Form.Label>
                    <Form.Control type="text" name="state" value={formData.state} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Pin Code *</Form.Label>
                    <Form.Control type="text" name="pin_code" value={formData.pin_code} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>GST Number</Form.Label>
                    <Form.Control type="text" name="gst_number" value={formData.gst_number} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Year of Establishment</Form.Label>
                    <Form.Control type="text" name="year_established" value={formData.year_established} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Type of Business *</Form.Label>
                    <Form.Select name="business_type" value={formData.business_type} onChange={handleChange} required>
                      <option value="">Select...</option>
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Trader">Trader</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Artisan">Artisan</option>
                      <option value="Service Provider">Service Provider</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* SECTION 2 */}
            <div className={styles.formSection}>
              <h3>Section 2: Product Information</h3>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Product Category * (e.g., Home Decor, Food & Beverages, Handicrafts, Apparel)</Form.Label>
                    <Form.Control type="text" name="product_category" value={formData.product_category} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Brief Company/Product Description * (Max 300 words)</Form.Label>
                    <Form.Control as="textarea" rows={4} name="company_description" value={formData.company_description} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Best-Selling Products *</Form.Label>
                    <Form.Control as="textarea" rows={2} name="best_selling_products" value={formData.best_selling_products} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Unique Selling Points (USP) *</Form.Label>
                    <Form.Control as="textarea" rows={2} name="unique_selling_points" value={formData.unique_selling_points} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Upload Product Catalogue (PDF, Max 10MB)</Form.Label>
                    <Form.Control type="file" accept=".pdf" onChange={handleCatalogueChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Upload Product Images (Max 10 Images, Max 10MB each)</Form.Label>
                    <Form.Control type="file" accept="image/*" multiple onChange={handleImagesChange} />
                    <Form.Text className="text-muted d-block mb-2">
                      Please upload clear photos on a plain background. Do not include prices, logos, or watermarks.
                    </Form.Text>
                    {imagePreviews.length > 0 && (
                      <div className="d-flex flex-wrap gap-2 mt-2">
                        {imagePreviews.map((src, index) => (
                          <img 
                            key={index} 
                            src={src} 
                            alt={`Preview ${index + 1}`} 
                            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ddd' }} 
                          />
                        ))}
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* SECTION 3 */}
            <div className={styles.formSection}>
              <h3>Section 3: Pricing & Production</h3>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Retail Price Range (e.g., INR 100 - INR 5000)</Form.Label>
                    <Form.Control type="text" name="retail_price_range" value={formData.retail_price_range} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Wholesale Price Range (e.g., INR 50 - INR 3000)</Form.Label>
                    <Form.Control type="text" name="wholesale_price_range" value={formData.wholesale_price_range} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Minimum Order Quantity (MOQ)</Form.Label>
                    <Form.Control type="text" name="minimum_order_quantity" value={formData.minimum_order_quantity} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Monthly Production Capacity (Specify units)</Form.Label>
                    <Form.Control type="text" name="monthly_production_capacity" value={formData.monthly_production_capacity} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Packaging Options Available (Describe standard/premium options)</Form.Label>
                    <Form.Control type="text" name="packaging_options" value={formData.packaging_options} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Custom Branding / Private Label Available?</Form.Label>
                    <div>
                      <Form.Check inline type="radio" label="Yes" name="custom_branding" value="Yes" onChange={handleChange} checked={formData.custom_branding === "Yes"} />
                      <Form.Check inline type="radio" label="No" name="custom_branding" value="No" onChange={handleChange} checked={formData.custom_branding === "No"} />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* SECTION 4 */}
            <div className={styles.formSection}>
              <h3>Section 4: Delivery & Operations</h3>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Standard Delivery Timeline (e.g., 7-10 working days)</Form.Label>
                    <Form.Control type="text" name="delivery_timeline" value={formData.delivery_timeline} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Shipping Partner (if any)</Form.Label>
                    <Form.Control type="text" name="shipping_partner" value={formData.shipping_partner} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Certifications / Quality Standards (e.g., ISO, Organic, GI Tag)</Form.Label>
                    <Form.Control type="text" name="certifications" value={formData.certifications} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Areas Served</Form.Label>
                    <div className={styles.checkGroup}>
                      {['Local (City)', 'Tamil Nadu', 'South India', 'Pan India', 'International'].map(item => (
                        <Form.Check 
                          key={item}
                          type="checkbox" 
                          label={item} 
                          name="areas_served" 
                          value={item} 
                          onChange={handleChange}
                          checked={formData.areas_served.includes(item)}
                        />
                      ))}
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* SECTION 5 */}
            <div className={styles.formSection}>
              <h3>Section 5: Corporate Gifting & Promotions</h3>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Are your products suitable for Corporate Gifting?</Form.Label>
                    <div>
                      <Form.Check inline type="radio" label="Yes" name="suitable_for_gifting" value="Yes" onChange={handleChange} checked={formData.suitable_for_gifting === "Yes"} />
                      <Form.Check inline type="radio" label="No" name="suitable_for_gifting" value="No" onChange={handleChange} checked={formData.suitable_for_gifting === "No"} />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Can you provide product samples for exhibitions and presentations?</Form.Label>
                    <div>
                      <Form.Check inline type="radio" label="Yes" name="provide_samples" value="Yes" onChange={handleChange} checked={formData.provide_samples === "Yes"} />
                      <Form.Check inline type="radio" label="No" name="provide_samples" value="No" onChange={handleChange} checked={formData.provide_samples === "No"} />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Sample Availability Details (Cost, lead time, quantity constraints)</Form.Label>
                    <Form.Control as="textarea" rows={2} name="sample_details" value={formData.sample_details} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Interested in (Select all that apply):</Form.Label>
                    <div className={styles.checkGroup}>
                      {['Corporate Gifting', 'Bulk Orders', 'Institutional Sales', 'Product Exhibitions', 'Social Media Promotions', 'Buyer-Seller Meetings', 'Export Opportunities'].map(item => (
                        <Form.Check 
                          key={item}
                          type="checkbox" 
                          label={item} 
                          name="interested_in" 
                          value={item} 
                          onChange={handleChange}
                          checked={formData.interested_in.includes(item)}
                        />
                      ))}
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* SECTION 6 */}
            <div className={styles.formSection}>
              <h3>Section 6: Declaration</h3>
              
              <Form.Group className="mb-4">
                <Form.Label>I confirm that the information provided is accurate and authorize WENBA to include my business information in (Select all that apply): *</Form.Label>
                <div className={styles.checkGroup}>
                  {['WENBA Vendor Directory', 'WENBA Product Catalogue', 'Corporate Gift Catalogue', 'Promotional Materials'].map(item => (
                    <Form.Check 
                      key={item}
                      type="checkbox" 
                      label={item} 
                      name="authorized_directories" 
                      value={item} 
                      onChange={handleChange}
                      checked={formData.authorized_directories.includes(item)}
                    />
                  ))}
                </div>
              </Form.Group>
              
              <Form.Group className="mb-4">
                <Form.Label>Additional Comments</Form.Label>
                <Form.Control as="textarea" rows={3} name="additional_comments" value={formData.additional_comments} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Check 
                  type="checkbox" 
                  label="By submitting this form, I agree to WENBA's Terms & Conditions and consent to the use of the information provided for business purposes. *" 
                  name="consent_agreed" 
                  checked={formData.consent_agreed}
                  onChange={handleChange}
                  required 
                />
              </Form.Group>
            </div>

            <div className="text-center mt-5">
              <CustomButton type="submit" variant="orange" size="lg" disabled={isSubmitting}>
                {isSubmitting ? <><Spinner size="sm" className="me-2"/> Submitting...</> : "Submit Registration"}
              </CustomButton>
            </div>

          </Form>
        </div>
      </Container>
    </div>
  );
};

export default RegisterForm;
