import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo.jpg";
import {Link} from 'react-scroll'

function Navbar() {
    const[openMenu, setOpenMenu] = useState(false);

    const handleCLick = () => setOpenMenu(!openMenu)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#142b33] text-[#eff3f3]">
      <div >
        <img  src={Logo} alt="LogoImage" style={{ width: "60px" }} />
      </div>

      {/* menu */}
        <ul className="hidden md:flex justify-end">
          <li className="pb-2 duration-300 border-b-2 border-transparent hover:border-rose-400">
          <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
          </li>

          <li className="pb-2 duration-300 border-b-2 border-transparent hover:border-rose-400">
          <Link  to="about"  smooth={true}  duration={500} >
          About
        </Link>
          </li>

          <li className="pb-2 duration-300 border-b-2 border-transparent hover:border-rose-400">
          <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
          </li>

          <li className="pb-2 duration-300 border-b-2 border-transparent hover:border-rose-400">
          <Link  to="work"  smooth={true}  duration={500} >
          Work
        </Link>
          </li>

          <li className="pb-2 duration-300 border-b-2 border-transparent hover:border-rose-400">
          <Link  to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleCLick} className="md:hidden z-10 cursor-pointer">
        {!openMenu ? <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <ul className={!openMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#142b33] flex flex-col items-center justify-center'}>
        <li className="py-6 text-4xl">
        <Link onClick={handleCLick} to="home"  smooth={true}  duration={500} >
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleCLick} to="about"  smooth={true}  duration={500} >
          About
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleCLick} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleCLick} to="work"  smooth={true}  duration={500} >
          Work
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleCLick} to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-14px] duration-300 lg:mb-[-14px]">
                <a className="flex justify-between items-center w-full text-[#eff3f3] bg-blue-600 p-2 " href="https://www.linkedin.com/in/nayana-n-m-b3b864229/" target="_blank" rel="noopener noreferrer">
                    LinkedIn <FaLinkedin className="mr-[-10px] lg:mr-0 duration-300 px-1" size={30}/>
                </a>
            </li>
            <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-14px] duration-300 lg:mb-[-14px]">
                <a className="flex justify-between items-center w-full text-[#eff3f3] bg-[#333333] p-2 " href="https://github.com/Nayana62" target="_blank" rel="noopener noreferrer">
                    Github <FaGithub className="mr-[-10px] lg:mr-0 duration-300 px-1" size={30}/>
                </a>
            </li>
            <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-14px] duration-300 lg:mb-[-14px]">
                <a className="flex justify-between items-center w-full text-[#eff3f3] bg-[#6fc2b0] p-2 " href="mailto:nmnayana62@gmail.com" >
                    Email <HiOutlineMail className="mr-[-10px] lg:mr-0 duration-300 px-1" size={30}/>
                </a>
            </li>
            <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-14px] duration-300 lg:mb-[-14px]">
                <a className="flex justify-between items-center w-full text-[#eff3f3] bg-[#565f69] p-2 " href="https://drive.google.com/file/d/1DEpBpsiAs3Zkz3GGZr0CmzMiPuxEK3Jy/view?usp=sharing" rel="noreferrer" target="_blank" >
                    Resume <BsFillPersonLinesFill className="mr-[-10px] lg:mr-0 duration-300 px-1" size={30}/>
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
