import React from 'react';
import { Instagram, Send, MessageCircle, Youtube, Github } from 'lucide-react';
import { socialLinks } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              Kodix<span className="text-violet-400">Academy</span>
            </h3>
            <p className="text-zinc-400 text-sm max-w-md">
              Master modern web development with our comprehensive courses. 
              From HTML basics to advanced React patterns, we've got you covered.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-zinc-400 hover:text-violet-400 transition-colors">Home</a></li>
              <li><a href="/#courses" className="text-zinc-400 hover:text-violet-400 transition-colors">Courses</a></li>
              <li><a href="/dashboard" className="text-zinc-400 hover:text-violet-400 transition-colors">Dashboard</a></li>
              <li><a href="/admin" className="text-zinc-400 hover:text-violet-400 transition-colors">Admin</a></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-pink-400 transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a 
                href={socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
              <a 
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-green-400 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a 
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-red-400 transition-colors text-sm"
              >
                <Youtube className="w-4 h-4" />
                YouTube
              </a>
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {currentYear} Kodix Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
