import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>Sakthi Saadhak</h2>
            <p>Let us together protect our Mother Earth and save on bills!</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#FAQs">FAQs</a></li>
                
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li>
                  <Mail className="footer-icon" />
                  <span>sakthisaadhak@gmail.com</span>
                </li>
                <li>
                  <Phone className="footer-icon" />
                  <span>+91 7780796993</span>
                </li>
                <li>
                  <MapPin className="footer-icon" />
                  <span>IIT Tirupati, Andhra Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://facebook.com/" aria-label="Facebook">
            <Facebook className="social-icon" />
          </a>
          <a href="https://twitter.com/" aria-label="Twitter">
            <Twitter className="social-icon" />
          </a>
          <a href="https://instagram.com/" aria-label="Instagram">
            <Instagram className="social-icon" />
          </a>
          <a href="https://linkedin.com/company/" aria-label="LinkedIn">
            <Linkedin className="social-icon" />
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sakthi Saadhak. All rights will be reserved very soon.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;