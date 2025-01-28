import React, { useState } from 'react';
import { Github, Mail, Linkedin, ExternalLink, Code2, Brain, User, Send } from 'lucide-react';
import pic from './assets/Tharunpic.jpg'
// Replace these with your actual information
const PROFILE_INFO = {
  name: "Allamadugu Tharun",
  title: "Passionate Sofware Developer",
  mail: "mailto:tharunallamadugu@gmail.com",
  github: 'https://github.com/Tharun928',
  linkedin : 'https://www.linkedin.com/in/tharun-reddy-829197298/',
  about: "Aspiring software developer eager to apply academic knowledge and practical skills gained from full-stack projects.Seeking an opportunity to learn and grow in a supportive team environment while delivering value through innovative solutions.",
  skills: [
    { name: "React", icon: <Code2 className="w-8 h-8" /> },
    { name: "Node.js", icon: <Code2 className="w-8 h-8" /> },
    { name: "TypeScript", icon: <Code2 className="w-8 h-8" /> },
    { name: "AWS", icon: <Code2 className="w-8 h-8" /> }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React and Node.js",
      github: "https://github.com/username/project",
      live: "https://project.com",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      github: "https://github.com/username/project2",
      live: "https://project2.com",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    }
  ]
};

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{PROFILE_INFO.name}</h1>
              <p className="text-xl mb-6">{PROFILE_INFO.title}</p>
              <div className="flex space-x-4">
                <a href="https://github.com/Tharun928" className="hover:text-blue-200"><Github className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/tharun-reddy-829197298/" className="hover:text-blue-200"><Linkedin className="w-6 h-6" /></a>
                <a href='mailto:tharunallamadugu@gmail.com' className="hover:text-blue-200"><Mail className="w-6 h-6" /></a>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src={pic} 
                alt="Profile" 
                className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            {PROFILE_INFO.about}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PROFILE_INFO.skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                {skill.icon}
                <span className="mt-4 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PROFILE_INFO.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center text-gray-600 hover:text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href={PROFILE_INFO.github} className="hover:text-blue-400"><Github className="w-6 h-6" /></a>
            <a href={PROFILE_INFO.linkedin} className="hover:text-blue-400"><Linkedin className="w-6 h-6" /></a>
            <a href={PROFILE_INFO.mail} className="hover:text-blue-400"><Mail className="w-6 h-6" /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} {PROFILE_INFO.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;