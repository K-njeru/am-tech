import React from 'react';

const Accordion = () => {
  return (
    <div className="container p-4 bg-light faqs">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item rounded-3 border-0 shadow mb-2">
          <h2 className="accordion-header">
            <button className="accordion-button border-bottom collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            How do I get access to any of your services?
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <p>To access our services, simply send us a message via the provided contact form. You can also email us or call us using the details found in the footer of our website.
                 We promise to reply and serve you as soon as possible—faster than a computer reboots!</p>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded-3 border-0 shadow mb-2">
          <h2 className="accordion-header">
            <button className="accordion-button border-bottom collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            How much do you charge?
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <p>Each of our services has a distinct price, but rest assured, all our prices are fair and a bargain compared to 
                the exceptional service we provide. For detailed pricing, please contact us directly. 
                Our deals are so good, even a robot would say, "It's a steal—beep boop!"</p>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded-3 border-0 mb-2 shadow">
          <h2 className="accordion-header">
            <button className="accordion-button border-bottom collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Why should I make the switch to AM Technologies?
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <p>You won't regret the change because we'll be your partner, not just another expense in your books.
                 We ensure you get exceptional value for your money with reliable, top-tier IT services and a seamless transition process.
                 Upgrade your experience and see the difference quality makes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
