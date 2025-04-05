import React from 'react';
import { Code2, Gamepad2, Brain, Rocket } from 'lucide-react';

export function About() {
  return (
    <section id="about"  className= "py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 cyberpunk-text text-center">
          Player Stats
        </h2>
        <div className="terminal-box p-8">
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <Code2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">The Developer</h3>
                <p className="text-gray-300 leading-relaxed">
                A passionate full-stack developer and 3rd-year Computer Science student with hands-on experience through internships and freelance projects. I specialize in building responsive and user-focused applications using React, Node.js, and the MERN stack. From frontend design to backend logic, I enjoy turning ideas into real-world solutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <Gamepad2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Tech + creativity</h3>
                <p className="text-gray-300 leading-relaxed">
                To build meaningful digital experiences that solve real-world problems. I aim to grow as a developer by contributing to impactful projects while constantly improving my technical and creative skillset.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <Brain className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Problem Solver</h3>
                <p className="text-gray-300 leading-relaxed">
                  Approaching each challenge like a game level, I break down complex problems into 
                  manageable solutions. Always learning and leveling up my skills.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <Rocket className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  Dedicated to creating software that makes a difference. Whether it's a web app or 
                  game feature, I'm committed to delivering high-quality, performant code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}