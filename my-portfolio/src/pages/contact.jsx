import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar/>
				<div className="content-wrapper">

					<div className="page-body">
						<div className="contact-container">
							<div className="title contact-title">
								Let’s Connect
							</div>

							<div className="subtitle contact-subtitle">
								Thank you for your interest in connecting with me. I’m open to collaboration, research partnerships, and general inquiries.
								The best way to reach me is by email at{" "}
								<a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>.
								<br /><br />
								You can also explore my work on{" "}
								<a href={INFO.socials.github} target="_blank" rel="noreferrer">GitHub</a>{" "}
								and connect with me on{" "}
								<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>.
								I read every message and do my best to reply promptly.
							</div>
						</div>

						<div className="socials-container">
							<div className="contact-socials">
								<Socials />
							</div>
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

export default Contact;
