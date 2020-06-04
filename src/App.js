import React from 'react';
import './App.css';
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBook from './components/SingleBook';

function App() {
  return (
    <div className="App">
      <WarningSign text="Some Text" />
      <MyBadge text="badge text" variant="danger" />
      <SingleBook 
        asin="1621579832"
        title="Justice on Trial: The Kavanaugh Confirmation and the Future of the Supreme Court"
        img="https://images-na.ssl-images-amazon.com/images/I/71WdFQNYSJL.jpg"
        price={17.39}
        category="history"
      />
    </div>
  );
}

export default App;
