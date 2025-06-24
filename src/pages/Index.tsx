import { useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, Code2, Palette, Smartphone, ArrowDown, Shield, Bug, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Offensive Security Engineer/Full Stack Developer";

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const projects = [
    {
      title: "Subshot",
      description: "A reconnaissance tool built in Bash for Unix systems to perform subdomain enumeration on domains or lists of domains",
      tech: ["Bash", "Unix", "DNS", "Reconnaissance"],
      image: "/adminera-portfolio/lovable-uploads/422a25ce-1d73-4827-9c75-f06d2bb3cb8e.png",
      delay: "100ms"
    },
    {
      title: "XSSReplay",
      description: "An exploitation tool written in Python and Selenium that tests XSS payloads on parameters and shows live results for debugging",
      tech: ["Python", "Selenium", "XSS", "Web Security"],
      image: "/adminera-portfolio/lovable-uploads/059f5546-5ee4-4c06-9739-ca2c12320515.png",
      delay: "200ms"
    },
    {
      title: "NetSnake",
      description: "A Python-based netcat tool that demonstrates networking knowledge and serves as a pentesting utility when netcat is unavailable",
      tech: ["Python", "Networking", "Pentesting", "TCP/UDP"],
      image: "/adminera-portfolio/lovable-uploads/0e79e443-5193-42cd-bf8d-0d6064481383.png",
      delay: "300ms"
    }
  ];

  const skills = [
    { name: "Penetration Testing", level: 90, icon: Bug, color: "from-red-400 to-red-600" },
    { name: "Web Security", level: 85, icon: Shield, color: "from-orange-400 to-red-500" },
    { name: "Full Stack Dev", level: 85, icon: Code2, color: "from-blue-400 to-blue-600" },
    { name: "Python/JavaScript", level: 88, icon: Code2, color: "from-green-400 to-green-600" },
    { name: "Network Security", level: 80, icon: Shield, color: "from-purple-400 to-pink-500" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-white/80 hover:text-white transition-colors duration-300">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-white/80 hover:text-white transition-colors duration-300">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors duration-300">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>

        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift bg-300%">
              Adminera
            </span>
          </h1>
          <div className="text-2xl md:text-3xl text-white/80 mb-8 h-12">
            <span className="border-r-2 border-white/80 animate-blink pr-1">
              {typedText}
            </span>
          </div>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Securing digital landscapes through ethical hacking and penetration testing while crafting robust, secure web applications with modern technologies.
          </p>
          <div className="flex gap-6 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 animate-scale-in"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                I'm a passionate offensive security engineer and full-stack developer with over 5 years of experience in cybersecurity and web application development. 
                I specialize in penetration testing, vulnerability assessment, and building secure, scalable applications.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                When I'm not hunting for vulnerabilities or securing systems, you can find me contributing to open-source security tools, 
                researching new attack vectors, or sharing knowledge with the cybersecurity community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 animate-scale-in"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: project.delay }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-contain bg-white/10 transition-transform duration-300 group-hover:scale-105 p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 animate-scale-in"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mr-4`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <p className="text-white/60">{skill.level}%</p>
                    </div>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 200}ms` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 animate-scale-in"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-white/80 mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              I'm always interested in new cybersecurity challenges and exciting development projects. 
              Let's discuss how we can secure and build your digital infrastructure!
            </p>

            <div className="flex justify-center gap-6 mb-12">
              <a href="mailto:burntcharcoal@proton.me" className="group">
                <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-8 h-8 text-white/80 group-hover:text-white" />
                </div>
              </a>
              <a href="https://github.com/adminera" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                  <Github className="w-8 h-8 text-white/80 group-hover:text-white" />
                </div>
              </a>
              <a href="https://t.me/huntrio" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                  <Send className="w-8 h-8 text-white/80 group-hover:text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-white/60">
            © 2025 Adminera. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
