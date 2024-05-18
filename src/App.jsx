import React from 'react';
import Mynavbar from './navbar.jsx';
import HeroSection from './hero.jsx';
import Services from './services.jsx';
import Banner from './banner.jsx';
import ChooseUsSection from './chooseus.jsx';
import ProjectsDone from './projects.jsx';
import Accordion from './faqs.jsx';
import Testimony from './testimony.jsx';
import ContactForm from './contactus.jsx';
import Footer from './footer.jsx';

function App() {
  return (
    <div>
      <Mynavbar />
      <div id="home"><HeroSection /></div>
      <div id="services"><Services /></div>
      <div id="chooseus"><ChooseUsSection /></div>
      <div id="projects"><ProjectsDone /></div>
      <div id="faqs"><Accordion /></div>
      <div id="banner"><Banner /></div>
      <div id="testimony"><Testimony /></div>
      <div id="contact"><ContactForm /></div>
      <Footer />
    </div>
  );
}

export default App;
