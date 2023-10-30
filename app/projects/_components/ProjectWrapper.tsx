import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../../api/projectdata.json";
import PageTitle from "@/app/_common/PageTitle";
import CenterColumnLayout from "@/app/_common/CenterColumnLayout";
import Button from "@/app/_common/Button";


const ProjectWrapper = () => {

  const projectCards = projectData.map((project, index) => (
    <ProjectCard key={index} {...project}></ProjectCard>
  ));
  const wrapperCSS = "grid";
  const projectColumnCSS = "flex flex-col gap-12 sm:p-24 justify-self-center";
  const projectColumnReponsive = "md:max-w-4xl lg:max-w-6xl";

  return (
    <CenterColumnLayout>
      <div className="flex justify-between">
      <PageTitle>_Projects</PageTitle>
      {/* <Button hrefValue="https://github.com/alicewestcreate" newTab variant="secondary" label="Go To Github"></Button> */}
      </div>
      {projectCards}
    </CenterColumnLayout>
  );
};

export default ProjectWrapper;
