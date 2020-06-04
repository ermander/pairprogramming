import React from 'react';
import './App.css';
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <WarningSign text="Some Text" />
      <MyBadge text="badge text" variant="danger" />
    </div>
  );
}

export default App;
