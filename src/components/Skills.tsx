import React from 'react';
import { Code, Database, BarChart3, Brain, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 88 },
        { name: "SQL", level: 92 },
        { name: "JavaScript", level: 78 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: "Scikit-learn", level: 93 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 82 },
        { name: "Keras", level: 88 }
      ]
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: [
        { name: "Matplotlib", level: 90 },
        { name: "Seaborn", level: 92 },
        { name: "Plotly", level: 87 },
        { name: "Tableau", level: 83 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", level: 89 },
        { name: "MongoDB", level: 76 },
        { name: "Redis", level: 72 },
        { name: "BigQuery", level: 80 }
      ]
    },
    {
      title: "Cloud & Tools",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "AWS", level: 81 },
        { name: "Docker", level: 78 },
        { name: "Git", level: 94 },
        { name: "Jupyter", level: 96 }
      ]
    },
    {
      title: "Deep Learning",
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        { name: "Neural Networks", level: 86 },
        { name: "CNN", level: 84 },
        { name: "RNN/LSTM", level: 82 },
        { name: "NLP", level: 79 }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Machine Learning - Specialty",
    "Google Cloud Professional Data Engineer",
    "Microsoft Azure Data Scientist Associate",
    "Coursera Machine Learning Specialization"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise in data science, 
              machine learning, and analytics technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="text-emerald-600 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500"
                >
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;