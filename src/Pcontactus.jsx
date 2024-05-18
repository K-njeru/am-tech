import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending data to a server
    console.log(formData);
  };

  return (
    <div className='container-fluid contactSection'>
    <div className="row flex-column-reverse flex-md-row" style={{width: '80vw'}}>
      <div className="col-md-6 col-sm-12 contactCol">
        <form onSubmit={handleSubmit} className="contactform">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Whats on your mind?</label>
            <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{color: 'black'}}>Submit</button>
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
};

export default ContactForm;
