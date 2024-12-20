import { ContactIcon, Download, Facebook, FileUser, Github, Linkedin, PhoneCallIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Experience from "./components/homepage/experience";

export default function Home() {
  return (
    <div
      className="w-full h-auto text-white"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #12084d, #620c96), 
          radial-gradient(rgba(0, 255, 0, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 20px 20px", // Gradient spans full size, dots are spaced 20px apart
        backgroundBlendMode: "overlay", // Blend the gradients together
      }}
    >
      <div className="flex flex-col h-full p-6 md:p-12 lg:p-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <h1 className="text-2xl md:text-2xl lg:text-4xl text-green-300 font-bold uppercase mb-4 md:mb-0">
            Tanusree Portfolio
          </h1>
          <div className="flex space-x-6 text-sm md:text-lg lg:text-xl uppercase">
            <a href="#about" className="hover:text-green-300">
              About
            </a>
            <a href="#projects" className="hover:text-green-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-green-300">
              Contact
            </a>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12 mt-12">
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full transform transition-transform duration-300 ease-in-out border-4 border-white shadow-xl md:w-48 md:h-48 lg:w-64 lg:h-64 hover:scale-110"
          />


          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-pink-400">
              Hello, I'm Tanusree Sen
            </h2>
            <p className="text-lg md:text-lg lg:text-2xl text-gray-200 mt-4">
              I'm a <span className="text-green-500 text-md md:text-xl lg:text-3xl">Software Engineer </span>  skilled in modern frameworks,
              problem-solving, and building scalable applications.
            </p>

            <div className="flex justify-center lg:justify-start md:flex-row space-x-4 mt-6">
              <Link
                href="https://www.linkedin.com/in/tanusree-das-0b9b2b1b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-900 rounded-full hover:bg-pink-400 transition">
                  <Linkedin size={24} className="text-white" />
                </div>
              </Link>

              <Link
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-900 rounded-full hover:bg-pink-400 transition">
                  <Github size={24} className="text-gray-200 hover:text-green-300" />
                </div>
              </Link>

              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-900 rounded-full hover:bg-pink-400 transition">
                  <Facebook size={24} className=" text-gray-200 hover:text-green-300" />
                </div>
              </Link>
            </div>

          </div>



        </div>
        {/* resume and Contact button */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 mt-12">
          <Link href="/Tanusree_Sen_Resume.pdf" passHref>
            <div
              className="bg-gradient-to-r from-purple-600 to-indigo-900 text-white text-sm md:text-lg lg:text-xl font-semibold py-2 px-5 shadow-lg rounded-full flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105 hover:from-purple-700 hover:via-blue-600 hover:to-indigo-800 hover:shadow-lg"
            >
              <Download className="animate-bounce text-xl transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" /> {/* Animated Icon */}
              <span>Resume</span>
            </div>
          </Link>

          <Link href="/contact" passHref>
            <div
              className="border-2 rounded-full text-white text-sm md:text-lg lg:text-xl font-semibold py-2 px-5 shadow-lg flex items-center space-x-2 transform transition-transform duration-300 group hover:scale-105 hover:shadow-lg"

            >
              <PhoneIcon className="animate-pulse text-xl transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" /> {/* Animated Icon */}
              <span>Contact</span>
            </div>
          </Link>
        </div>


      </div>

      {/* experiences */}
      <Experience />
      
   


    </div>
  );
}
