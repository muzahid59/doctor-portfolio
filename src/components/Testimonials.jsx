import { useState } from 'react';
import styles from './Testimonials.module.css';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'Dr. Smith is by far the most caring and knowledgeable cardiologist I have ever met. After struggling with heart issues for years, she correctly diagnosed my condition and developed a treatment plan that has significantly improved my quality of life.',
      avatar: '/avatar1.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Patient',
      content: 'I was extremely anxious about my heart condition, but Dr. Smith took the time to explain everything in detail and answer all my questions. Her approach to treatment was thoughtful and personalized. I feel so much better now.',
      avatar: '/avatar2.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Patient',
      content: 'When I was diagnosed with a heart condition, I was terrified. Dr. Smith not only provided exceptional medical care but also emotional support. She helped me understand my condition and gave me the tools to manage it effectively.',
      avatar: '/avatar3.jpg'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      role: 'Colleague, Cardiac Surgeon',
      content: 'I have collaborated with Dr. Smith on numerous patient cases, and her diagnostic skills are exceptional. She is thorough, detail-oriented, and always puts her patients first. I highly recommend her to anyone seeking cardiovascular care.',
      avatar: '/avatar4.jpg'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <h2 className="section-title">Patient Testimonials</h2>
        
        <div className={styles.carousel}>
          <div className={styles.testimonialWrapper}>
            <div className={styles.testimonial}>
              <div className={styles.content}>
                <p>"{testimonials[activeIndex].content}"</p>
              </div>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <div className={styles.avatarImage}></div>
                </div>
                <div className={styles.info}>
                  <h4>{testimonials[activeIndex].name}</h4>
                  <p>{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <button onClick={prevTestimonial} className={styles.arrow}>
              &larr;
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                  onClick={() => goToTestimonial(index)}
                ></button>
              ))}
            </div>
            <button onClick={nextTestimonial} className={styles.arrow}>
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
