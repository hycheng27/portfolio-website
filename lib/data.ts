import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "My Graduation!",
    location: "HKUST",
    description:
      "I majored in Computer Science and graduated at HKUST in 2020. It was a fun ride.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Full-stack Developer",
    location: "HKSTP, Hong Kong",
    description: "TODO, descriptions of the 1st job experience.",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
  {
    title: "Senior software engineer",
    location: "Cyberport, Hong Kong",
    description: "TODO, descriptions of the 2nd job experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Software Associate",
    location: "KGI Securities, Hong Kong",
    description:
      "TODO, descriptions of the 3rd job experience. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Project 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: ["React", "Next.js", "TODO"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Project 2",
    description:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    tags: ["C#", "SQL", "TODO"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Project 3",
    description:
      "But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    tags: ["C#", "SQL", "TODO"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "phpMyAdmin",
  "SSMS",
  "Sybase SQL Anywhere",
  "GraphQL",
  "PostgreSQL",
  "Express",
  "Python",
] as const;
