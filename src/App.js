import React from 'react';
import './App.css';
import './Githublinks';
import Githublinks from './Githublinks';
const App = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <h1>Welcome to Main Site Navigation</h1>
        <p>Click on the respective links to navigate to each tasks.</p>
      </div>

      <div className="button-container">
        <div className="links-container">
          <Githublinks />
    </div>
    </div>
    </div>
  );
}

export default App;
