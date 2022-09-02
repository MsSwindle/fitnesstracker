import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home" className="homePage">
      <h1>Welcome to Fitness Trak.r!</h1>
      <h3>This is a site for you to make and share your workout routines with others.</h3>
      <h3>Please register/login to access your personal routines and activities.</h3>
      <h3>Get ready to get your routine on!</h3>
      <br />

      <p>New User? 
      <span> <Link to='registeruser'>Sign up here</Link></span>
      </p>
    </div>
  );
};

export default Home;