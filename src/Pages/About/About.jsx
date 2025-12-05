import React from "react";
import aboutMe from "../../assets/images/About/about-me.webp";

const About = () => {
  const skills = [
    {
      title: "React.js",
      color: "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20",
    },
    {
      title: "Next.js",
      color: "text-white bg-gray-800/60 border border-gray-600/40",
    },
    {
      title: "Node.js",
      color: "text-lime-400 bg-lime-500/10 border border-lime-500/20",
    },
    {
      title: "MongoDB",
      color: "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20",
    },
    {
      title: "React Native",
      color: "text-indigo-400 bg-indigo-500/10 border border-indigo-500/20",
    },
  ];

  return (
    <section
      className="pt-6 md:pt-10 transition-colors duration-300"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Who I Am
          </h2>
          <p className="mt-1 text-4xl leading-8 font-extrabold tracking-tight sm:text-5xl">
            About Me
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group md:order-2">
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
              <h4 className="text-md font-semibold  uppercase tracking-wider mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className={`inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs lg:text-sm font-medium ${skill.color}`}
                  >
                    <svg
                      viewBox="0 0 6 6"
                      aria-hidden="true"
                      className="size-1.5 fill-current"
                    >
                      <circle r={3} cx={3} cy={3} />
                    </svg>
                    {skill.title}
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
