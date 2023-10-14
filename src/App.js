import React from 'react';
import './App.css';
import GitHubLinks from './components/Githublinks';
import SiteLinks from './components/sitelinks';

function App() {
  return (
    <div className="App">
      <h1>Project Landing Page</h1>
      <div className="button-container">
        <GitHubLinks />
        <SiteLinks />
      </div>
    </div>
  );
}

export default App;
