import { Terminal } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="terminal-window">
      <div className="terminal-header">
        <Terminal className="w-6 h-6" />
        <h2 className="text-xl font-bold">Contact</h2>
      </div>
      <p>
        Feel free to reach out at:{' '}
        <a href="mailto:manjeet.pandey1@gmail.com" className="underline hover:text-green-400">
          manjeet.pandey1@gmail.com
        </a>
      </p>
    </section>
  )
}
