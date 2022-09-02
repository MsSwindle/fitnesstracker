import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home" className="homePage">
<<<<<<< HEAD
      <h1>Welcome to Fitness Tracker!</h1>
      <h3>This is a site for people to find and share their workout routines </h3>
      <h3>Register/Log In to access your personal routines and activities</h3>
      <h3>Get ready to get shredded!</h3>
      <br />

      <p>New User? 
      <span> <Link to='Register'>Sign up here</Link></span>
=======
      <h1>Welcome to Fitness Trak.r!</h1>
      <h3>This is a site for you to make and share your workout routines with others.</h3>
      <h3>Please register/login to access your personal routines and activities.</h3>
      <h3>Get ready to get your routine on!</h3>
      <br />

      <p>New User? 
      <span> <Link to='registeruser'>Sign up here</Link></span>
>>>>>>> 1211b3ce24103018a9c43c55ebc3d969b33294ad
      </p>
    </div>
  );
};

export default Home;