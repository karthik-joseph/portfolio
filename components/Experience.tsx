"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      year: "JUNE 2025 - JUNE 2025",
      company: "Ribos Technologies",
      position: "Full Stack Developer L1",
      description: "Building IoT automation systems with Django backend and React Native mobile apps.",
      highlights: [
        "IoT automation systems",
        "Django backend development",
        "React Native mobile apps",
        "STT/TTS integrations",
        "Deployment workflows",
      ],
      icon: "🚀",
    },
    {
      year: "NOV 2024 - JULY 2025",
      company: "Steyp",
      position: "Master Tutor/Technical Mentor",
      description: "Technical mentoring and conducting sessions for students working on steyp platform.",
      highlights: [
        "Technical mentoring",
        "Student sessions",
        "Steyp platform projects",
        "Code reviews",
      ],
      icon: "🎓",
    },
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
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
            Experience
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded mb-12"
            variants={itemVariants}
          />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative"
                variants={itemVariants}
              >
                {/* Timeline line and dot */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 -ml-6" />
                <motion.div
                  className="absolute -left-10 top-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900"
                  whileHover={{ scale: 1.2 }}
                />

                {/* Content */}
                <motion.div
                  className="glass p-8 rounded-xl ml-8"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{exp.icon}</span>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {exp.year}
                        </p>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                        {exp.company}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
