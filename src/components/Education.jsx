import styles from './Education.module.css';

export const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Fellowship in Cornea & Refractive Surgery',
      institution: 'National Institute of Ophthalmology',
      period: '2012 - 2014',
      description: 'Advanced training in corneal transplantation, LASIK, and refractive procedures.'
    },
    {
      id: 2,
      degree: 'Residency in Ophthalmology',
      institution: 'National Institute of Ophthalmology',
      period: '2009 - 2012',
      description: 'Comprehensive training in medical and surgical eye care.'
    },
    {
      id: 3,
      degree: 'Doctor of Medicine (MBBS)',
      institution: 'Dhaka Medical College',
      period: '2003 - 2009',
      description: 'Graduated with honors, with a focus on ophthalmology.'
    }
  ];

  const certifications = [
    'Board Certification in Ophthalmology',
    'Fellowship in Cornea & Refractive Surgery',
    'Member, Bangladesh Society of Cataract & Refractive Surgeons',
    'Member, Asia-Pacific Academy of Ophthalmology',
    'Certification in Advanced Phacoemulsification Surgery'
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
          <h3>Certifications & Memberships</h3>
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
