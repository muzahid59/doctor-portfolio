import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h3>Dr. Shayekh Mahmud</h3>
            <p>Specialist in Eye Care & Ophthalmology</p>
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
                <li><a href="#specializations">Cataract Surgery</a></li>
                <li><a href="#specializations">LASIK & Refractive Surgery</a></li>
                <li><a href="#specializations">Corneal Diseases</a></li>
                <li><a href="#specializations">Glaucoma Management</a></li>
                <li><a href="#specializations">Pediatric Eye Care</a></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Contact</h4>
              <ul>
                <li>Vision Care Eye Hospital</li>
                <li>123 Medical Center Drive</li>
                <li>Dhaka, Bangladesh</li>
                <li>+880 1234-567890</li>
                <li>dr.shayekh@visioncare.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Dr. Shayekh Mahmud. All rights reserved.</p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
