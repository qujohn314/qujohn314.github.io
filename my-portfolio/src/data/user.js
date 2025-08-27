const INFO = {
	main: {
		title: "Quincy",
		name: "Quincy Johnson",
		email: "quincyjohnson314@gmail.com",
	},

	socials: {
		github: "https://github.com/qujohn314",
		linkedin: "https://www.linkedin.com/in/quincy-johnson-a52534189/",
	},

	homepage: {
		title: "About Me",
		description:
			"Hi, I’m Quincy. I’m a computer scientist and robotics enthusiast who loves building intelligent systems — from autonomous drones to task-planning algorithms. My work sits at the intersection of machine learning, robotics, and planning, but at the core, I enjoy designing algorithms, prototyping, and solving tough problems with others. When I’m not working, you’ll usually find me tinkering with new tech, playing and making video games, hiking, or searching for the best food spots.",
	},

	experience: {
		title: "Experience",
		description:
			"Skydio \n MIT CSAIL, MIT Learning and Intelligent Systems Group \n Computer Science B.S. & M.Eng. @ MIT",
	},


	projects: [
		{
			title: "Learning Diffusion Models to Enable Efficient Sampling for Task and Motion Planning",
			description:
				"Developed a diffusion model–based approach to improve task and motion planning in robotics. Instead of relying on hand-designed or exhaustive parameter sampling, the model learned efficient sampling strategies directly from demonstrations. This enabled robots to solve complex, multi-step tasks more efficiently and robustly, especially in scenarios with challenging or multimodal parameter spaces.",
			logo: "RingStack.png",
			linkText: "View Project",
			link: "https://dspace.mit.edu/handle/1721.1/159141",
		},

		{
			title: "Precision Throwing Robot",
			description:
				"We designed and implemented a robotic system where iiwa manipulators grasp and throw objects to target locations. The project integrated inverse dynamics control, geometric grasping, trajectory planning, and task-level coordination to extend the robots’ operational reach through throwing. Demonstrated accurate performance in controlled environments and analyzed key factors affecting precision and robustness.",
			logo: "Capture.png",
			linkText: "View Project",
			link: "https://github.com/qujohn314/Throwing-Robots",
		},

		{
			title: "Mini-AV Challenges",
			description:
				"We developed a suite of robotics algorithms across multiple challenges, including PID-based wall following with safety controls, vision-based parking using SIFT and color segmentation, localization with Monte Carlo and SLAM, and trajectory planning with pure pursuit and search-based methods. The final multi-stage challenge combined perception, planning, and machine learning to enable city-scale autonomous navigation.",
			logo: "ConeDetect.jpg",
			linkText: "View Project",
			link: "https://rss2022-11.github.io/website/labs/",
		},

		{
			title: "Quadrotor Pole Balancer",
			description:
				"Explored and developed control strategies that enabled a quadrotor to balance an inverted pole. Implemented and compared approaches using a linear quadratic regulator (LQR) and model predictive control (MPC), focusing on stability and robustness under modeling errors.",
			logo: "quadropole.png",
			linkText: "View Project",
			link: "https://github.com/qujohn314/Quadropole",
		},
	],
};

export default INFO;
