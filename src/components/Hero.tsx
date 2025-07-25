import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Data Science
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Portfolio
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-up delay-200">
            Transforming data into actionable insights through machine learning, 
            statistical analysis, and compelling visualizations
          </p>
          
          <p className="text-lg text-slate-400 mb-12 animate-fade-in-up delay-300">
            Welcome to my portfolio! I'm a passionate data scientist with expertise in 
            Python, R, machine learning, and data visualization. Explore my projects 
            and discover how I turn complex data into meaningful stories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in-up delay-500">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Projects
            </button>
            <a 
              href="https://github.com/Dimejitech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white/30 hover:border-emerald-400 text-white hover:text-emerald-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              GitHub Profile
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-12 animate-fade-in-up delay-700">
            <a 
              href="https://github.com/Dimejitech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="#contact" 
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>

          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;