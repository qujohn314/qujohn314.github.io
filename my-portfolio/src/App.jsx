const projects = [
  {
    name: "PoseNet Visualizer",
    description: "A tool to visualize OpenPose outputs from text descriptions.",
    link: "https://github.com/yourname/posenet-visualizer",
  },
  {
    name: "Quadrotor Balancer",
    description: "A simulated quadrotor that balances an inverted pendulum.",
    link: "https://github.com/yourname/quadrotor-balancer",
  },
];


import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Helmet } from "react-helmet";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors font-sans">
      <Helmet>
        <title>Quincy Johnson | Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Quincy Johnson – AI, robotics, and modern web development projects."
        />
      </Helmet>

      {/* NAVBAR */}
      <header className="w-full h-[25vh] bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm flex items-start justify-end px-10 pt-6">
        <nav className="flex space-x-12 text-sm font-medium items-center">
          <a href="#projects" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
          <a href="#" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition">Resume</a>
          <a href="#" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </header>





      {/* Hero */}
      <section className="text-center px-6 py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <h2 className="text-5xl font-extrabold mb-6">Hi, I'm Quincy 👋</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          I build intelligent systems that merge code with the physical world — from robotics and
          simulation to interactive AI and sleek web apps.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow transition"
        >
          View My Work
        </a>
      </section>

      <main className="max-w-4xl mx-auto px-6 space-y-16 pb-20">
        {/* Skills */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 text-center">Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            <li className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">Python</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">Java</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">TypeScript</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">React</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">ROS</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">PyTorch</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">C++</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">Git</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">OpenCV</li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects">
          <h3 className="text-3xl font-bold mb-6 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-lg p-5 shadow-sm hover:shadow-md transition dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {project.name}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 text-center">Contact</h3>
          <div className="flex gap-4 justify-center">
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourname"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
