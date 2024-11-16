import React from 'react';
import { ArrowLeft, BookOpen, PlayCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import './educational.css'
function EducationalResources() {

  const handleBack = () => {
    window.history.back();
  };

  const scrollContainer = (containerId, direction) => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="edu-main">
        <button onClick={handleBack} className="back-btn">
        <ArrowLeft className="icon" />
        <span>Back</span>
      </button>
      <section className="edu-hero">
        <div className="edu-hero-content">
          
          <h1>Empowering Through Knowledge</h1>
          
          <p>
            Explore our curated collection of educational resources to deepen your
            understanding of renewable energy and sustainable practices.
          </p>
        </div>
        <div className="edu-hero-animation">
          <BookOpen size={300} className="edu-floating-icon" />
          <div className="edu-orbit">
            <div className="edu-planet"></div>
          </div>
        </div>
      </section>

      <section className="edu-videos">
        <div className="edu-section-header">
          <h2>Featured Video Resources</h2>
          <div className="edu-scroll-controls">
            <button
              onClick={() => scrollContainer('videos-container', 'left')}
              className="edu-scroll-button"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollContainer('videos-container', 'right')}
              className="edu-scroll-button"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="edu-scroll-container" id="videos-container">
          <a
            href="https://www.youtube.com/watch?v=keJjL8VXBGE"
            target="_blank"
            rel="noopener noreferrer"
            className="edu-card"
          >
            <div className="edu-thumbnail">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60"
                alt="Solar Energy Basics"
              />
              <PlayCircle className="edu-play-icon" />
            </div>
            <h3>Solar Energy Basics</h3>
            <p>Learn the fundamentals of solar power generation</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=1kUE0BZtTRc"
            target="_blank"
            rel="noopener noreferrer"
            className="edu-card"
          >
            <div className="edu-thumbnail">
              <img
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&auto=format&fit=crop&q=60"
                alt="Wind Energy Technology"
              />
              <PlayCircle className="edu-play-icon" />
            </div>
            <h3>Wind Energy Technology</h3>
            <p>Discover modern wind power solutions</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=ZmHX5F_r6ws"
            target="_blank"
            rel="noopener noreferrer"
            className="edu-card"
          >
            <div className="edu-thumbnail">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60"
                alt="Hydroelectric Power"
              />
              <PlayCircle className="edu-play-icon" />
            </div>
            <h3>Hydroelectric Power</h3>
            <p>Understanding water-based energy generation</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=4opVos_GWxw"
            target="_blank"
            rel="noopener noreferrer"
            className="edu-card"
          >
            <div className="edu-thumbnail">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=60"
                alt="Future of Energy"
              />
              <PlayCircle className="edu-play-icon" />
            </div>
            <h3>Future of Energy</h3>
            <p>Exploring upcoming renewable technologies</p>
          </a>
        </div>
      </section>

      <section className="edu-articles">
        <div className="edu-section-header">
          <h2>Essential Reading</h2>
          <div className="edu-scroll-controls">
            <button
              onClick={() => scrollContainer('articles-container', 'left')}
              className="edu-scroll-button"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollContainer('articles-container', 'right')}
              className="edu-scroll-button"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="edu-scroll-container" id="articles-container">
          <a
            href="https://www.energy.gov/eere/solar/solar-energy-basics"
            target="_blank"
            rel="noopener noreferrer"
            className="edu-card"
          >
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=60"
              alt="Solar Guide"
            />
            <h3>Comprehensive Solar Guide</h3>
            <p>Department of Energy's complete solar energy guide</p>
          </a>
          <a
            href="https://www.nrel.gov/research/re-wind.html"
            target="_blank"
            rel="noopener noreferrer"
            className="edu-card"
          >
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=60"
              alt="Wind Energy"
            />
            <h3>Wind Energy Research</h3>
            <p>Latest developments in wind power technology</p>
          </a>
          <a
            href="https://www.irena.org/Publications"
            target="_blank"
            rel="noopener noreferrer"
            className="edu-card"
          >
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&auto=format&fit=crop&q=60"
              alt="Research Papers"
            />
            <h3>Research Publications</h3>
            <p>Academic papers on renewable energy</p>
          </a>
          <a
            href="https://www.iea.org/reports/renewables-2023"
            target="_blank"
            rel="noopener noreferrer"
            className="edu-card"
          >
            <img
              src="https://images.unsplash.com/photo-1453906971074-ce568cccbc63?w=800&auto=format&fit=crop&q=60"
              alt="Market Analysis"
            />
            <h3>Market Analysis 2023</h3>
            <p>Current state of renewable energy markets</p>
          </a>
        </div>
      </section>
    </main>
  );
}

export default EducationalResources