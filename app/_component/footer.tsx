"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-blue-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Branding & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-bold text-xl text-slate-900">Ahsan Ali</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Full-stack developer specializing in Next.js, FastAPI, and AI-driven solutions. Building the future, one line of code at a time.
            </p>
           
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="#work" className="hover:text-blue-600 transition-colors">Projects</Link></li>
              <li><Link href="#about" className="hover:text-blue-600 transition-colors">About Me</Link></li>
              <li><Link href="#skills" className="hover:text-blue-600 transition-colors">Stack</Link></li>
            </ul>
          </div>

          {/* Column 3: Tech Stack Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900">Expertise</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Next.js & React
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                FastAPI & Python
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                OpenAI SDK
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                MongoAtlas
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900">Stay in touch</h4>
            <p className="text-sm text-slate-500">Get the latest updates on my AI projects.</p>
              <div >
                Contact me  <span className="text-blue-600">+92 3049177511</span>
                
              </div>
                <div >
                Email  <span className="text-blue-600">aliahsan80152@gmail.com</span>
                
              </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
            © {currentYear} Ahsan Ali. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400 uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}