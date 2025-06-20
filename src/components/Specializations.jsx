import styles from './Specializations.module.css';

export const Specializations = () => {
  const specializations = [
    {
      id: 1,
      title: 'Cardiac Imaging',
      description: 'Comprehensive imaging services including echocardiography, cardiac MRI, and cardiac CT to diagnose and monitor heart conditions.',
      icon: '🫀'
    },
    {
      id: 2,
      title: 'Preventive Cardiology',
      description: 'Personalized strategies to prevent heart disease, including risk assessment, lifestyle modifications, and medication management.',
      icon: '🏃‍♀️'
    },
    {
      id: 3,
      title: 'Heart Disease Management',
      description: 'Treatment and management of various heart conditions including coronary artery disease, heart failure, and arrhythmias.',
      icon: '💓'
    },
    {
      id: 4,
      title: 'Women\'s Heart Health',
      description: 'Specialized care focused on the unique cardiovascular needs and risks of women at all stages of life.',
      icon: '👩‍⚕️'
    },
    {
      id: 5,
      title: 'Cardiac Rehabilitation',
      description: 'Supervised exercise programs and education to help patients recover from heart attacks, surgery, or manage chronic heart conditions.',
      icon: '🏥'
    },
    {
      id: 6,
      title: 'Hypertension Management',
      description: 'Comprehensive approaches to managing high blood pressure through medication, diet, and lifestyle changes.',
      icon: '📊'
    }
  ];

  return (
    <section id="specializations" className={styles.specializations}>
      <div className="container">
        <h2 className="section-title">My Specializations</h2>
        <div className={styles.grid}>
          {specializations.map(spec => (
            <div key={spec.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{spec.icon}</span>
              </div>
              <h3>{spec.title}</h3>
              <p>{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
