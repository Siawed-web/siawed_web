import React from "react";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { FONTS } from "@/styles/fonts";
import { Book, Tree, Heart } from "react-bootstrap-icons";
import styles from "../donate.module.scss";

const DonateCauses = () => {
  return (
    <section className="py-5 bg-light">
      <CustomContainer>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className={`${FONTS.font2} fw-bold`} style={{ color: '#0d2344' }}>Causes We Support</h2>
          <p className="text-muted mt-2" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Your generous contributions allow SIAWED to drive meaningful change across multiple verticals. Here is how your donation makes an impact:
          </p>
        </div>

        <div className="row g-4">
          {/* Cause 1 */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="0">
            <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4" style={{ transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="mb-4 d-inline-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#fff3e0', color: '#ff6b00', margin: '0 auto' }}>
                <Book size={36} />
              </div>
              <h4 className={`${FONTS.font2} fw-bold mb-3`} style={{ color: '#0d2344' }}>Educate a Girl Child</h4>
              <p className="text-muted">
                Empower the next generation by providing access to quality education, learning materials, and scholarships for young girls in underserved communities, paving the way for their brighter, independent future.
              </p>
            </div>
          </div>

          {/* Cause 2 */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4" style={{ transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="mb-4 d-inline-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e8f5e9', color: '#2e7d32', margin: '0 auto' }}>
                <Tree size={36} />
              </div>
              <h4 className={`${FONTS.font2} fw-bold mb-3`} style={{ color: '#0d2344' }}>Go Green Initiatives</h4>
              <p className="text-muted">
                Support sustainable practices and environmental conservation. Your contribution helps fund tree planting campaigns, eco-friendly product training for rural artisans, and broad environmental awareness programs.
              </p>
            </div>
          </div>

          {/* Cause 3 */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4" style={{ transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="mb-4 d-inline-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ffebee', color: '#c62828', margin: '0 auto' }}>
                <Heart size={36} />
              </div>
              <h4 className={`${FONTS.font2} fw-bold mb-3`} style={{ color: '#0d2344' }}>Social Cause</h4>
              <p className="text-muted">
                Contribute to broader societal impact, including healthcare camps, disaster relief efforts, livelihood upliftment programs, and providing essential resources to marginalized communities across the region.
              </p>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default DonateCauses;
