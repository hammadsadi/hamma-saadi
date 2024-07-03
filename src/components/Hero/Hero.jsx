import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/images/hammad.jpg";
import { RiDownload2Line } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 place-items-center mb-8 md:mb-32 mt-14 container mx-auto ">
      <div className="text-gray-300 max-w-3xl">
        <p className="text-3xl md:text-6xl">
          HEY, I AM <br />
          <span className="text-[#1baa80]">HAMMAD SADI</span> <br />
          <TypeAnimation
            sequence={["Developer", 1000, "Web Designer", 1000]}
            speed={30}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>
        <div className="mt-6">
          {/* Base */}

          <a
            className="group inline-block rounded  bg-[#1BAA80] transition-transform hover:scale-105 duration-300 ease-in-out p-[2px] text-white focus:outline-none"
            href="#"
          >
            <span className="flex gap-3 items-center rounded-sm  px-8 py-3 text-lg font-medium group-hover:bg-transparent">
              Download CV{" "}
              <span>
                <RiDownload2Line slope={30} />
              </span>
            </span>
          </a>
        </div>
      </div>
      <img src={profileImage} className="w-[300px] md:w-[500px]" alt="" />
    </div>
  );
};

export default Hero;
