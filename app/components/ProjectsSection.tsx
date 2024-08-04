"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Created the website you're currently at",
    image: "/images/Projects/Website.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ButterM-40/personal-website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Communicative NPC Game",
    description: "Using LLM we were able to create an interative Boss that can communicate with the Player via voice",
    image: "/images/Projects/DungeonGPT.jpg",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/ButterM-40/Dungeon-Game-3D",
    previewUrl: "https://www.youtube.com/watch?v=W_adTM71V2w&ab_channel=RamiroSantos",
  },
  {
    id: 3,
    title: "Project-M347",
    description: "Horror POV where you play as a scientist trying to escpae the unknown cave.",
    image: "/images/Projects/Project-M347.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/ButterM-40/Project-M347",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Python Langchain",
    description: "Using OpenAI, constructed a NPC with Story",
    image: "/images/about-image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ButterM-40/Langchain-Audio-Conversation",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Spirit of the Wild",
    description: "Puzzle Game where the player transform into a totem to use as platforms",
    image: "/images/Projects/SpiritOfTheWild.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/ButterM-40/BlitzWaveStudioGameJam70",
    previewUrl: "https://blitzwavesstudios.itch.io/spirits-of-the-wild",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;