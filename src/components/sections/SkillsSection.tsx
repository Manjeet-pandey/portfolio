import { Terminal } from 'lucide-react';
import { skills } from '../../data/skills';

export default function SkillsSection() {
  return (
    <section className="terminal-window">
      <div className="terminal-header">
        <Terminal className="w-6 h-6" />
        <h2 className="text-xl font-bold">Skills</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="border border-green-400 p-3 rounded">
            <h3 className="font-bold mb-2">{category}</h3>
            <p className="text-green-300">{items.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
