  import { ExternalLink } from 'lucide-react';
export default function ProjectCard({ title, description, tech, link, isDark }) {

  
  return (
    <div className={`${isDark ? 'bg-neutral-800' : 'bg-neutral-100'} p-4 rounded-lg mb-4 border ${isDark ? 'border-neutral-700' : 'border-neutral-300'} hover:border-neutral-500 transition-colors`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{title}</h3>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300">
            <ExternalLink size={18} />
          </a>
        )}
      </div>
      <p className={`text-sm mb-3 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className={`text-xs px-2 py-1 ${isDark ? 'bg-neutral-900 text-neutral-300' : 'bg-neutral-200 text-neutral-700'} rounded`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}