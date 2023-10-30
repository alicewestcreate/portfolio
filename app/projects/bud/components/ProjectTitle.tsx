import React from "react";

interface ProjectTitleProps {
    title: string,
    blurb: string,

}

const ProjectTitle = ({title, blurb}: ProjectTitleProps) => {
  return (
    <div>
      <h1 className="text-4xl font-bold pb-10">
        {title}
        <span className="text-2xl font-light"> {blurb}</span>
      </h1>
    </div>
  );
};

export default ProjectTitle;
