import { User, Github, Linkedin } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="terminal-window">
      <div className="terminal-header">
        <User className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Software Engineer</h1>
      </div>
       <p className="text-green-300">
          Unix enthusiast and software engineer passionate about designing scalable solutions,
          improving workflows, and optimizing system architectures. I thrive on combining modern
          technologies to deliver impactful projects.
        </p>
        <p className="text-green-300 pb-2">
          Proficient in <strong>Python, Vue.js, AWS, Docker, and CI/CD</strong>. Dedicated to building
          reliable systems with an emphasis on clean architecture and best practices.
        </p>      <div className="flex gap-4">
        <a href="https://github.com/Manjeet-pandey" target='_blank' className="flex items-center gap-2 hover:text-green-400">
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/manjeet-pandey-np" target='_blank' className="flex items-center gap-2 hover:text-green-400">
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  )
}
