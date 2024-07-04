const EducationalBackground = () => {
  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#1baa80]">
              <h3 className="text-3xl font-semibold">
                Educational Qualification
              </h3>
              {/* <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                Vestibulum diam nunc
              </span> */}
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#1baa80]">
                <h3 className="text-xl font-semibold tracking-wide">
                  Dhonpur Asmot Ali Public High School
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  April 2016
                </time>
                <p className="mt-3">
                  I have Completed My SSC ( Secondary School Certificate ) in
                  2016{" "}
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#1baa80]">
                <h3 className="text-xl font-semibold tracking-wide">
                  Government Digendra Bharman College
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Jul 2018
                </time>
                <p className="mt-3">
                  In 2018, I successfully completed my Higher Secondary
                  Certificate (HSC) with a commendable achievement of B+. This
                  milestone not only reflects my dedication to academic
                  excellence but also underscores my commitment to achieving my
                  educational goals.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#1baa80]">
                <h3 className="text-xl font-semibold tracking-wide">
                  Sunamganj Government College
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Jan 2019
                </time>
                <p className="mt-3">
                  I am currently enrolled at Sunamganj Government College,
                  pursuing my Bachelor of Arts degree in Philosophy. I am in my
                  second year of Honours studies, where I am delving deeper into
                  the profound questions and principles that shape our
                  understanding of the world and human existence. Being a part
                  of the Philosophy department at Sunamganj Government College
                  has been an enriching experience, allowing me to explore
                  diverse philosophical perspectives and develop critical
                  thinking skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalBackground;
