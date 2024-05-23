import React from "react";
import bannerImage from '../../public/assets/img/afro.jpg'
import '../../public/assets/css/main.css'


function Banner(){
return(
        <div className="container-fluid banner">
        <div className="row">
        <div className="col-md-6 col-sm-12 banner-col"> 
        <p className="bannerhead">Let's turn your IT challenges into 'I-Tea' parties – where the only crashes are from the laughter!</p>
        <p className="bannercontent">Leave the tech jargon to us! Just tell us your IT wishes and toss in some spare change – we'll handle the rest with finesse. 
            Think of us as your IT fairy godmothers, turning your tech headaches into happy endings! </p>
        {/*<p className="bannerfoot">Embrace the digital frontier with us and watch your business soar higher than a Wi-Fi signal at 30,000 feet! </p> */}
        </div>
        <div className="col-md-6 col-sm-12 banner-col">
        <img src={bannerImage} alt="Hero Image" className="banner-img" />
        </div>
    </div>
    </div>
)
}

export default Banner