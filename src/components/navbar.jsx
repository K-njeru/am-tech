import React, { useEffect } from "react";
import '../../public/assets/css/main.css'
import companyLogo from '../../public/assets/img/am logo.png';
import { useTheme } from './ThemeContext.jsx';


function Mynavbar() {
    // Function to handle hiding the navbar
    const hideNavbar = () => {
      if (window.innerWidth <= 768) {
        // Close the collapsed navbar on small screens
        document.querySelector(".navbar-toggler").click();
      }
    };
    useEffect(() => {
        // Ensure jQuery, Popper.js, and Bootstrap JS are available
        const loadScript = (url) => {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
        };

        loadScript('https://code.jquery.com/jquery-3.4.1.slim.min.js');
        loadScript('https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js');
        loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js');

        return () => {
            // Cleanup scripts if necessary
        };
    }, []);

    const { theme, toggleTheme } = useTheme();

    //Create a combined function to handle both actions
    const handleToggleThemeAndHideNavbar = () => {
    toggleTheme();
    hideNavbar();
    };
    return (
        <>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
            
            <nav className="navbar navbar-expand-md navbar-dark">
                <img className="company-logo" src={companyLogo} alt="Company Logo" />
                <a className="navbar-brand" href="#"><span style={{color: 'crimson'}}>AM</span> Technologies</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <i className="fas fa-times navbar-close-icon d-none"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <button onClick={handleToggleThemeAndHideNavbar} className="theme-toggle">
                     {theme === 'dark' ? (
                      <i className="fas fa-moon"></i>
                     ) : (
                      <i className="fas fa-sun"></i>
                     )}
                     </button>
                     </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#home" onClick={hideNavbar}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services" onClick={hideNavbar}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#chooseus" onClick={hideNavbar}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={hideNavbar}>Contact</a>
                        </li>
                    </ul>
             
                </div>
            </nav>
        </>
    );
}

export default Mynavbar;
