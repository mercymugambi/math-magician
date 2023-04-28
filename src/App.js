import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Quote from './components/Quote';

function App() {
  return (
    <div className="appContainer">
      <Quote />
      <Calculator />
    </div>
  );
}

export default App;
