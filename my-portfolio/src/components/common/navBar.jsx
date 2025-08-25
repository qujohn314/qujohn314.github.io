import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import Logo from "./logo.jsx";
import "./styles/navBar.css";

const NavBar = () => {

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">

						<div className="nav-name">
							<div className="logo">
								<Logo/>
							</div>
						</div>

						<ul className="nav-list">
							<li className="nav-item">
								<HashLink smooth to="/#top">Home</HashLink>
							</li>
							<li className="nav-item">
								<HashLink smooth to="/#projects">Projects</HashLink>
							</li>
							<li className="nav-item">
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
