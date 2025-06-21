import styles from './Specializations.module.css';

export const Specializations = () => {
  const specializations = [
    {
      id: 1,
      title: 'Cataract Surgery',
      description: 'Advanced cataract removal and lens implantation for restoring clear vision.',
      icon: '👁️'
    },
    {
      id: 2,
      title: 'LASIK & Refractive Surgery',
      description: 'Laser vision correction procedures to reduce dependence on glasses and contact lenses.',
      icon: '🔬'
    },
    {
      id: 3,
      title: 'Corneal Diseases',
      description: 'Diagnosis and treatment of corneal disorders, including keratoconus and corneal infections.',
      icon: '🦠'
    },
    {
      id: 4,
      title: 'Glaucoma Management',
      description: 'Comprehensive care for glaucoma, including early detection and advanced treatment options.',
      icon: '💊'
    },
    {
      id: 5,
      title: 'Retina & Vitreous Disorders',
      description: 'Management of retinal diseases such as diabetic retinopathy and macular degeneration.',
      icon: '🩺'
    },
    {
      id: 6,
      title: 'Pediatric Eye Care',
      description: 'Specialized eye care for children, including vision screening and treatment of childhood eye conditions.',
      icon: '👶'
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
