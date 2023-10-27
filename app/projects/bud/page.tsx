import React from "react";
import projectData from '../../api/projectdata.json'
import PageWrapper from "./PageWrapper";

const ProjectPage = () => {

  // const pageWrapper = projectData.map((project) => (
  //   
  // ))

  console.log("this",projectData)

  return (
    
    <PageWrapper project={projectData}> </PageWrapper>
    
  );
};

export default ProjectPage;
