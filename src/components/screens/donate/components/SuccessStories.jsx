import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { Quote } from "react-bootstrap-icons";
import styles from "../donate.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const stories = [
  { 
    name: "Lakshmi", location: "Chennai",
    img: "/images/testimonials/1.webp",
    text: "With SIAWED's support, I was able to secure funding and scale my tailoring business from a single machine to a thriving workshop employing 5 other women."
  },
  { 
    name: "Priya", location: "Madurai",
    img: "/images/testimonials/2.webp",
    text: "The skill development training sponsored by generous donors completely transformed my approach to business. My organic food brand is now sold nationwide."
  }
];

const SuccessStories = () => {
  return (
    <section className={styles.storiesSection}>
      <CustomContainer>
        <h2 className="text-center mb-5" data-aos="fade-up">Voices of Impact</h2>
        <Carousel indicators={false} data-aos="zoom-in" variant="dark">
          {stories.map((story, idx) => (
            <Carousel.Item key={idx}>
              <div className={styles.storyCard}>
                <Image src={story.img} alt={story.name} width={150} height={150} className={styles.storyImage} />
                <div className={styles.storyContent}>
                  <Quote size={40} className="text-muted mb-3" opacity={0.3} />
                  <blockquote>&quot;{story.text}&quot;</blockquote>
                  <h5>{story.name}</h5>
                  <p className="text-muted">{story.location}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </CustomContainer>
    </section>
  );
};

export default SuccessStories;
