import React, { useEffect, useState } from "react";
import WAVES from "vanta/dist/vanta.globe.min.js"; // Using the 'net' effect
import * as THREE from "three";
import Form from "./Components/Form.jsx";
import "./Signup.css";

function Signup() {
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: "#signup-body",
          THREE, // Required for Vanta.js to work
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x4caf50, // Earthy Green for the globe
          backgroundColor: 0x2e3b3c, // Dark Teal for a nature-inspired background


          backgroundAlpha:1,
          points: 10.0, // Adjust for net effect
          maxDistance: 20.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup Vanta on unmount
    };
  }, [vantaEffect]);

  return (
    <div id="signup-body">
      <Form />
    </div>
  );
}

export default Signup;
