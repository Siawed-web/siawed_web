import React from 'react';
import CustomContainer from '@/components/ui/custom_container/custom_container';
import styles from './founder_article.module.scss';
import { Image } from 'react-bootstrap';
import FONTS from '@/styles/fonts';
import Link from 'next/link';

const FounderArticle = () => {
  const images = [
    '/images/article_images/article-1.jpeg',
    '/images/article_images/article-2.jpeg',
    '/images/article_images/article-3.jpeg',
    '/images/article_images/article-4.jpeg',
  ];

  return (
    <section className={styles.articleSection}>
      <CustomContainer>
        <div className={styles.header} data-aos="fade-up">
          <h2 className={`${styles.heading} ${FONTS.font2}`}>
            Featured Article: Our Founder
          </h2>
          <p className={styles.subtext}>
            Read the latest coverage about our founder&apos;s journey and vision.
          </p>
        </div>
        
        <div className={styles.imageGrid} data-aos="fade-up" data-aos-delay="100">
          {images.map((img, index) => (
            <div key={index} className={styles.imageWrap}>
              <Image src={img} alt={`Founder Article ${index + 1}`} className={styles.articleImage} />
            </div>
          ))}
        </div>

        <div className={styles.actionWrap} data-aos="fade-up" data-aos-delay="200">
          <Link href="https://www.vikatan.com/business/chennai-women-success-story-of-business" className={styles.articleBtn}
          target='_blank'
          > 
            Read Full Article
          </Link>
        </div>
      </CustomContainer>
    </section>
  );
};

export default FounderArticle;
