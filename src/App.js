import React from 'react';
import ClickCounter from './ClickCounter';
import './App.css';

function MainApp() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter />
      </header>
    </div>
  );
}

export default MainApp;
