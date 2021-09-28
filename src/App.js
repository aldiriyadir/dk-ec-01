import React from 'react';
import './App.css';

function App() {
  return (
    <div className = "form-box">
      <p className= "form-name"> USD - United States Dollar </p>
      <div className="code-price">
      <p className = "form-step"> USD </p>
      <input type="number" className="input" placeholder="10.000"></input>
      </div>
    </div>
  );
}

export default App;
