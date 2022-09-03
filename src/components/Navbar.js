import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn, loggedInUsername }) => {
	const handleLogOut = () => {
		localStorage.removeItem('jwt');
		setIsLoggedIn(false);
	};

	return (
		<div id="Navbar">
			<div id="siteLinks">
				{isLoggedIn ? (
					<span className="welcomeUser">{`Welcome, ${loggedInUsername}`}</span>
				) : (
					<span className="welcomeUser">Welcome, guest</span>
				)}

				<Link to="/" className="navText">
					HOME
				</Link>

				{isLoggedIn ? (
					<Link to="/MyRoutines" className="navText">
						MY ROUTINES
					</Link>
				) : null}

				<Link to="/routines" className="navText">
					ROUTINES
				</Link>

				<Link to="/activities" className="navText">
					ACTIVITIES
				</Link>

				{isLoggedIn ? (
					<Link to="/" className="navText" onClick={handleLogOut}>
						LOG OUT
					</Link>
				) : (
					<Link to="/login" className="navText">
						LOG IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
