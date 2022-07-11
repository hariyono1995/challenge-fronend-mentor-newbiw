import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './parts/Header';
import Home from './pages/home/Home';
import Profile from 'pages/profile/Profile';
import Footer from 'parts/Footer';
import './app.css';

const App = () => {
  return (
    <section className='exhibition'>
        <Header />

        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/*' element={<Home />} />
        </Routes> 

        <Footer /> 
    </section>
  )
}

export default App