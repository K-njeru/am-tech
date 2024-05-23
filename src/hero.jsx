import React, { useEffect, useRef } from "react";
import companyLogo from '../src/assets/img/greenleaf-logo-nobg3.png';
import heroImage from '../src/assets/img/phonemock.png';
import '../src/assets/css/main.css';

function HeroSection() {
    const typedElement = useRef(null);

    useEffect(() => {
        // Function to load the Typed.js script
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = () => resolve(script);
                document.head.append(script);
            });
        };

        // Load the Typed.js script and initialize it
        loadScript('https://cdn.jsdelivr.net/npm/typed.js@2.0.12')
            .then(() => {
                const options = {
                    strings: ['transformative', 'amazing', 'exciting'],
                    typeSpeed: 200,
                    backSpeed: 20,
                    backDelay: 5000,
                    smartBackspace: false,
                    loop: true,
                };

                if (typedElement.current) {
                    const typed = new window.Typed(typedElement.current, options);
                    return () => {
                        typed.destroy();
                    };
                }
            })
            .catch(err => console.error(err));

    }, []);

    return (
        <div className="container-fluid hero">
            <div className="row">
                {/* Text */}
                <div className="col-md-6 col-sm-12 hero-col">
                    <h1 className="intro-head">
                        Embark on a <br /> <span style={{ color: 'crimson' }} ref={typedElement}></span> <br />journey with us...
                    </h1>
                    <div className="hero-text">
                        <p>Guided by a passion for innovation, our team of tech virtuosos specializes in
                            crafting bespoke strategies tailored to your unique needs.
                            From pioneering software development to robust network architecture,
                            we're dedicated to unlocking the full potential of your digital landscape.</p>
                        <p className="end-head">Your gateway to cutting-edge IT solutions.</p>
                        <a href="#contact" className="btn btn-primary" style={{ marginBottom: '30px' }}>Request Quote</a>
                    </div>
                </div>
                {/* Image on half screen for large and medium screens */}
                <div className="col-md-6 d-none d-md-block hero-col">
                    <img src={heroImage} alt="Hero Image" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;