import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div>
    <p>Welcome To Hello Rails React App</p>
    <NavLink to="/greeting">Goto Greeting</NavLink>
  </div>
);

export default Home;
