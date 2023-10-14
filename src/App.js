import React from 'react';
import './App.css';
import GitHubLinks from 'main_project/src/components/Githublinks.jsx';
import SiteLinks from 'main_project/src/components/sitelinks.jsx';

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
