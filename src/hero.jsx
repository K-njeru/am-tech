import React from "react";
import companyLogo from '../src/assets/img/greenleaf-logo-nobg3.png'
import heroImage from '../src/assets/img/phonemock.png'
import '../src/assets/css/main.css'

function HeroSection() {
    return (
        <div className="container-fluid hero">
            <div className="row">
                {/* Text */}
                <div className="col-md-6 col-sm-12 hero-col">
                {/*  <h1 className="intro-head">Embark on a <span>transformative</span> journey with us...</h1>  */}
                <h1 className="intro-head">
                Embark on a <span style={{'color': 'crimson'}}>transformative</span> journey with us...
                <div class="typed-text" style={{'display': 'none'}}>transformative, amazing, exciting</div>
                </h1>
                    <div className="hero-text"> 
                        <p>Guided by a passion for innovation, our team of tech virtuosos specializes in
                             crafting bespoke strategies tailored to your unique needs.
                              From pioneering software development to robust network architecture, 
                              we're dedicated to unlocking the full potential of your digital landscape.</p>
                        <p className="end-head">Your gateway to cutting-edge IT solutions.</p>
                        <a href="#contact" className="btn btn-primary" style={{'margin-bottom': '30px'}}>Request Quote</a>
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
