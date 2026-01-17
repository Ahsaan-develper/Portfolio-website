"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from local storage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-blue-50 dark:border-slate-800" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center overflow-hidden transition-transform group-hover:rotate-12">
             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
             <span className="text-white font-bold text-lg leading-none">A</span>
          </div>
          <span className={`font-bold text-xl tracking-tight  transition-colors ${
            isScrolled ? "text-slate-900 dark:text-white" : "text-slate-800 "
          }`}>
            Ahsan<span className="text-blue-600">Ali</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {["About", "Skills", "Work", "Services"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          
        </nav>

        {/* Download CV Button */}
        <div className="hidden md:block">
          <a 
            href="/AhsanCV.docx" 
            download="Ahsan_Ali_CV.docx"
            className="relative inline-flex items-center px-8 py-2.5 overflow-hidden font-bold text-blue-600 transition duration-300 ease-out border-2 border-blue-600 rounded-full group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
              Download Now
            </span>
            <span className="absolute flex items-center left-0 justify-center w-full h-full text-blue-600 transition-all duration-300 transform group-hover:translate-x-full ease">
              Download CV
            </span>
            <span className="relative invisible">Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger & Mode Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <button onClick={toggleDarkMode} className="text-slate-600 dark:text-yellow-400">
             {darkMode ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
           </button>
           
           <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          >
            <span className={`block w-6 h-0.5 bg-slate-800 dark:bg-white rounded-full transform transition duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-slate-800 dark:bg-white rounded-full transition duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-slate-800 dark:bg-white rounded-full transform transition duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-blue-50 dark:border-slate-800 transition-all duration-300 origin-top ${
        isMenuOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
      }`}>
        <nav className="flex flex-col p-6 space-y-4">
          {["About", "Skills", "Work", "Services"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-bold text-slate-800 dark:text-white hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <a href="/AhsanCV.docx" download className="flex items-center justify-center w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20">
              Download CV
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}