import React from 'react';
import { Wrench, Database, Cloud, Layout, Github as Git, Terminal as TerminalIcon } from 'lucide-react';

interface ToolCategory {
  title: string;
  icon: React.ReactNode;
  tools: string[];
}

export function Tools() {
  const categories: ToolCategory[] = [
    {
        title: "Development Tools",
        icon: <Wrench className="w-6 h-6" />,
        tools: ["VS Code", "WebStorm", "Git", "Docker", "Postman"]
      },
      {
        title: "Databases",
        icon: <Database className="w-6 h-6" />,
        tools: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis (To Learn)"]
      },
      {
        title: "Cloud Services",
        icon: <Cloud className="w-6 h-6" />,
        tools: ["AWS", "Vercel", "Netlify"]
      },
      {
        title: "Frontend Tools",
        icon: <Layout className="w-6 h-6" />,
        tools: ["Figma", "Adobe XD", "Webpack", "Vite"]
      },
      {
        title: "Backend / Architecture",
        icon: <Git className="w-6 h-6" />,
        tools: ["Node.js", "Express.js", "Monorepo", "Git Flow", "CI/CD"]
      },
      {
        title: "Frameworks / Libraries",
        icon: <TerminalIcon className="w-6 h-6" />,
        tools: ["React.js", "React Native", "Express.js", "Prisma", "Mongoose"]
      }
    ]

  return (
    <section className="py-20 px-4" id="tools">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 cyberpunk-text text-center">
          Frameworks and Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="terminal-box p-6 hover:neon-border transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-purple-400">{category.icon}</div>
                <h3 className="text-xl font-bold text-purple-400">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.tools.map((tool, toolIndex) => (
                  <li 
                    key={toolIndex}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}