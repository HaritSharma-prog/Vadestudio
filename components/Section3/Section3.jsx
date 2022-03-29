import React from "react";
import Inputbutton from "../Butttons/Inputbutton";
import Section3img from "../SectionImage/Section3img";

export default function Section3() {
  return (
    <>
      <div className="flex flex-col items-center gap-32 overflow-hidden">
        <div className="font-poppins -mt-5">
          <div className="bg-white flex justify-evenly flex-col gap-24 items-center lg:flex-row">
            <div className="relative lg:flex-1">
              <div>
                <div className="text-9xl font-semibold text-gray-300 absolute">
                  #1
                </div>
                <div className="flex flex-col gap-4 relative top-16 sm:left-24">
                  <div className="w-1/3">
                    <h3 className="font-medium text-3xl">
                      Choose from 100+ integrations.
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5 w-9/12 text-lg">
                    <p>
                      Vade Studio is designed to work seamlessly with your
                      favourite databases or web services.
                      <span className="text-black font-semibold">
                        {" "}
                        Tweak a template or start from scratch.
                      </span>
                    </p>
                    <p>
                      We've baked-in over 100 integrations directly into the
                      platform, so you can integrate quickly and easily with
                      other services, databases and applications out there.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex-1">
              <img src="one.png" alt="none" />
            </div>
          </div>
          <div className="relative top-16">
            <div className="absolute left-1/3 scale-150">
              <img src="Vector 1.png" alt="none" />
            </div>
          </div>
          <div className="bg-white flex flex-col gap-24 lg:gap-0 lg:flex-row-reverse justify-evenly pt-96 -mt-5">
            <div className="flex-col lg:flex-row lg:flex-1 relative ">
              <div>
                <div className="text-9xl font-semibold text-gray-300 absolute right-56 lg:left-72">
                  #2
                </div>
                <div className="flex flex-col flex- gap-4 relative top-16 sm:left-24">
                  <div className="w-1/2">
                    <h3 className="font-medium text-3xl">
                      Configure & Connect.
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5 w-1/2 text-lg">
                    <p>
                      Get all of your
                      <span className="text-black font-semibold">
                        data sources connected into a content mesh, in the same
                        place, in real time.
                      </span>
                    </p>
                    <p>
                      This provides you a unified API for data navigation across
                      all your integrated services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex-1">
              <img src="one.png" alt="none" />
            </div>
          </div>
          <div className="absolute right-1/2 scale-150">
            <img src="Vector 2.png" alt="none" />
          </div>
          <div className="bg-white flex flex-col gap-16 lg:gap-0 lg:flex-row justify-evenly pt-40 -mt-5">
            <div className="flex-1 relative ">
              <div>
                <div className="text-9xl font-semibold text-gray-300 absolute">
                  #3
                </div>
                <div className="flex flex-col gap-4 relative top-16 sm:left-24">
                  <div className="w-1/3">
                    <h3 className="font-medium text-3xl">
                      Test. Build. Display.
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5 w-9/12 text-lg">
                    <p>
                      <span className="text-black font-semibold">
                        play around with the generated APIs.
                      </span>
                      <br />
                      Once configured – test, build and deploy the unified API
                      into our secure and reliable infrastructure.
                    </p>
                    <p>
                      Run your queries in the editor and use our intuitive
                      interface to{" "}
                      <span className="text-black font-semibold">
                        {" "}
                        navigate through your data - clean, organised & at your
                        fingertips.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img src="three.png" alt="none" />
            </div>
          </div>
        </div>
        <div>
          <img src="top.png" alt="none" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="font-poppins font-medium text-center w-2/3 m-auto pt-32 text-2xl -mt-6 leading-9">
          <p>
            We're building an ecosystem where{" "}
            <span className="bg-orange-300 pl-1  pr-1">
              anyone can get inspired
            </span>{" "}
            with application templates, discover novel ideas from top builders,
            and{" "}
            <span className="bg-orange-300 pl-1  pr-1">
              publish revolutionary applications
            </span>{" "}
            that could{" "}
            <span className="bg-orange-300 pl-1  pr-1">change the world.</span>
          </p>
        </div>
        <div className="lg:w-1/3">
          <Inputbutton />
        </div>
        <div className="w-screen mt-16">
          <div className="flex justify-center lg:justify-end">
            <div className="relative lg:right-24">
              <Section3img />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
