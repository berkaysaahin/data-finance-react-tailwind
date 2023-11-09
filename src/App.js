import React from 'react';
import './App.css';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Dash from './components/Dash';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div >
      <Navbar />
      <Dash />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />  
    </div>
  );
}

export default App;
