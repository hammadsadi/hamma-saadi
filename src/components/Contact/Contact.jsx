import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="" id="contact">
        <div className="mx-auto max-w-screen-lg text-white rounded-lg px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 place-items-center gap-x-16 gap-y-8 md:grid-cols-5">
            <div className="md:col-span-2 flex flex-row flex-wrap gap-10 md:gap-0  md:flex-col  lg:py-12 w-full text-center md:space-y-8">
              <div className="flex items-center gap-10">
                <MdOutlineEmail className="text-5xl text-red-500" />{" "}
                <span>hammad.sadi@yahoo.com</span>
              </div>
              <div className="flex items-center gap-10">
                <FaGithub className="text-5xl text-gray-500" />{" "}
                <span>@hammadsadi</span>
              </div>
              <div className="flex items-center gap-10">
                <FaLinkedin className="text-5xl text-sky-600" />{" "}
                <span>@sayyidhammadsaadi</span>
              </div>
              <div className="flex items-center gap-10">
                <FaFacebook className="text-5xl text-blue-700" />{" "}
                <span>@sayyidhammadsaadi</span>
              </div>
            </div>

            <div className="rounded-lg bg-gray-800 p-8 shadow-lg md:col-span-3 lg:p-12 w-full">
              <form
                action="https://getform.io/f/pboxxpka"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    name="name"
                    className="w-full rounded-lg border border-gray-900 bg-gray-900 focus:outline-none focus:border-[#1baa80] p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      name="email"
                      className="w-full rounded-lg  border border-gray-900 bg-gray-900 focus:outline-none focus:border-[#1baa80] p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg  border border-gray-900 bg-gray-900 focus:outline-none focus:border-[#1baa80]  p-3 text-sm"
                      name="number"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg  border border-gray-900 bg-gray-900 focus:outline-none focus:border-[#1baa80]  p-3 text-sm"
                    placeholder="Message"
                    name="message"
                    rows="3"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-[#1baa80] px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
