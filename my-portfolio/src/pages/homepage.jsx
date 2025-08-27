import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
				}
			} else {
				setLogoSize(newLogoSize);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{"Home | " + INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar/>
				<div className="content-wrapper">
					<div id="top" className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-top">
								<div className="homepage-first-area-left-side">
									<div className="title homepage-title">
										{INFO.homepage.title}
									</div>

									<div className="subtitle homepage-subtitle">
										{INFO.homepage.description}
									</div>


								</div>

								<div className="homepage-first-area-right-side">
									<div className="homepage-image-container">
										<div className="homepage-image-wrapper">
											<img
												src="homepage.jpg"
												alt="about"
												className="homepage-image"
											/>
										</div>
									</div>

									<div className="homepage-socials">
										<a
											href={INFO.socials.github}
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon
												icon={faGithub}
												className="homepage-social-icon"
											/>
										</a>
										<a
											href={`mailto:${INFO.main.email}`}
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon
												icon={faMailBulk}
												className="homepage-social-icon"
											/>
										</a>
										<a
											href={INFO.socials.linkedin}
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon
												icon={faLinkedinIn}
												className="homepage-social-icon"
											/>
										</a>
									</div>
								</div>
							</div>
							<div className="homepage-experience">
								<div className="title homepage-title">
											{INFO.experience.title}
										</div>

										<div className="subtitle homepage-subtitle">
											{INFO.experience.description}
								</div>
							</div>
						</div>
						
						

						<div id="projects" className="homepage-projects">
							<div className="homepage-experience">
								<div className="title homepage-title">
									{"Projects"}
								</div>
							</div>
							<AllProjects />
						</div>

					</div>
				</div>
				<div className="page-footer">
					<div className="footer-inner">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
