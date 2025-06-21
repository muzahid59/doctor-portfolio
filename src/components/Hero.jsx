import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Dr. Shayekh Mahmud</h1>
          <h2>Specialized in Cardiology</h2>
          <p>
            With over 15 years of experience in diagnosing and treating 
            cardiovascular conditions, I'm dedicated to providing 
            exceptional patient care and innovative medical solutions.
          </p>
          <div className={styles.cta}>
            <a href="#contact" className="btn">Book Appointment</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
