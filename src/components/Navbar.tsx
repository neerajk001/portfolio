import { useState } from "react";
import { Menu } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="relative z-20 "> {/* 🔥 This is the fix */}
        {/* Desktop Navbar */}
        <div className="hidden hover:cursor-pointer  md:flex md:justify-end md:gap-12 md:px-8 md:py-3 text-white justify-center items-center text-center mx-auto">
          <h1 className="text-md text-white font-mono border px-2 py-1 rounded">About Me</h1>
          <h1 className="text-md text-white font-mono border px-2 py-1 rounded">Projects</h1>
          <h1 className="text-md text-white font-mono border px-2 py-1 rounded">Resume</h1>
        </div>
  
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end px-12 py-4">
          <Menu
            className="bg-transparent p-1 rounded cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className=" md:hidden absolute top-16 right-0 bg-transparent w-[150px] h-[200px] p-4 text-white  rounded-md">
            <h1 className="py-2 hover:text-blue-600 hover:cursor-pointer">About</h1>
            <h1 className="py-2 hover:text-blue-600 hover:cursor-pointer">projects</h1>
            <h1 className="py-2 hover:text-blue-600 hover:cursor-pointer">Resume</h1>
          </div>
        )}
      </div>
    );
  }

  export default Navbar