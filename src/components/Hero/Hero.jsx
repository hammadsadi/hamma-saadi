import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/images/hammad.jpg";
import { RiDownload2Line } from "react-icons/ri";
import resume from "../../assets/images/resume.pdf";
const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 place-items-center mb-8 md:mb-32 mt-14 container mx-auto px-2 md:px-0">
      <div className="text-gray-300 max-w-3xl w-full">
        <p className="text-3xl md:text-4xl">
          <span className="text-lg"> HEY, I AM</span> <br />
          <span className="text-[#1baa80] md:text-4xl text-2xl inline-block my-2">
            HAMMAD SADI
          </span>{" "}
          <br />
          <span className="capitalize">dedicated</span> &nbsp;
          <TypeAnimation
            sequence={[
              "Junior Web Developer",
              1000,
              "Web Designer",
              1000,
              "React JS Developer",
              1000,
            ]}
            speed={30}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>
        <p className="my-2 text-base">
          My objective is to innovate within web development, creating scalable
          solutions that improve user experience, streamline processes.
        </p>
        <div className="mt-6">
          {/* Base */}

          <a
            className="group inline-block rounded  bg-[#1BAA80] transition-transform hover:scale-105 duration-300 ease-in-out p-[2px] text-white focus:outline-none"
            href={resume}
            download="resume"
          >
            <span className="flex gap-3 items-center rounded-sm  px-8 py-3 text-lg font-medium group-hover:bg-transparent">
              Download CV
              <span>
                <RiDownload2Line slope={30} />
              </span>
            </span>
          </a>
        </div>
      </div>
      {/* <div
        className="w-[250px] md:w-[300px] border-4 border-[#1BAA80] rotate-12
"
      >
        <img src={profileImage} className="p-2 -rotate-12" alt="" />
      </div> */}
      <div
        className="blb-image border-4 border-[#1BAA80]
"
      >
        {/* <img src={profileImage} className="p-2 -rotate-12" alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
