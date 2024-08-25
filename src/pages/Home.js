import React from 'react';
import Header from '../components/Header';
import Links from '../components/Links'; // Updated component import
import Projects  from '../components/Projects';
import Contact  from '../components/Contact';


const Home = () => {
  return (
    <div className="home">
      <Header />
      <Links /> {/* Render the updated Links component */}
      <Projects/>
      <Contact/>      
    </div>
  );
};

export default Home;
