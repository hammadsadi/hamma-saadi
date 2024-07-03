import { useState } from "react";
import project1 from "../../assets/images/project1.jpeg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";
import project4 from "../../assets/images/project4.jpg";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    img: project1,
    title: "project#1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed facere quam explicabo? Tempore magnam ab dolor vel vitae cumque id fugit eum doloribus beatae? Mollitia sequi dolore laudantium quidem.",
    links: {
      liveLink: "#",
      github: "#",
    },
  },
  {
    img: project2,
    title: "project#2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed facere quam explicabo? Tempore magnam ab dolor vel vitae cumque id fugit eum doloribus beatae? Mollitia sequi dolore laudantium quidem.",
    links: {
      liveLink: "#",
      github: "#",
    },
  },
  {
    img: project3,
    title: "project#3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed facere quam explicabo? Tempore magnam ab dolor vel vitae cumque id fugit eum doloribus beatae? Mollitia sequi dolore laudantium quidem.",
    links: {
      liveLink: "#",
      github: "#",
    },
  },
  {
    img: project4,
    title: "project#4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed facere quam explicabo? Tempore magnam ab dolor vel vitae cumque id fugit eum doloribus beatae? Mollitia sequi dolore laudantium quidem.",
    links: {
      liveLink: "#",
      github: "#",
    },
  },
];
const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      className="max-w-[800px] mx-auto relative p-6 md:my-20 my-10 flex md:flex-row flex-col"
      id="portfolio"
    >
      {/* <div className="p-6 w-full border-2 max-w-[600px]">
        <div className=" w-full h-80">
          <img
            src={projects[currentProject].img}
            alt=""
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        <p className="text-white my-4">
          {projects[currentProject].description}
        </p>
        <div className="flex space-x-4">
          <a
            href={projects[currentProject].links.liveLink}
            className="px-4 py-2 bg-[#1baa80] rounded-lg hover:bg-[#1baa80] transition duration-300 text-gray-200"
          >
            View Site
          </a>
          <a
            href={projects[currentProject].links.github}
            className="px-4 py-2 bg-gray-800 text-2xl rounded-lg hover:bg-gray-600 transition duration-300 text-gray-200"
          >
            <AiFillGithub />
          </a>
        </div>
      </div> */}
      {/* <div className="p-6 w-full border-2 max-w-[600px]">
        <div className=" w-full h-80">
          <img
            src={projects[currentProject].img}
            alt=""
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        <p className="text-white my-4">
          {projects[currentProject].description}
        </p>
        <div className="flex space-x-4">
          <a
            href={projects[currentProject].links.liveLink}
            className="px-4 py-2 bg-[#1baa80] rounded-lg hover:bg-[#1baa80] transition duration-300 text-gray-200"
          >
            View Site
          </a>
          <a
            href={projects[currentProject].links.github}
            className="px-4 py-2 bg-gray-800 text-2xl rounded-lg hover:bg-gray-600 transition duration-300 text-gray-200"
          >
            <AiFillGithub />
          </a>
        </div>
      </div> */}

      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#1BAA80] to-[#004D5C] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative p-3 w-full max-w-[600px] bg-white bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden">
          <div className="p-5 bg-gray-800 rounded-lg">
            <div className=" w-full h-80">
              <img
                src={projects[currentProject].img}
                alt=""
                className="w-full h-full object-cover rounded-lg mb-4"
              />
            </div>

            <p className="text-white my-4">
              {projects[currentProject].description}
            </p>
            <div className="flex space-x-4">
              <a
                href={projects[currentProject].links.liveLink}
                className="px-4 py-2 bg-[#1baa80] rounded-lg hover:bg-[#1baa80] transition duration-300 text-gray-200"
              >
                View Site
              </a>
              <a
                href={projects[currentProject].links.github}
                className="px-4 py-2 bg-gray-800 text-2xl rounded-lg hover:bg-gray-600 transition duration-300 text-gray-200"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
        {projects.map((item, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer text-gray-300  bg-[#1baa80] rounded-lg p-2 max-w-[100px]  hover:bg-[#0b684b] transition duration-300 ${
              currentProject === index ? "bg-[#0b684b]" : ""
            }`}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
