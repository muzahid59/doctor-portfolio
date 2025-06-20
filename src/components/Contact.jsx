import { useState } from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // This is a simulated form submission
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you! Your appointment request has been submitted. We will contact you shortly to confirm.'
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Book an Appointment</h2>
        
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.icon}>📍</div>
              <div>
                <h4>Address</h4>
                <p>123 Medical Center Drive<br />Boston, MA 02115</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.icon}>📞</div>
              <div>
                <h4>Phone</h4>
                <p>(617) 555-0123</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.icon}>📧</div>
              <div>
                <h4>Email</h4>
                <p>dr.smith@heartcarespecialists.com</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.icon}>🕒</div>
              <div>
                <h4>Office Hours</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 12:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            {formStatus.submitted ? (
              <div className={styles.formSuccess}>
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="date">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="time">Preferred Time</label>
                  <select 
                    id="time" 
                    name="time" 
                    value={formData.time} 
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Reason for Visit</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn">Book Appointment</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
