import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeCards />
    </div>
  )
}

export default App