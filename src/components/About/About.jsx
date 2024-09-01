import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";

import aboutComputer from "../../assets/images/about_computer.jpg";
const About = () => {
  return (
    <div
      className="container mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      <div className=" md:hidden text-4xl bg-gray-800 p-6 backdrop-blur-lg rounded-lg flex gap-4 flex-wrap justify-center">
        <SiMongodb className="text-[#1BAA80]" />
        <SiExpress className="text-white" />
        <FaReact className="text-blue-500" />
        <FaNodeJs className="text-green-500" />
        <SiNextdotjs className="text-white" />
        <RiTailwindCssFill className="text-cyan-500" />
        <BsBootstrapFill className="text-purple-600" />
        <IoLogoFirebase className="text-orange-600" />
        <FaGitAlt className="text-orange-600" />
      </div>
      {/* About Left Image */}
      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#1BAA80] to-[#004D5C] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative p-4 w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={aboutComputer}
            alt=""
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>
      {/* About Right Skills */}
      <div className="p-6">
        <h2 className="text-white font-bold mb-4">Skills</h2>
        <p className="text-white mb-4">
          I am a proficient MERN stack developer with a solid foundation in
          MongoDB, Express.js, React, and Node.js. With hands-on experience in
          building Diagnostic center Management application, Social media
          Application and Blog Application , I excel in Next JS and database
          management, etc. My objective is to innovate within web development,
          creating scalable solutions that improve user experience, streamline
          processes.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <SiMongodb className="text-[#1BAA80]" />
          <SiExpress className="text-white" />
          <FaReact className="text-blue-500" />
          <FaNodeJs className="text-green-500" />
          <SiNextdotjs className="text-white" />
          <RiTailwindCssFill className="text-cyan-500" />
          <BsBootstrapFill className="text-purple-600" />
          <IoLogoFirebase className="text-orange-600" />
          <FaGitAlt className="text-red-600" />
        </div>
      </div>

      {/*  */}
      <div className="p-6">
        <h2 className="text-white font-bold mb-4">Frontend Experience</h2>
        <p className="text-white mb-4">
          Experienced Frontend Developer with expertise in React.js, Tailwind
          CSS, Bootstrap, and Firebase. Skilled in building responsive and
          dynamic user interfaces, utilizing modern CSS frameworks for
          streamlined design, and integrating Firebase for real-time data
          handling and authentication
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <FaReact className="text-blue-500" />
          <RiTailwindCssFill className="text-cyan-500" />
          <BsBootstrapFill className="text-purple-600" />
          <IoLogoFirebase className="text-orange-600" />
          <FaGitAlt className="text-red-600" />
        </div>
      </div>

      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#1BAA80] to-[#004D5C] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative p-4 w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={aboutComputer}
            alt=""
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#1BAA80] to-[#004D5C] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative p-4 w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={aboutComputer}
            alt=""
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-white font-bold mb-4">FullStack Experience</h2>
        <p className="text-white mb-4">
          Full-Stack Developer proficient in React.js, Node.js, Express.js,
          MongoDB, and Next.js. Adept at building scalable web applications,
          crafting seamless frontend experiences, and implementing robust
          backend solutions with efficient data management using the MERN stack
          and Next.js for server-side rendering
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <SiMongodb className="text-[#1BAA80]" />
          <SiExpress className="text-white" />
          <FaReact className="text-blue-500" />
          <FaNodeJs className="text-green-500" />
          <SiNextdotjs className="text-white" />
          <FaGitAlt className="text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default About;
