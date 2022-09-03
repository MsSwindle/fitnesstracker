import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		
    <div className="home">
    <h1>Welcome to Fitness Tracker!</h1>
    <br />
    <h3>This is a site for you to find and share your workout routines with others. </h3>
    <h3>Please Register/Log In to access your personal routines and activities!</h3>
    <h3>Join our community and get your routine on!</h3>
    <br />

      <p>New User? 
      <span> <Link to='/register'>Sign up here</Link></span>
      </p>
    </div>
  );
};

export default Home;
