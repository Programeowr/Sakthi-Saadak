import { Shield, Heart, TreePine } from 'lucide-react';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content animate-fade-up">
        <h2 className="section-title">About Us</h2>
        
        <div className="mission-grid">
          <div className="mission-card">
            <Shield className="mission-icon" />
            <h3>Our Mission</h3>
            <p>
              Leading people towards healthier and sustainable ways of energy
              through insights, solutions, and tools that help minimize carbon
              footprints.
            </p>
          </div>
          
          <div className="mission-card">
            <Heart className="mission-icon" />
            <h3>Our Values</h3>
            <p>
              We believe in empowering individuals and companies with the
              necessary tools and resources to optimize their energy usage.
            </p>
          </div>
          
          <div className="mission-card">
            <TreePine className="mission-icon" />
            <h3>Our Vision</h3>
            <p>
              Creating a greener and more energy-efficient world through
              innovation and sustainable practices.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default About;