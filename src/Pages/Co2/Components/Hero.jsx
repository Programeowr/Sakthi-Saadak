import { Footprints } from "lucide-react";
import Emmisions from "../JSB/Emmisions";

function Hero(){

    return(
        <section className="hero">
        <div className="hero-content">
          <h1>TRACK YOUR<br />CARBON FOOTPRINT</h1>
          <p>Understand and reduce your environmental impact with our advanced CO2 tracking system. Make informed decisions for a sustainable future.</p>
          
        </div>
        <div className="hero-image">
          <img src="src\Pages\Co2\Components\eco-earth.svg" alt="Sustainable Earth" />
        </div>
      </section>
    );
}

export default Hero