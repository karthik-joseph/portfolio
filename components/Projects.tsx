"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Career Compass",
      subtitle: "AI-Powered Career Roadmap Platform",
      description:
        "An intelligent platform that recommends personalized career roadmaps using AI. Features real-time learning suggestions, skill tracking, and industry-aligned guidance. Won Web It Up 5.0 hackathon.",
      stack: ["React", "Django", "LLMs", "PostgreSQL","vite",'REST APIs'],
      features: [
        "AI-powered career recommendations",
        "Interactive learning paths",
        "Skill assessment and tracking",
        "Real-time progress analytics",
      ],
      role: "Full Stack Developer",
      image: "/images/hackathon/winners_hackathon_5_price_collecting.jpeg",
      links: {
        github: "https://github.com/karthik-joseph/",
        demo: "#",
      },
      featured: true,
    },
    {
      title: "Impactly",
      subtitle: "Environmental Impact Analyzer",
      description:
        "A full-stack environmental analytics platform designed to help users analyze and reduce carbon footprint through data-driven insights, interactive dashboards, and personalized recommendations.",
      stack: [
        "Django",
        "React",
        "React Native",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
      ],
      role: "Full Stack Developer",
      image: "/images/qr/impactly-png.png",
      links: { github: "https://github.com/karthik-joseph/Impactly-app" },
    },
    {
      title: "E-learning Platform",
      subtitle: "Interactive Educational Application",
      description:
        "A cross-platform e-learning application with secure authentication, multimedia learning support, local persistence, and streamlined navigation for interactive student experiences.",
      stack: [
        "React Native",
        "Expo",
        "TypeScript",
        "JWT",
        "Local Storage",
      ],
      role: "Mobile App Developer",
      image:
        "/images/iv_workshop/ai_coding_5th_std_poster_showing_teaching.jpeg",
      links: { github: "https://github.com/karthik-joseph/E-learningApp" },
    },
    {
      "title": "PIBA (Pets Information & Buying Application)",
      "subtitle": "Specialized E-commerce and Verified Marketplace for Ethical Pet Adoption",
      "description": "The PIBA (Pets Information & Buying Application) project is an innovative online platform dedicated to facilitating safe, responsible, and ethical pet adoption and purchasing via a secure, centralized digital marketplace. It offers comprehensive pet data, advanced filtering options, personalized wishlists, and seamless shopping cart experiences. Built on a three-tier architecture, it ensures high transparency and trust through rigorous admin-moderated seller verification and top-tier security using JWT authentication and Role-Based Access Control (RBAC).",
      "stack": [
        "Django",
        "Django REST Framework (DRF)",
        "PostgreSQL",
        "Tailwind CSS",
        "Vanilla JavaScript",
        "JWT (JSON Web Tokens)"
      ],
      "role": "Backend Developer",
      "image": "/images/qr/piba.jpeg",
      "links": {
        "github": "https://github.com/karthik-joseph/PIBA",
      }
    },
    {
      "title": "GCIAP (Global Construction and Interior Assistance Platform)",
      "subtitle": "Comprehensive E-commerce and Verified Marketplace for Construction & Interior Design Services",
      "description": "The GCIAP project is a comprehensive online platform that creates a secure, centralized digital marketplace to bridge customers with verified construction and interior design professionals. It facilitates informed decision-making through detailed professional profiles, budget-tiered service pricing, product catalogs, and seamless transaction processing. Built on a three-tier architecture, it ensures high transparency and security through session-based authentication and a comprehensive Role-Based Access Control (RBAC) system across Admin, Professional, and Customer roles.",
      "stack": [
        "Django 5.x",
        "PostgreSQL",
        "Tailwind CSS",
        "Vanilla JavaScript",
        "WhiteNoise",
        "Role-Based Access Control (RBAC)"
      ],
      "role": "Backend Developer",
      "image": "/images/qr/gciap.jpeg",
      "links": {
        "github": "https://github.com/karthik-joseph/gciap",
        "live": "https://gciap.onrender.com/"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6 font-display"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded mb-12"
            variants={itemVariants}
          />

          {/* Featured Project */}
          {projects[0] && (
            <motion.div
              className="mb-16"
              variants={itemVariants}
            >
              <div className="glass rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image */}
                  <motion.div
                    className="relative h-80 md:h-full min-h-96"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={projects[0].image}
                      alt={projects[0].title}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      🏆 Hackathon Winner
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <motion.div
                      variants={containerVariants}
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants}>
                        <h3 className="text-3xl font-bold mb-2">
                          {projects[0].title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 text-lg font-semibold">
                          {projects[0].subtitle}
                        </p>
                      </motion.div>

                      <motion.p
                        className="text-slate-600 dark:text-slate-400 leading-relaxed"
                        variants={itemVariants}
                      >
                        {projects[0].description}
                      </motion.p>

                      <motion.div variants={itemVariants}>
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                          Tech Stack:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {projects[0].stack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                          Key Features:
                        </p>
                        <ul className="space-y-2">
                          {projects[0] && projects[0].features && projects[0].features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
                            >
                              <span className="w-2 h-2 bg-blue-500 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        className="flex gap-4 pt-4"
                        variants={itemVariants}
                      >
                        <a
                          href={projects[0].links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                        >
                          View Code
                        </a>
                        {projects[0].links.demo !== "#" && (
                          <a
                            href={projects[0].links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg font-medium transition-colors"
                          >
                            Live Demo
                          </a>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {projects.slice(1).map((project, idx) => (
              <motion.div
                key={idx}
                className="glass rounded-xl overflow-hidden group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    priority={project.title === "Impactly"}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    View Project →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
