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
              I'm Dr. Shayekh Mahmud, a board-certified eye specialist (ophthalmologist) with over 15 years of experience in diagnosing and treating a wide range of eye conditions. I completed my medical degree at Dhaka Medical College, followed by a residency in ophthalmology at the National Institute of Ophthalmology, and advanced fellowship training in cornea and refractive surgery.
            </p>
            <p>
              My passion is restoring and preserving vision for patients of all ages. I am dedicated to providing personalized, evidence-based care using the latest advancements in eye health and surgery.
            </p>
            <p>
              I specialize in cataract surgery, LASIK and refractive procedures, corneal diseases, and comprehensive eye care. My research interests include innovative treatments for corneal disorders and advancements in vision correction.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.stat}>
                <h3>7000+</h3>
                <p>Patients Treated</p>
              </div>
              <div className={styles.stat}>
                <h3>30+</h3>
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
