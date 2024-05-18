import React from 'react';

const Footer = () => {
    return (
        <footer className="deneb_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="widget widegt_about"> 
                            <div class="heading-with-line">
                                <h2><span style={{color: '#f91942'}}>AM</span> Tech</h2>
                                <div class="line"></div>
                                </div>
                                <p>Embracing Tomorrow's Technology Today. We're the pinnacle of IT innovation, leading the charge towards a digital future. Elevate your business with our cutting-edge solutions!</p>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>     
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-discord"></i></a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="widget widget_link">
                                <div className="widget_title">
                                    <h4>Links</h4>
                                </div>
                                <ul className='links-list'>
                                    <li><i className="fas fa-arrow-right" style={{ marginRight: '5px',fontSize: '10px', color:'#f91942' }}></i><a href="#">About Us</a></li>
                                    <li><i className="fas fa-arrow-right" style={{ marginRight: '5px',fontSize: '10px', color:'#f91942'  }}></i><a href="#services">Services</a></li>
                                    <li><i className="fas fa-arrow-right" style={{ marginRight: '5px',fontSize: '10px', color:'#f91942'  }}></i><a href="#faqs">Faqs</a></li>
                                    <li><i className="fas fa-arrow-right" style={{ marginRight: '5px',fontSize: '10px', color:'#f91942'  }}></i><a href="#contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="widget widget_contact">
                                <div className="widget_title">
                                    <h4>Contact Us</h4>
                                </div>
                                <div className="contact_info">
                                    <div className="single_info">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="info">
                                            <p><a href="tel:+254700637203">254 700 637 203</a></p>
                                            <p><a href="tel:+254794298696">254 794 298 696</a></p>
                                        </div>
                                    </div>
                                    <div className="single_info">
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="info">
                                        <p><a href="mailto:knjeru519@gmail.com">services@amtech.co.ke</a></p>
                                        <p><a href="mailto:athumanimakoti@gmail.com">info@amtech.co.ke</a></p>
                    
                                        </div>
                                    </div>
                                    <div className="single_info">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="info">
                                            <p style={{color: '#7a808d'}}>125, Park street Mombasa Road,<span>Nairobi.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className="copyright_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright_text">
                                <p>Copyright &copy; 2024 All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
