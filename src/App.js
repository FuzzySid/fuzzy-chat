import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <h1>Slack clone</h1>
      {/* Header Component */}
        <Header/>
        <div className="app">
                {/* Sidebar Component */}
                <Sidebar/>
                {/* React Router */}
        </div>

    </div>
  );
}

export default App;
