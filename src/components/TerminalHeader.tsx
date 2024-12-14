import { Terminal } from 'lucide-react'

export default function TerminalHeader() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Terminal className="w-5 h-5" />
      <span className="text-sm">manjeet@portfolio:~$ ./view-portfolio</span>
    </div>
  )
}
