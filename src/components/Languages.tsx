import React from 'react';
import { Code, Terminal } from 'lucide-react';

interface Language {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export function Languages() {
  const languages: Language[] = [
    { name: "JavaScript", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "TypeScript", level: 85, icon: <Code className="w-5 h-5" /> },
    // { name: "Python", level: 80, icon: <Terminal className="w-5 h-5" /> },
    { name: "Java", level: 75, icon: <Code className="w-5 h-5" /> },
    { name: "My-sql", level: 70, icon: <Terminal className="w-5 h-5" /> },
    { name: "SQL", level: 85, icon: <Terminal className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 px-4 bg-black/30" id="languages">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 cyberpunk-text text-center">
          Language Proficiency
        </h2>
        <div className="grid  gap-6">
          {languages.map((lang, index) => (
            <div key={index} className="terminal-box p-6 hover:neon-border transition-all duration-300">
              <div className="flex items-center space-x-4 mb-2">
                <div className="text-purple-400">{lang.icon}</div>
                <h3 className="text-lg font-bold text-purple-400">{lang.name}</h3>
              </div>
              <div className="relative h-4 bg-black/50 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                  style={{ width: `${lang.level}%` }}
                />
              </div>
              <span className="text-sm text-gray-400 mt-1 block">
                Level {lang.level}/100
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}