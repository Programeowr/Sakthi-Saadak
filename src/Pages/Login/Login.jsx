import React, { useEffect, useState } from 'react';
import TOPOLOGY from 'vanta/dist/vanta.globe.min.js';
import * as THREE from 'three';
import Form from './Components/Form.jsx';
import './Login.css';

function Login() {
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                TOPOLOGY({
                    el: "#signup-body",
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x76ff03, // Vibrant Lime Green for the globe (bright and energetic)
                    backgroundColor: 0x00796b, // Teal for the background (fresh and balanced)
                    
                    points: 10.0,
                    maxDistance: 25.0,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div id="login-body">
            <Form />
        </div>
    );
}

export default Login;
