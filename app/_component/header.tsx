"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


 



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY> 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll" , handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-20 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "py-3 bg-slate-900 backdrop-blur-md  " 
          : "py-6 bg-transparent shadow-sm "
      }`}
    >
      <div className="max-w-7xl  px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center overflow-hidden transition-transform group-hover:rotate-12">
             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
             <span className="text-white font-bold text-lg ">A  </span>
          </div>
          <span className={`font-bold text-xl tracking-tight  transition-colors ${
            isScrolled ? "text-white" : "text-slate-900 "
          }`}>
            Ahsan<span className="text-blue-600">Ali</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {["About","Education", "Skills", "Work", "Services"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative group text-sm font-bold uppercase tracking-widest  ${isScrolled ? "text-slate-200": "dark:text-slate-600"} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              {item}
           
            </Link>
          ))}
          
      
        </nav>

        {/* Download CV Button */}
        <div className="hidden md:block">
          <a 
            href="/AhsanCV.pdf" 
            download="Ahsan_Ali_CV.pdf"
            className={`relative inline-flex items-center px-8 py-2.5 overflow-hidden font-bold ${isScrolled ? "text-white" : "text-slate-900"} transition hover:text-white hover:outline-none duration-300 ease-out border-2 rounded-full group`}
          > 
            <span className={`absolute inset-0 flex items-center justify-center w-full h-full  duration-300 -translate-x-full ${isScrolled ? "bg-transparent"  : "bg-blue-600"}  group-hover:translate-x-0  ease`}>
              Download Now
            </span>
            <span className={`absolute flex items-center left-0 justify-center w-full h-full  ${isScrolled ? "text-white" : "text-slate-900"} transition-all duration-300 transform group-hover:translate-x-full ease`}>
              Download CV
            </span>
            <span className="relative invisible">Download CV</span>
          </a>
        </div>

       
        {/* Mobile Hamburger ONLY */}
        <div className="flex items-center gap-4 md:hidden">
           <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          >
            {/* Top Bar - Now Black */}
            <span className={`block w-6 h-0.5 ${isScrolled  ? "bg-white" : "bg-black"}  rounded-full transform transition duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`} />
            
            {/* Middle Bar - Now Black */}
            <span className={`block w-6 h-0.5 ${isScrolled  ? "bg-white" : "bg-black"} rounded-full transition duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`} />
            
            {/* Bottom Bar - Now Black */}
            <span className={`block w-6 h-0.5 ${isScrolled  ? "bg-white" : "bg-black"} rounded-full transform transition duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-slate-400 dark:bg-slate-900 border-b border-blue-50 dark:border-slate-800 transition-all duration-300 origin-top ${
        isMenuOpen ? "scale-y-100   opacity-100 visible" : "scale-y-0 opacity-0 invisible"
      }`}>
        <nav className="flex flex-col p-6 space-y-4">
          {["About","Education", "Skills", "Work", "Services"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-bold text-slate-800 dark:text-white hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="pt-4 border-t hover:scale-102  border-slate-100 dark:border-slate-800 transition-all ease-in">
            <a href="/AhsanCV.pdf"  download="Ahsan_Ali_CV.pdf" className="flex items-center justify-center w-full py-4 bg-blue-600 hover:bg-blue-700  text-white rounded-xl font-bold shadow-lg shadow-blue-600/20">
              Download CV
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}