import React from "react";

const Hero = () => {
  return (
    <>
      {/* Mobile View */}
      <section className="flex md:hidden h-[70vh] items-center justify-center relative bg-gray-100">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src="https://www.shutterstock.com/image-photo/cyber-security-concept-data-protection-600nw-2179926955.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="z-10 text-center px-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to <span className="text-blue-500">Detect.mal</span>
          </h1>
          <p className="mt-2 text-sm text-black">
            Discover a new way to enhance security and detect malware effectively.
          </p>
        </div>
      </section>

      {/* Desktop View */}
      <section className="hidden md:flex h-[80vh] items-center justify-center relative bg-gray-100">
        <div className="absolute left-0 w-full h-full">
          <img
            src="https://www.shutterstock.com/image-photo/cyber-security-concept-data-protection-600nw-2179926955.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <h1 className="text-5xl font-bold text-gray-800">
            Welcome to <span className="text-blue-500">Detect.mal</span>
          </h1>
          <p className="mt-4 text-lg text-black">
            Discover a new way to enhance security and detect malware effectively.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
