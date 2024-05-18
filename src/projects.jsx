import React, { useState, useEffect, useRef } from 'react';


const ProjectsDone = () => {
  const projectsRef = useRef(null);

  const [yearsCount, setyearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [websitesCount, setWebsitesCount] = useState(0);
  const [logosCount, setLogosCount] = useState(0);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const yearsFinalCount = 4;
    const projectsFinalCount = 10; // Set final count for projects
    const clientsFinalCount = 20; // Set final count for clients
    const websitesFinalCount = 15; // Set final count for websites
    const logosFinalCount = 25; // Set final count for logos

    const yearsInterval = 1000 / yearsFinalCount;
    const projectsInterval = 1000 / projectsFinalCount; // Calculate interval per digit
    const clientsInterval = 1000 / clientsFinalCount;
    const websitesInterval = 1000 / websitesFinalCount;
    const logosInterval = 1000 / logosFinalCount;

    // Smoothly count to yearsFinalCount
    for (let i = 1; i <= yearsFinalCount; i++) {
    setTimeout(() => {
      setyearsCount(i);
      }, i * yearsInterval);
      }


    // Smoothly count to projectsFinalCount
    for (let i = 1; i <= projectsFinalCount; i++) {
      setTimeout(() => {
        setProjectsCount(i);
      }, i * projectsInterval);
    }

    // Smoothly count to clientsFinalCount
    for (let i = 1; i <= clientsFinalCount; i++) {
      setTimeout(() => {
        setClientsCount(i);
      }, i * clientsInterval);
    }

    // Smoothly count to websitesFinalCount
    for (let i = 1; i <= websitesFinalCount; i++) {
      setTimeout(() => {
        setWebsitesCount(i);
      }, i * websitesInterval);
    }

    // Smoothly count to logosFinalCount
    for (let i = 1; i <= logosFinalCount; i++) {
      setTimeout(() => {
        setLogosCount(i);
      }, i * logosInterval);
    }
  };

  return (
    
    <div className= "container-fluid projects-container" ref={projectsRef}>
      <div className='row projects-row'>
      <div className="circle one">
        <div className="count">{yearsCount}+</div>
        <div className="label">Years of Experience</div>
      </div>
      <div className="circle two">
        <div className="count">{projectsCount}+</div>
        <div className="label">Projects involved in</div>
      </div>
      <div className="circle three">
        <div className="count">{clientsCount}+</div>
        <div className="label">Clients</div>
      </div>
      <div className="circle four">
        <div className="count">{websitesCount}+</div>
        <div className="label">Websites Created</div>
      </div>
      <div className="circle five">
        <div className="count">{logosCount}+</div>
        <div className="label">Logos Designed</div>
      </div>
      </div>
    </div>
  );
};

export default ProjectsDone;
