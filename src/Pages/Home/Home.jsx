import React from "react";
import Button from "../../components/Button/Button";
import RotatingText from "../../components/RotatingText/RotatingText";
import heroMe from ".././../assets/images/Home/me.webp";
import FloatingIcons from "../../components/FloatingIcons/FloatingIocns";
import "./Home.css";

function Home() {
  return (
    <div className="min-h-[calc(100dvh-145px)] pt-10 lg:pt-0 md:min-h-[calc(100dvh-80px)] flex lg:flex-row flex-col items-center justify-between gap-24 hero-section">
      <div className="text-[20px] md:text-[25px] font-semibold flex flex-col gap-2 max-w-[500px]">
        <h1>Hey There! 👋🏻</h1>
        <h1>
          I'M <span className="gradient-text">Mohd Faizan Ansari</span>
        </h1>
        <span className="text-lg md:text-xl text-gray-300 leading-relaxed font-normal">
          Software Developer crafting scalable, efficient, and user-focused
          applications.
        </span>
        <h1>
          <RotatingText
            texts={[
              "Team Player",
              "Innovative Thinker",
              "Creative Problem Solver",
              "Detail-Oriented Developer",
              "Adaptable and Quick Learner",
              "Writes Efficient & Clean Code",
              "Passionate About Technology",
              "Driven by Challenges",
              "Believes in Continuous Improvement",
              "Always Curious and Learning",
            ]}
            mainClassName="text-[var(--gradient-purple-border)] text-[20px] md:text-[40px] font-bold w-fit overflow-hidden justify-center"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ X: "-160%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={4000}
          />
        </h1>
        <div className="max-w-[410px] flex flex-row gap-[8px]">
          <Button
            title={"Hire Me"}
            fontSize="text-[15px]"
            className="font-normal"
          />
          <Button
            variant="secondary"
            title={"Download CV"}
            fontSize="text-[15px]"
            className="font-normal"
          />
        </div>
      </div>
      <div className="hero-page-right-section">
        <FloatingIcons />
        <img
          src={heroMe}
          className="lg:max-h-[500px] max-h-[350px] md:mt-16 hero-boy"
        />
      </div>
    </div>
  );
}

export default Home;
