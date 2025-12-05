import React from "react";
import aboutMe from "../../assets/images/About/about-me.webp";

const About = () => {
  const skills = ["React.js", "Next.js", "Node.js", "MongoDB", "React Native"];

  return (
    <section
      className="py-6 md:py-10  px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Who I Am
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight sm:text-5xl">
            About Me
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative group md:order-2">
            {/* Glow effect - Adjusted for dark mode brightness */}
            <div className="absolute -inset-4 rounded-xl transition duration-500"></div>
            <img
              src={aboutMe}
              alt="Developer working at desk"
              className="relative rounded-xl w-full object-contain h-[400px] md:h-[550px] transform transition duration-500 hover:scale-[1.01]"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-3xl font-bold ">
              I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Software Developer
              </span>
            </h3>

            <p className="text-md leading-relaxed">
              Currently working at{" "}
              <span className="font-semibold ">
                Websultanate Technologies Pvt. Ltd.
              </span>
              , I spend most of my time building clean, practical, and
              user-friendly applications.
            </p>

            <p className="text-md leading-relaxed">
              I enjoy taking ideas and turning them into something real
              something people can actually use and interact with. Over the past
              few years, I’ve worked on web platforms and mobile apps, learning
              that code should be efficient and easy to maintain. I keep things
              simple, solve problems step by step, and ensure the final product
              feels smooth.
            </p>

            <p className="text-md leading-relaxed">
              Outside of work, I like exploring new frontend ideas, improving UI
              animations, and learning more about backend systems. My goal is
              straightforward{" "}
              <span className="italic font-medium ">
                grow steadily, build meaningful things, and keep improving.
              </span>
            </p>

            <div className="pt-4">
              <h4 className="text-sm font-semibold  uppercase tracking-wider mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-dark dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
