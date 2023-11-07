import React from 'react';
import './App.css';
import Analytics from './components/Analytics';
import Dash from './components/Dash';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div >
      <Navbar />
      <Dash />
      <Analytics />
      <Newsletter />
    </div>
  );
}

export default App;
