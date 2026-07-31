import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-transparent">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Musa</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Chavalala</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
      
    </nav>
  )
}

export default Navbar
