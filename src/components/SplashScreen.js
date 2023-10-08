// SplashScreen.js
import React, { useEffect, useState } from 'react';
import './Ztyles.css'; // Import the CSS file
import vid from './vid2.mp4'

function SplashScreen() {
    const [showMainContent, setShowMainContent] = useState(false);

    useEffect(() => {
        // Delay for 3 seconds (3000 milliseconds)
        const delay = setTimeout(() => {
            setShowMainContent(true);
        }, 4000);

        // Cleanup the timeout when the component unmounts
        return () => {
            clearTimeout(delay);
        };
    }, []);

    return (
        <div className={`splash ${showMainContent ? 'fade-out' : ''}`}>
            <div className="animation">
                <video autoPlay muted loop>
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default SplashScreen;
