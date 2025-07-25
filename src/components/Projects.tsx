import React from 'react';
import { ExternalLink, Github, BarChart3, Brain, TrendingUp, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Built a machine learning model to predict customer churn using ensemble methods. Achieved 94% accuracy using Random Forest and XGBoost algorithms with feature engineering.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      icon: <TrendingUp className="w-8 h-8" />,
      github: "https://github.com/Dimejitech",
      demo: "#",
      category: "Machine Learning"
    },
    {
      title: "Sales Analytics Dashboard",
      description: "Created an interactive dashboard for sales performance analysis with real-time data visualization. Implemented KPI tracking and predictive analytics for revenue forecasting.",
      technologies: ["Python", "Plotly", "Dash", "SQL"],
      icon: <BarChart3 className="w-8 h-8" />,
      github: "https://github.com/Dimejitech",
      demo: "#",
      category: "Data Visualization"
    },
    {
      title: "Natural Language Processing",
      description: "Developed a sentiment analysis system for social media data using NLP techniques. Processed over 100K tweets with 89% accuracy in sentiment classification.",
      technologies: ["Python", "NLTK", "TensorFlow", "Keras"],
      icon: <Brain className="w-8 h-8" />,
      github: "https://github.com/Dimejitech",
      demo: "#",
      category: "NLP"
    },
    {
      title: "Database Optimization",
      description: "Optimized database queries and implemented data warehousing solutions. Reduced query execution time by 60% and improved data pipeline efficiency.",
      technologies: ["SQL", "PostgreSQL", "Python", "ETL"],
      icon: <Database className="w-8 h-8" />,
      github: "https://github.com/Dimejitech",
      demo: "#",
      category: "Data Engineering"
    },
    {
      title: "Stock Price Prediction",
      description: "Built LSTM neural networks to predict stock prices using historical data and technical indicators. Implemented backtesting strategies with portfolio management.",
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy"],
      icon: <TrendingUp className="w-8 h-8" />,
      github: "https://github.com/Dimejitech",
      demo: "#",
      category: "Deep Learning"
    },
    {
      title: "COVID-19 Data Analysis",
      description: "Comprehensive analysis of COVID-19 global data with interactive visualizations. Created predictive models for case forecasting and trend analysis.",
      technologies: ["Python", "Matplotlib", "Seaborn", "Plotly"],
      icon: <BarChart3 className="w-8 h-8" />,
      github: "https://github.com/Dimejitech",
      demo: "#",
      category: "Data Analysis"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore my data science projects showcasing machine learning, 
              data analysis, and visualization expertise across various domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-emerald-600 group-hover:scale-110 transition-transform duration-200">
                      {project.icon}
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://github.com/Dimejitech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;