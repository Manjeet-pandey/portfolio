import React from 'react';
import { Terminal, Code, User, Briefcase, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-5 h-5" />
          <span className="text-sm">user@portfolio:~$</span>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Hero Section */}
          <section className="border border-green-500 p-6 rounded">
            <div className="flex items-center gap-4 mb-4">
              <User className="w-6 h-6" />
              <h1 className="text-2xl font-bold">Software Engineer</h1>
            </div>
            <p className="mb-4">Welcome to my terminal. I'm a software engineer specializing in Unix/Linux systems and modern web technologies.</p>
            <div className="flex gap-4">
              <a href="https://github.com" className="flex items-center gap-2 hover:text-green-400">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-2 hover:text-green-400">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </section>

          {/* Experience Section */}
          <section className="border border-green-500 p-6 rounded">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="w-6 h-6" />
              <h2 className="text-xl font-bold">Experience</h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Code className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Senior Software Engineer</h3>
                  <p className="text-green-400">Company Name • 2020 - Present</p>
                  <ul className="list-disc list-inside mt-2 text-green-300">
                    <li>Led development of microservices architecture</li>
                    <li>Implemented CI/CD pipelines using Jenkins</li>
                    <li>Optimized system performance by 40%</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <Code className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Software Developer</h3>
                  <p className="text-green-400">Previous Company • 2018 - 2020</p>
                  <ul className="list-disc list-inside mt-2 text-green-300">
                    <li>Developed RESTful APIs using Node.js</li>
                    <li>Managed Linux server infrastructure</li>
                    <li>Implemented automated testing strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="border border-green-500 p-6 rounded">
            <div className="flex items-center gap-4 mb-4">
              <Terminal className="w-6 h-6" />
              <h2 className="text-xl font-bold">Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border border-green-400 p-3 rounded">
                <h3 className="font-bold mb-2">Languages</h3>
                <p className="text-green-300">JavaScript, Python, Go, Bash</p>
              </div>
              <div className="border border-green-400 p-3 rounded">
                <h3 className="font-bold mb-2">Technologies</h3>
                <p className="text-green-300">React, Node.js, Docker, Kubernetes</p>
              </div>
              <div className="border border-green-400 p-3 rounded">
                <h3 className="font-bold mb-2">Tools</h3>
                <p className="text-green-300">Git, Linux, AWS, Jenkins</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border border-green-500 p-6 rounded">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="w-6 h-6" />
              <h2 className="text-xl font-bold">Contact</h2>
            </div>
            <p>Feel free to reach out at: <a href="mailto:your.email@example.com" className="underline hover:text-green-400">your.email@example.com</a></p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-green-400">
          <p>© 2023 • Built with React and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;