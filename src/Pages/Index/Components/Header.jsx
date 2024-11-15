import { Leaf } from 'lucide-react';

function Header() {
  return (
    <header className="animate-fade-in">
      <h1 className="header-title">
        <Leaf className="logo-icon animate-float" />
        <span className="header-text">SAKTHI SAADHAK</span>
      </h1>
    </header>
  );
}

export default Header;