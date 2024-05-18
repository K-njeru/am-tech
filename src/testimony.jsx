import React, { useEffect } from 'react';
import CEOImage from '../src/assets/img/ceoam.png'

const Testimony = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'src/assets/js/testimonials.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
<div className="container-fluid testimonials">
<section id="testim" className="testim">
         <div className="testim-cover">
            <div className="wrap">
        
            
                <span id="right-arrow" className="arrow right fa fa-chevron-right"></span>
                <span id="left-arrow" className="arrow left fa fa-chevron-left "></span>
                <ul id="testim-dots" className="dots">
                    <li className="dot active"></li>
                    <li className="dot"></li>
                   <li className="dot"></li>
                    <li className="dot"></li>
                    <li className="dot"></li>
                </ul>
                <div id="testim-content" className="cont">

                    <div className="active">
                        <div className="img"><img src={CEOImage} alt="" style={{ position: 'relative', top: '15px' }}/></div>
                        <h2>Athumani Makoti.</h2>
                        <h3>CEO - AM Tech</h3>
                        <p>At AM Technologies, our mission is to elevate you and your business through the magic of technology. 
                            Now, some folks think tech is like buying a fancy sports car—expensive and out of reach. But here at 
                            AM Tech, we're more like the thrift shop of innovation—where you can find the latest and greatest at a price 
                            that won't have you selling your firstborn. Because let's face it, who needs a sports car when you can have a rocket ship?
                             Let's blast off together!</p>                    
                    </div>

                    <div>
                        <div className="img"><img src="/src/assets/img/avatar4.png" alt=""/></div>
                        <h2>Dennis Chari.</h2>
                        <h3>Web Developer - AM Tech</h3>
                        <p>In my brief stint at AM Technologies, I've discovered a workplace culture that's more focused on customer
                             satisfaction and pioneering tech than on raking in cash. 
                            It's like finding a unicorn in a world of profit-hungry dragons!</p>                    
                    </div>

                    <div>
                        <div className="img"><img src="/src/assets/img/avatar5.png" alt=""/></div>
                        <h2>Faizah Omar.</h2>
                        <h3>Entrepreneur - Faizah Beauty</h3>
                        <p>AM has been my go-to for all design needs, from posters to banners and beyond.
                             Their work impresses both me and my clients, adding beauty to my spa's brand.</p>                    
                    </div>

                    <div>
                        <div className="img"><img src="/src/assets/img/avatar6.png" alt=""/></div>
                        <h2>John Muinde.</h2>
                        <h3>Founder - Truepole Ltd.</h3>
                        <p>Understanding tech felt like solving a puzzle in a foreign language. Before, I'd just hand off work and get back a 
                            finished product without really getting it. But with AM, 
                            it's like they've given me a <span style={{fontStyle: 'italic'}}>mwakenya</span>. Now, I get how it all works, from start to finish.</p>                    
                    </div>

                    <div>
                        <div className="img"><img src="/src/assets/img/dean.png" alt=""/></div>
                        <h2>Dean Kamen.</h2>
                        <p style={{height: '105px'}}>Every once in a while, a new technology, an old problem, and a big idea turn into an innovation.</p>                    
                    </div>

                </div>

            </div>
         </div>
    </section>
</div>
)
};

export default Testimony;