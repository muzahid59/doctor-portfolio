import styles from './Education.module.css';

export const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Fellowship in Cardiology',
      institution: 'Cleveland Clinic',
      period: '2010 - 2013',
      description: 'Specialized training in non-invasive cardiology and cardiac imaging techniques.'
    },
    {
      id: 2,
      degree: 'Residency in Internal Medicine',
      institution: 'Massachusetts General Hospital',
      period: '2007 - 2010',
      description: 'Comprehensive training in diagnosing and treating a wide range of adult conditions.'
    },
    {
      id: 3,
      degree: 'Doctor of Medicine (MD)',
      institution: 'Harvard Medical School',
      period: '2003 - 2007',
      description: 'Graduated with honors, with a focus on cardiovascular medicine.'
    },
    {
      id: 4,
      degree: 'Bachelor of Science in Biology',
      institution: 'Stanford University',
      period: '1999 - 2003',
      description: 'Graduated summa cum laude with a focus on human physiology.'
    }
  ];

  const certifications = [
    'Board Certification in Cardiovascular Disease',
    'Board Certification in Internal Medicine',
    'Advanced Cardiac Life Support (ACLS)',
    'Certification in Cardiac CT Angiography',
    'Certification in Adult Echocardiography'
  ];

  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <h2 className="section-title">Education & Credentials</h2>
        
        <div className={styles.timeline}>
          {education.map(item => (
            <div key={item.id} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineDot}></div>
                <span className={styles.period}>{item.period}</span>
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.certifications}>
          <h3>Certifications & Licenses</h3>
          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
