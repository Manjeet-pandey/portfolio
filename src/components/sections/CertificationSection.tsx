import { Terminal } from 'lucide-react';
import { certifications } from '../../data/certificates';

export default function CertificationsSection() {
  return (
    <section className="terminal-window">
      <div className="terminal-header">
        <Terminal className="w-6 h-6" />
        <h2 className="text-xl font-bold">Certifications</h2>
      </div>
      <div className="space-y-4">
        {certifications.map((cert) => (
          <div key={cert.name} className="border border-green-400 p-3 rounded">
            <h3 className="font-bold text-green-300">{cert.name}</h3>
            <p className="text-green-300 mb-1">{cert.provider}</p>
            <p className="text-sm text-gray-400">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
