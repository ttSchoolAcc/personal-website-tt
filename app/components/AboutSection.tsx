"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-4 gap-4">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>PostgreSQL</li>
        <li>Unity</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Godot</li>
        <li>C#</li>
        <li>Python</li>
        <li>C++</li>
        <li>OpenCV</li>
        <li>Git</li>
        <li>Google Cloud Platform</li>
        <li>LLM</li>
        <li>Deep Learning</li>
        <li>VR/AR</li>
      </ul>
      
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master's Computer Science - University of Texas Rio Grande Valley</li>
        <li>Bachelors's Computer Science - University of Texas Rio Grande Valley</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Add Later</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Game Developer with interest of many topics, from Machine Learning, to Theory.
            Different skills I have acquired over the years to consider myself a Jack of All Trades, and
            master to game development since its quite fun.

            My enthusiasm for technology drives me to continue to learn something new, and I have enjoyed
            learning different topics and also teaching others to pursue certain topics if it finds their
            intereset. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;