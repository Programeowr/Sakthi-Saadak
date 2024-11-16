import { useState } from 'react';
import { User, UserPlus, Info, Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">    
        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li>
            <a href="/login" className="nav-link">
              <User className="nav-icon" />
              <span>Log In</span>
            </a>
          </li>
          <li>
            <a href="/signup" className="nav-link">
              <UserPlus className="nav-icon" />
              <span>Sign Up</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              <Info className="nav-icon" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="/FAQ" className="nav-link">
              <Menu className="nav-icon" />
              <span>FAQs</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;