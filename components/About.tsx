"use client";

import { motion } from "framer-motion";

const About = () => {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-3xl mx-auto">
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
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded mb-8"
            variants={itemVariants}
          />

          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6"
            variants={itemVariants}
          >
            I enjoy building products that solve practical problems, from mobile
            applications to backend systems and IoT-powered platforms. Over the
            last year, I've worked across startup environments, contributed to
            production systems, mentored students, and explored AI-powered
            technologies.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
            variants={containerVariants}
          >
            {[
              { label: "Languages", value: "Python, JavaScript, TypeScript" },
              { label: "Frontend", value: "React, React Native, Next.js" },
              { label: "Backend", value: "Django, REST APIs" },
              { label: "Others", value: "IoT, AI/ML, STT/TTS" },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                className="glass p-6 rounded-lg"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="text-blue-600 dark:text-cyan-400 font-semibold mb-2">
                  {skill.label}
                </div>
                <div className="text-slate-700 dark:text-slate-300">
                  {skill.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
