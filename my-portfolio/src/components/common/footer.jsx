import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<HashLink smooth to="/#top">Home</HashLink>
						</li>
						<li className="footer-nav-link-item">
							<HashLink smooth to="/#projects">Projects</HashLink>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2025 Quincy Johnson. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
