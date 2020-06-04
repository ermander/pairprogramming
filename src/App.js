import React from 'react';
import logo from './logo.svg';
import './App.css';
import WarningSign from './components/WarningSign'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <WarningSign text="Some Text" />
    </div>
  );
}

export default App;
