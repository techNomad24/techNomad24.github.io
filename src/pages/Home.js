import React from 'react';
import Links from '../components/Links'; // Import Links component
import Contact from '../components/Contact'; // Import Contact component
import Projects from '../components/Projects'; // Import Projects component

const Home = () => {
  return (
    <div className="home">
      <Links /> {/* Render Links component */}
      <Projects /> {/* Render Projects section */}
      <Contact /> {/* Render Contact section */}
    </div>
  );
};

export default Home;
