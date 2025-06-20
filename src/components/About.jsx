import styles from './About.module.css';

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.image}></div>
          </div>
          <div className={styles.text}>
            <p>
              I'm Dr. Jane Smith, a board-certified cardiologist with over 15 years of experience in the field. I completed my medical degree at Harvard Medical School, followed by a residency at Massachusetts General Hospital and a fellowship in cardiology at the Cleveland Clinic.
            </p>
            <p>
              Throughout my career, I've been passionate about providing personalized care to patients with heart conditions. My approach combines evidence-based medicine with a strong focus on prevention and lifestyle modifications.
            </p>
            <p>
              I specialize in non-invasive cardiology, cardiac imaging, and heart disease prevention. My research interests include women's heart health and the impact of lifestyle on cardiovascular outcomes.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.stat}>
                <h3>5000+</h3>
                <p>Patients Treated</p>
              </div>
              <div className={styles.stat}>
                <h3>25+</h3>
                <p>Research Papers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
