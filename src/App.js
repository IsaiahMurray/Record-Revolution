import React from 'react';

import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <h1 className="shopTitle"
      style={{textAlign: 'center', marginTop: '2em'}}>Shop Records!</h1>
    </div>
  );
}

export default App;
