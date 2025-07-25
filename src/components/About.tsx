import React from 'react';
import { Award, BookOpen, Code, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      description: "Python, R, SQL, JavaScript"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Supervised & Unsupervised Learning"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Statistical Modeling & Visualization"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Business Intelligence",
      description: "Dashboard Creation & Reporting"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Passionate Data Scientist & Analytics Professional
              </h3>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a dedicated data scientist with a passion for uncovering insights 
                hidden within complex datasets. With expertise in machine learning, 
                statistical analysis, and data visualization, I transform raw data 
                into actionable business intelligence.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                My journey in data science combines technical proficiency with 
                business acumen, allowing me to bridge the gap between complex 
                analytical concepts and practical business solutions. I believe 
                in the power of data-driven decision making to create meaningful impact.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not diving deep into datasets, you can find me exploring 
                the latest developments in AI and machine learning, contributing to 
                open-source projects, or sharing knowledge with the data science community.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                  Python Expert
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Data Visualization
                </span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                  Statistical Analysis
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-emerald-600 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;