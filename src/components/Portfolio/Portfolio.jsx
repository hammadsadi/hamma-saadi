import { useState } from "react";
import project1 from "../../assets/images/diagnostic.png";
import project2 from "../../assets/images/altproduc.png";
import project3 from "../../assets/images/TourismManagement.png";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    img: project1,
    title: "project#1",
    projectName: "Diagnostic Center Management",
    description:
      "This is robust Diagnostic Center Management System, a full-stack web application that effectively manages appointments, patient records, test results, and administrative tasks for a diagnostic center.",
    links: {
      liveLink: "https://diagnostic-management-312cf.web.app/",
      githubServerSide: "https://github.com/hammadsadi/sheba-diagnostic-api",
      githubClientSide: "https://github.com/hammadsadi/sheba-diagnostic-client",
    },
    features: {
      one: "Test / Service Booking System",
      two: "User can apply promo code for Discount",
      three:
        "User can make payment using stripe. When A User Book a Test / Service and many More",
    },
    usedTechnologies: [
      { name: "React Js" },
      { name: "Tailwind CSS" },
      { name: "Daisy UI" },
      { name: "TanStack Query" },
      { name: "Date Fns" },
      { name: "JsPdf" },
      { name: "React Hook Form" },
      { name: "Recharts" },
      { name: "Swiper" },
      { name: "Node js" },
      { name: "Express JS" },
      { name: "MongoDB" },
      { name: "Firebase" },
    ],
  },
  {
    img: project2,
    title: "project#2",
    projectName: "Alternative Product Information Website",
    description:
      "This is Alternative Product Information System Website. This Website users can Add/update/Delete his own Query about a product in The System.",
    links: {
      liveLink: "https://smart-shop-ca369.web.app/",
      githubServerSide: "https://github.com/hammadsadi/shop-smart-api",
      githubClientSide: "https://github.com/hammadsadi/shop-smart-client",
    },
    features: {
      one: "User Cannot add Query and Recommendation without Login",
      two: "Popular Queries by Users Recommendations",
      three: "Users can update/Delete his own Query",
    },
    usedTechnologies: [
      { name: "React Js" },
      { name: "Tailwind CSS" },
      { name: "Daisy UI" },
      { name: "Swiper" },
      { name: "Node js" },
      { name: "Express JS" },
      { name: "MongoDB" },
      { name: "Firebase" },
    ],
  },
  {
    img: project3,
    title: "project#3",
    projectName: "Tourism Management website",
    description:
      "This is Tourism Management website. This Website users can see Popular Spots Location Price and many More. Users can Add / update / Delete his own Spot. Spot Add Update and Delete is not Possible Without Login. Users can see all Popular Spots in Southeast Asia Zone.",
    links: {
      liveLink: "https://tourism-2d1ca.web.app/",
      githubServerSide: "https://github.com/hammadsadi/discover-dynasty-api",
      githubClientSide: "https://github.com/hammadsadi/discover-dynasty-client",
    },
    features: {
      one: "User can Add Spot Update own Spot and Delete own Spot",
      two: "User Can See Country Related Spot List",
      three: "User Can sort by Spot Pricing",
    },
    usedTechnologies: [
      { name: "React Js" },
      { name: "Tailwind CSS" },
      { name: "Daisy UI" },
      { name: "Swiper" },
      { name: "lottie-react" },
      { name: "Node js" },
      { name: "Express JS" },
      { name: "MongoDB" },
      { name: "Firebase" },
    ],
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
            <div className="mt-3 text-white">
              <h4 className="font-bold text-2xl">Project Details</h4>
              <h6 className="font-bold text-lg mt-1">
                {projects[currentProject].projectName}
              </h6>
              <p className="text-white my-3">
                {projects[currentProject].description}
              </p>
              <h6 className="font-bold text-lg mt-1">Project Features</h6>
              <ul className="text-sm list-inside list-disc">
                <li>{projects[currentProject].features.one}</li>
                <li>{projects[currentProject].features.two}</li>
                <li>{projects[currentProject].features.three}</li>
              </ul>
              <h6 className="font-bold text-lg mt-1">Usages Technologies</h6>
              <ul className="text-sm flex flex-wrap gap-1 mt-1">
                {projects[currentProject].usedTechnologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-900 px-2 py-1 cursor-pointer rounded-lg lowercase"
                  >
                    #{tech.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4 mt-2 text-white text-sm">
              {/* <a
                href={projects[currentProject].links.liveLink}
                className="px-4 py-2 bg-[#1baa80] rounded-lg hover:bg-[#1baa80] transition duration-300 text-gray-200"
              >
                View Site <MdArrowOutward />
              </a>
              <a
                href={projects[currentProject].links.github}
                className="px-4 py-2 bg-gray-800 text-2xl rounded-lg hover:bg-gray-600 transition duration-300 text-gray-200"
              >
                <AiFillGithub />
              </a> */}
              <a
                href={projects[currentProject].links.liveLink}
                className="flex items-center gap-2 bg-[#1baa80] py-1 px-2 rounded-sm"
              >
                {" "}
                <span>Live View</span> <MdArrowOutward />
              </a>
              <a
                href={projects[currentProject].links.githubClientSide}
                className="flex items-center gap-2 bg-[#1baa80] py-1 px-2 rounded-sm"
              >
                {" "}
                <span>Client Repo</span> <MdArrowOutward />
              </a>
              <a
                href={projects[currentProject].links.githubServerSide}
                className="flex items-center gap-2 bg-[#1baa80] py-1 px-2 rounded-sm"
              >
                {" "}
                <span>Server Repo</span> <MdArrowOutward />
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
