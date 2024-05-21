import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mrgndwae");
  if (state.succeeded) {
      return (
      <div className='container-fluid contactSection'>
      <div className="row flex-column-reverse flex-md-row contactRow">
        <div className="col-md-6 col-sm-12 contactCol">
        <h3>Thank you for sharing your thoughts with us!</h3>
        <p>Hold on tight, we will get back to you in a split second.</p>
        </div>
      <div className="col-md-6 col-sm-12  contact-content">
        <h3>Let's talk about everything.</h3>
        <p>Are we on your team yet, or do we need to bust out the tech magic tricks? 
            If you're not fully convinced or having second thoughts about our abilities, let's chat!</p>
      </div>
    </div>
    </div>
            
            ) ;
  }
  return (
    <div className='container-fluid contactSection'>
    <div className="row flex-column-reverse flex-md-row" style={{width: '80vw'}}>
      <div className="col-md-6 col-sm-12 contactCol">
        <form onSubmit={handleSubmit} className="contactform">
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" name="name"  required/>
          </div>
          <div className="form-group">
      <label htmlFor="email">
        Email Address:
      </label>
      <input
      className="form-control"
        id="email"
        type="email" 
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className="form-group">
      <label htmlFor="email">
        Whats on your mind?
      </label>
      <textarea
      className="form-control"
        id="message"
        name="message"
        rows="5"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <button className="btn btn-primary" style={{color: 'black'}} type="submit" disabled={state.submitting}><i className="fas fa-paper-plane" style={{marginRight: '10px'}}></i>
        Send
      </button>
    </form>
      </div>
      <div className="col-md-6 col-sm-12  contact-content">
        <h3>Let's talk about everything.</h3>
        <p>Are we on your team yet, or do we need to bust out the tech magic tricks? 
            If you're not fully convinced or having second thoughts about our abilities, let's chat!</p>
      </div>
    </div>
    </div>
  );
}

export default ContactForm;