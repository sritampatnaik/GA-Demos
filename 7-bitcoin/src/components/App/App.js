import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import Currencies from '../Currencies/Currencies'
import './App.css';

function App() {
  const [price, setPrice] = useState(null);

  const handleClick = price => {
    setPrice(price);
  };

  return (
    <div>
      <nav>
        <Link to="/">
          <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
          <h1>Bitcoin prices</h1>
        </Link>
        <Link to="/currencies">Currencies</Link>
      </nav>
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/currencies">
          <Currencies/>
        </Route>
      </main>
    </div>
  );
}

export default App;
