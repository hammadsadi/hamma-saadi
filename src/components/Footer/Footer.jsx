import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto py-4">
        <div className="flex items-center gap-3 flex-col">
          <p className="text-sm">
            {" "}
            &copy; 2024 All Rights Reserved{" "}
            <span className="text-[#1baa80]"> Hammad Sadi</span>
          </p>
          <div className="flex gap-5 md:gap-6">
            <a href="" className="cursor-pointer">
              <FaGithub className="text-xl text-gray-500" />
            </a>

            <a href="" className="cursor-pointer">
              <FaLinkedin className="text-xl text-sky-600" />
            </a>
            <a href="" className="cursor-pointer">
              <FaFacebook className="text-xl text-blue-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
