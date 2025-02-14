"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Mail, Linkedin, Terminal, Code, Server, Cloud } from "lucide-react"
import Link from "next/link"

const skills = [
  { name: "Python", icon: Code, color: "text-blue-600" },
  { name: "Vue.js", icon: Code, color: "text-green-500" },
  { name: "AWS", icon: Cloud, color: "text-yellow-500" },
  { name: "Docker", icon: Server, color: "text-blue-400" },
  { name: "CI/CD", icon: Terminal, color: "text-purple-500" },
  { name: "Kubernetes", icon: Server, color: "text-blue-600" },
  { name: "Linux", icon: Terminal, color: "text-gray-700" },
  { name: "Git", icon: Code, color: "text-orange-500" },
]

const projects = [
  {
    title: "Nepali OCR",
    description: "Machine learning-powered handwriting recognition system for Nepali text processing.",
    tech: ["Python", "OpenCV", "TensorFlow"],
    link: "#",
  },
  {
    title: "Rani Mahal Render",
    description: "High-performance 3D rendering engine for architectural visualization.",
    tech: ["C++", "OpenGL", "CUDA"],
    link: "#",
  },
  {
    title: "Cloud Orchestrator",
    description: "Automated cloud resource management and optimization platform.",
    tech: ["Python", "AWS", "Terraform"],
    link: "#",
  },
  {
    title: "DevOps Dashboard",
    description: "Real-time monitoring and analytics for CI/CD pipelines and infrastructure.",
    tech: ["Vue.js", "Node.js", "Docker"],
    link: "#",
  },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const sections = ["home", "skills", "projects", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-100/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Terminal className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">manjeet.dev</span>
            </div>
            <div className="flex items-center space-x-4">
              {["Home", "Skills", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
                  } transition-all duration-300`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M0,0 Q50,50 100,0 V100 H0 Z"
                fill="#2563EB"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2 }}
              />
              <motion.path
                d="M0,100 Q50,50 100,100 V0 H0 Z"
                fill="#1D4ED8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </svg>
          </div>
          <div className="relative z-10 text-center">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Manjeet Pandey
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-slate-600 mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Software Engineer & System Architect
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="bg-slate-100 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                  aria-label={item.label}
                >
                  <item.icon className="h-6 w-6 text-slate-600" />
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`p-4 rounded-full bg-slate-100 mb-3 ${skill.color}`}>
                    <skill.icon className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-slate-100 rounded-lg shadow-md overflow-hidden"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link href={project.link} className="text-blue-600 hover:text-blue-700 font-medium">
                      Learn More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Build Something Amazing Together</h2>
            <p className="text-xl mb-12">
              I'm always open to new opportunities and exciting projects. Feel free to reach out!
            </p>
            <Link
              href="mailto:hello@example.com"
              className="inline-block bg-slate-100 text-blue-700 px-8 py-3 rounded-full text-lg font-medium hover:bg-slate-200 transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 Manjeet Pandey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

