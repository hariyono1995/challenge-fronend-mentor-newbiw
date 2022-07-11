import React from 'react';

import About from 'parts/home/About';
import Curriculum from 'parts/home/Curriculum';
import './home.css';

const Home = () => {
  return (
    <section className='exhibition__home'>
      <div className='exhibition__home-hero'>
      </div>

      <About />
      <Curriculum />
    </section>
  )
}

export default Home