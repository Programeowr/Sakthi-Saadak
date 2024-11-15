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
                <li><a href="#contact">Contact</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li>
                  <Mail className="footer-icon" />
                  <span>hello@sakthisaadhak.com</span>
                </li>
                <li>
                  <Phone className="footer-icon" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li>
                  <MapPin className="footer-icon" />
                  <span>Chennai, Tamil Nadu, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://facebook.com/sakthisaadhak" aria-label="Facebook">
            <Facebook className="social-icon" />
          </a>
          <a href="https://twitter.com/sakthisaadhak" aria-label="Twitter">
            <Twitter className="social-icon" />
          </a>
          <a href="https://instagram.com/sakthisaadhak" aria-label="Instagram">
            <Instagram className="social-icon" />
          </a>
          <a href="https://linkedin.com/company/sakthisaadhak" aria-label="LinkedIn">
            <Linkedin className="social-icon" />
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sakthi Saadhak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;