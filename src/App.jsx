
// src/App.js
import React from 'react';
import Mynavbar from './components/navbar.jsx'
import HeroSection from './components/hero.jsx';
import Services from './components/services.jsx';
import Banner from './components/banner.jsx';
import ChooseUsSection from './components/chooseus.jsx';
import ProjectsDone from './components/projects.jsx';
import Accordion from './components/faqs.jsx';
import Testimony from './components/testimony.jsx';
import ContactForm from './components/contactus.jsx';
import Footer from './components/footer.jsx';
import { ThemeProvider, useTheme } from './components/ThemeContext.jsx';


const App = () => {
  const { theme } = useTheme();

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
};

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;

