import React from 'react';
import networkImage from '../../public/assets/img/phonemock.png'
import logodesignImage from '../../public/assets/img/logodesign2-preview.png'
import digitalImage from '../../public/assets/img/services.png'

function Services() {
  return (
    <section className='services'>
    <h1 className='services-intro'>Step into the Realm of Innovation</h1>
    <h2>Discover Our Multifaceted Services Portfolio</h2>
    <div className="container-fluid services-section">
      <div className="row ">
        {/* Service Card 1 */}
        <div className="col-lg-6 col-md-6 col-sm-12 services-column">
          <div className="service-card card1">
          <div class="circle-icon">
          <i class="fas fa-laptop-code"></i>
          </div>
          <h3>Web Development & Design</h3>
            <p>We offer top-notch web design and development services to bring your digital vision to life. 
              Our team of skilled designers and developers create visually stunning, user-friendly websites that are optimized for performance and scalability. Whether you need a simple landing page or a complex web application,
               we ensure your online presence is both attractive and functional.
            </p>
          
          </div>
           {/* Service Card 5  */}
          <div className="service-card card5">
            <div class="row card5-row">
            <div class="col-md-8 card5-col">
            <div class="circle-icon">
          <i class="fas fa-paint-brush"></i>
          </div>
            <h3>Graphic Designs</h3>
                <p>Unlock the visual identity of your brand with our bespoke logos, banners, posters among other brand identity design services. 
                   Why settle for ordinary when you can have extraordinary?</p>
            </div>
            <div class="col-md-4 ">
            <img className="card5-image" src={logodesignImage} alt="Logo design" />
            </div>
        </div>
        </div>
          
        </div>
        {/* Service Card 3 */}
        <div className="col-lg-6 col-md-6 col-sm-12 services-column">
          <div className="service-card card3">
          <div class="circle-icon">    
         <i class="fas fa-network-wired"></i>
          </div> 
          <h3>Network Setup and Installation</h3>
        <p>We specialize in comprehensive network setup and installation services, ensuring seamless connectivity and robust security for your business. Our services include everything from structured cabling
           and Wi-Fi setup to advanced solutions like CCTV installation and access control systems.</p>
         <img className="card3-image" src={networkImage} alt="Company Logo" />
          </div>
        </div>
       {/* Service Card 2 */}
       <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="service-card card2">
          <div class="circle-icon">
          <i class="fas fa-desktop"></i>
          </div>
            <h3>Comprehensive Software Solutions</h3>
            <p>Unlock the full potential of your workplace with our comprehensive software solutions tailored for offices, 
              businesses, schools, and beyond. From essential productivity tools to specialized applications, our expert team
               handles installations, upgrades, and maintenance with
               precision, ensuring seamless operations and optimal efficiency across all aspects of your organization.</p>
          </div>
        </div>
      {/* Service Card 4  */}
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="service-card card4">
      <div class="circle-icon">
          <i class="fas fa-cogs"></i>
          </div>
            <div class="row card5-row">
            <div class="col-md-4 card4-imagecol">
            <img className="card4-image" src={digitalImage} alt="Logo design" />
            </div>
            <div class="col-md-8 card4-col">
            
          <h3>Digital Solutions Consultancy</h3>
            <p>Ready to upgrade your digital game?
               With our Digital Solutions Consultancy service, we'll navigate the digital maze for you, from strategy to implementation.
                Let us help you stay ahead of the curve in today's rapidly evolving digital landscape.</p>
            </div>
        </div>
        </div>

          </div>
         
        </div>
    </div>
    </section>
  );
}

export default Services;
