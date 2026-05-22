"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="text-2xl font-bold font-display gradient-text"
            onClick={() => setMenuOpen(false)}
          >
            KP
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 pt-3 space-y-2">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
