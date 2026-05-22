"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Journey = () => {
  const journeyItems = [
    {
      category: "Hackathon Winner",
      title: "Web It Up 5.0",
      description: "Built an AI-powered career roadmap recommendation platform using React, Django, and LLMs.",
      image: "/images/hackathon/3rd_hackathon_full.jpeg",
      badge: "🏆 Winner",
    },
    {
      category: "Technical Sessions",
      title: "IV Workshops & Mentoring",
      description: "Conducted coding workshops and technical mentoring sessions for school, UG, and PG students focused on industry readiness.",
      image: "/images/iv_workshop/iv_kadakavur_standing_class.jpeg",
      badge: "👨‍🏫 Mentor",
    },
    {
      category: "AI Events",
      title: "AI Summit & Tech Events",
      description: "Participated in AI summits, workshops, and community events to stay updated on emerging technologies.",
      image: "/images/ai_submit/ai_summit_single_photo_karthik.jpeg",
      badge: "🤖 Participant",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="journey"
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
            Journey in Tech
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded mb-12"
            variants={itemVariants}
          />

          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl"
            variants={itemVariants}
          >
            Beyond code, I'm committed to community, learning, and sharing knowledge. Here's my journey through hackathons, mentoring, and emerging technologies.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {journeyItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="group cursor-pointer"
                variants={itemVariants}
              >
                <motion.div
                  className="relative h-64 rounded-xl overflow-hidden mb-6 glass"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">
                      {item.badge}
                    </span>
                  </div>
                </motion.div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {item.category}
                </p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Follow my journey and connect with me:
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://github.com/karthik-joseph/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 glass rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/karthik-p-karthik"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 glass rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/karthik.techq"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 glass rounded-lg font-medium hover:bg-pink-50 dark:hover:bg-pink-950 transition-colors"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
