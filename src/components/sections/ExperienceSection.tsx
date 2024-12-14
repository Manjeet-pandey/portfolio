import {  Code, Terminal } from 'lucide-react';
import { experiences } from '../../data/experiences';

export default function ExperienceSection() {
  return (
    <section className="terminal-window">
      <div className="terminal-header">
        <Terminal className="w-6 h-6" />
        <h2 className="text-xl font-bold">Experience</h2>
      </div>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4">
            <Code className="w-5 h-5 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold">{exp.title}</h3>
              <p className="text-green-400">
                {exp.company} • {exp.period}
              </p>
              <ul className="list-disc list-inside mt-2 text-green-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

