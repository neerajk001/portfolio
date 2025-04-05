
import {Terminal,Linkedin,Github,Mail} from 'lucide-react'
import Navbar from './Navbar'
import profileImg from '../images/portfolio-img.png'

function Hero() {
    console.log("navbar rendered")
  return (<>
  <div className=' relative min-h-screen'>
  <Navbar/>
 
    <div className='  flex justify-center items-center'>
        
         <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black/50 z-0" />
         
            <div className='relative z-10 text-center space-y-4 max-w-4xl mx-auto px-4'>
                <div className='profile-container w-40 h-40 mb-8 rounded-full cursor-pointer overflow-hidden items-center text-center mx-auto'>
                <img
            src={profileImg}
            alt="Profile"
            className="profile-photo w-full h-full object-cover"
          />
                </div>
                <Terminal className="w-16 h-16 text-purple-400 mx-auto animate-pulse" />
        <h1 className="text-2xl md:text-6xl font-bold cyberpunk-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          "Hi ,I'am neeraj kushwaha"
        </h1>
        <p className='font-mono font-semibold'>"I love building scalable web apps and solving real-world problems with code."</p>
        <p className="text-xl md:text-2xl text-gray-300 opacity-0 slide-up" style={{ animationDelay: '0.3s' }}>
          Full Stack web Developer
        </p>
        {/* <p className="text-xl  mt-0 text-gray-600 opacity-0 slide-up -py-12" style={{ animationDelay: '0.3s' }} >
          web-apps  | app-dev  | web_design 
        </p> */}
        <div className="flex items-center justify-center space-x-6 opacity-0 slide-up" style={{ animationDelay: '0.9s' }}>
          <a href="https://github.com" className="hover:text-purple-400 transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=workwithneeraj.01@gmail.com" className="hover:text-purple-400 transition-colors">
            <Mail className="w-8 h-8" />
          </a>
        </div>
            </div>
        

    </div>
    </div>
    </>
  )
}

export default Hero