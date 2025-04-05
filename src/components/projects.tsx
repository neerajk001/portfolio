
import { Github, ExternalLink } from "lucide-react"



interface project {
    title: string,
    description: string,
    tech: string[],
    image: string,
    github: string,
    demo: string

}



export function Projects() {
    const projects: project[] = [
        {
            title: "payment like web-app",
            description: "a core functionalities of the payement app,send and receive money",
            tech: ['html', 'css', 'react', 'node js'],
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
            github: "https://github.com",
            demo: "https://demo.com"

        },

        {
            title: "Recall hub ",
            description: "a core functionalities of the payement app,send and receive money",
            tech: ['html', 'css', 'react', 'node js'],
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
            github: "https://github.com",
            demo: "https://demo.com"

        },
        {
            title: "Recall hub ",
            description: "a core functionalities of the payement app,send and receive money",
            tech: ['html', 'css', 'react', 'node js'],
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
            github: "https://github.com",
            demo: "https://demo.com"

        },
        {
            title: "Recall hub ",
            description: "a core functionalities of the payement app,send and receive money",
            tech: ['html', 'css', 'react', 'node js'],
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
            github: "https://github.com",
            demo: "https://demo.com"

        }

    ]

    return <section  className="py-10 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold m-12 cyberpunk-text text-center ">
                Featured projects
            </h2>
            <div className="grid grid-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="terminal-box group hover:neon-border transition-all duration-300">
                        <div className="relative overflow-hidden rounded-t-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="flex space-x-4">
                                    <a href={project.github} className="p-2 bg-purple-500/80 rounded-full hover:bg-purple-400">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href={project.demo} className="p-2 bg-purple-500/80 rounded-full hover:bg-purple-400">
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex}
                                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
}

export default Projects