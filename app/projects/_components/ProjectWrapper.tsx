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

  return (
    <CenterColumnLayout>
      <div className="flex justify-between">
      <PageTitle>_Projects</PageTitle>
      <Button hrefValue="https://github.com/alicewestcreate" newTab variant="secondary" label="Go To Github"></Button>
      </div>
      {projectCards}
    </CenterColumnLayout>
  );
};

export default ProjectWrapper;
