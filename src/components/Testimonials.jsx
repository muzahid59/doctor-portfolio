import { useState } from 'react';
import styles from './Testimonials.module.css';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'Dr. Shayekh Mahmud is the most compassionate and skilled eye specialist I have ever met. After years of struggling with vision problems, he accurately diagnosed my condition and provided a treatment plan that restored my sight and confidence.',
      avatar: '/avatar1.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Patient',
      content: 'I was very anxious about my deteriorating vision, but Dr. Shayekh Mahmud explained everything clearly and answered all my questions. His approach was thoughtful and personalized. My eyesight has improved tremendously.',
      avatar: '/avatar2.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Patient',
      content: 'When I was diagnosed with a complex eye condition, I was scared. Dr. Shayekh Mahmud not only provided excellent medical care but also emotional support. He helped me understand my treatment and gave me hope for the future.',
      avatar: '/avatar3.jpg'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      role: 'Colleague, Ophthalmic Surgeon',
      content: 'I have worked with Dr. Shayekh Mahmud on many cases, and his diagnostic and surgical skills in ophthalmology are outstanding. He is thorough, detail-oriented, and always puts his patients first. I highly recommend him for any eye care needs.',
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
