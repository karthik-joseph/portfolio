"use client";

import { motion } from "framer-motion";

const Contact = () => {
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
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-3xl mx-auto text-center">
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
            Let's Connect
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded mb-12 mx-auto"
            variants={itemVariants}
          />

          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto"
            variants={itemVariants}
          >
            I'm always interested in discussing full stack development, React Native,
            Django, IoT systems, and AI-powered applications. Feel free to reach out!
          </motion.p>

          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 mb-8"
            variants={itemVariants}
          >
            Open to: Full Stack • React Native • Django • IoT • AI/ML Opportunities
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
            variants={containerVariants}
          >
            <motion.a
              href="mailto:hello@karthik.dev"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email
            </motion.a>
            <motion.a
              href="https://github.com/karthik-joseph/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/karthik-p-karthik"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>

          <motion.div
            className="pt-8 border-t border-slate-200 dark:border-slate-800"
            variants={itemVariants}
          >
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © {new Date().getFullYear()} Karthik P. All rights reserved. Built with React, Next.js, and Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
