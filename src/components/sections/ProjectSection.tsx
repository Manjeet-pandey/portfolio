import { Terminal } from 'lucide-react';
import { projects } from '../../data/projects';

export default function ProjectsSection() {
  return (
    <section className="terminal-window">
      <div className="terminal-header">
        <Terminal className="w-6 h-6" />
        <h2 className="text-xl font-bold">Projects</h2>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.name} className="border border-green-400 p-3 rounded">
            <h3 className="font-bold text-green-300">{project.name}</h3>
            <p className="text-green-300 mb-2">{project.description}</p>
            <p className="text-sm text-gray-400">
              <span className="font-bold">Technologies:</span> {project.technologies.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
