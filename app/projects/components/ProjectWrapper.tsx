import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../../api/projectdata.json";
import PageTitle from "@/app/_common/PageTitle";
import CenterColumnLayout from "@/app/_common/CenterColumnLayout";

const ProjectWrapper = () => {
  const projects = [
    {
      title: "BUD",
      copy: "\u2022 React \u2022 MUI \u2022 Data-Manipluation ",
      button: "Go To Project",
      image: "/images/shadyLeaves.webp",
    },
    {
      title: "Pool Position",
      copy: "Project Copy",
      button: "Go To Project",
      image: "/images/wildswimming.jpg",
    },
    {
      title: "Weather App",
      copy: "Project Copy",
      button: "Go To Project",
      image: "/images/weather.jpg",
    },
  ];

  const projectCards = projectData.map((project) => (
    <ProjectCard project={project}></ProjectCard>
  ));

  const wrapperCSS = "grid";
  const projectColumnCSS = "flex flex-col gap-12 sm:p-24 justify-self-center";
  const projectColumnReponsive = "md:max-w-4xl lg:max-w-6xl";

  return (
    <CenterColumnLayout>
      <PageTitle>_Projects</PageTitle>
      {projectCards}
    </CenterColumnLayout>
  );
};

export default ProjectWrapper;
