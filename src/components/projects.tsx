
import { Github, ExternalLink, Video } from "lucide-react"
import img from '../images/payment.png'
import recall from '../images/recallhub.png'
import authImg from '../images/auth.png'
import todo from '../images/Screenshot 2025-04-05 184703.png'
import chat from '../images/chat.jpg'
import VideoModel  from "../components/VideoModel"
import  { useState } from "react";
interface project {
    title: string,
    description: string,
    tech: string[],
    image: string,
    github: string,
    demo: string
    video?: string; // Optional property for video source

}



export function Projects() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState("");

    const openVideo = (videoSrc: string) => {
        setSelectedVideo(videoSrc);
        setIsVideoOpen(true);
    };
    const projects: project[] = [
        {
            title: "payment like web-app",
            description: "a core functionalities of the payement app,send and receive money",
            tech: ['html', 'css', 'react', 'node js'],
            image: img,
            github: "https://github.com/neerajk001/payment-app",
            demo: "https://payment-app-dacc.vercel.app/"

        },

        {
            title: "Recall hub ",
            description: "ypu can share the links of x post, images, instagram basically its your second memory",
            tech: ['html', 'css', 'react', 'node js', "typescript", "#fullstack-web-app"],
            image: recall,
            github: "https://github.com/neerajk001/brainly-fullstack",
            demo: "https://demo.com",
            video:"brainly.mp4"


        },
         {
            title: "real time chat app",
            description: "chat application using scoket.io, you can chat with your friends in real time",
            tech: [ 'react', 'node js', "typescript","socket.io", "#fullstack-web-app"],
            image: chat,
            github: "https://github.com/neerajk001/fullstack-chat_app",
            demo: "https://demo.com",
            video:"chat.mp4"


        },
        {
            title: "full authentication ",
            description: "full raw full stack authentication with forget password using mailtrap",
            tech: ['html', 'css', 'react', 'node js', "#fullstack", "mailtrap"],
            image: authImg,
            github: "https://github.com/neerajk001/full-authentication",
            demo: "https://full-authentication.onrender.com/"

        },
        {
            title: "todo-app ",
            description: "a simple todo app where your todo get stored into the local storage with functionality of create update and delete todo",
            tech: ['html', 'css', 'react', 'node js'],
            image: todo,
            github: "https://github.com/neerajk001/react-context-api",
            demo: "https://my-todo-kappa-fawn.vercel.app/"

        }

    ]

    return <section className="py-10 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold m-12 cyberpunk-text text-center ">
                Featured projects
            </h2>
            <div className="grid grid-1 md:grid-cols-2 gap-8 ">
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
                                    {project.video && (
                                        <button
                                            onClick={() => openVideo(project.video!)}
                                            className="p-2 bg-purple-500/80 rounded-full hover:bg-purple-400"
                                        >
                                            <Video className="w-6 h-6" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 justify-items-end">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex}
                                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full flex inline-flex items-center hover:bg-purple-500/30 transition-colors duration-300"
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
        <VideoModel
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        src={selectedVideo}
      />
    </section>
}

export default Projects