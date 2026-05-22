"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text Content */}
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-6 font-display"
            variants={itemVariants}
          >
            Karthik P
          </motion.h1>
          <motion.h2
            className="text-2xl sm:text-3xl gradient-text mb-6 font-display"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg"
            variants={itemVariants}
          >
            Building web and mobile applications with Django, React, and React
            Native, with hands-on experience in IoT and AI-powered systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Link
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              View Projects
            </Link>
            <a
              href="https://github.com/karthik-joseph/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg font-medium transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/karthik-p-karthik"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg font-medium transition-colors"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative"
          variants={itemVariants}
        >
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-3xl opacity-20 animate-float" />
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden glass"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/me/karthik_professional_siting.jpeg"
                alt="Karthik P"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
