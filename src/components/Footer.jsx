import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h3>Dr. Smith</h3>
            <p>Specialized Cardiac Care</p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#specializations">Specializations</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Services</h4>
              <ul>
                <li><a href="#specializations">Cardiac Imaging</a></li>
                <li><a href="#specializations">Preventive Cardiology</a></li>
                <li><a href="#specializations">Heart Disease Management</a></li>
                <li><a href="#specializations">Women's Heart Health</a></li>
                <li><a href="#specializations">Cardiac Rehabilitation</a></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Contact</h4>
              <ul>
                <li>123 Medical Center Drive</li>
                <li>Boston, MA 02115</li>
                <li>(617) 555-0123</li>
                <li>dr.smith@heartcarespecialists.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Dr. Jane Smith. All rights reserved.</p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
