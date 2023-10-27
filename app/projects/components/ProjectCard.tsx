import Button from "@/app/_common/Button";
import Link from "next/link";
import React from "react";

export interface ProjectProps {
  path: string;
  title: string;
  backgroundImage: string;
  demo: string;
  alt: string;
  blurb: string;
  skills: [];
  links: {
    deployed: string;
    repo: string;
  };
  summary: {
    overview: string;
    technology: [];
    features: [];
    design: [];
    challenages: string;
    testing: string;
    results: string;
    future: [];
  };
}

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const link = "/projects/bud";
  const cardCSS = "flex flex-col md:flex-row";
  const figureCSS = "aspect-square flex-1";
  const imageCSS = "object-cover h-full w-full";
  const cardBodyWrapperCSS = "flex-1"
  const cardBodyCSS = "flex flex-col p-8 text-white gap-5 justify-center h-full ";
  const cardTitleCSS = "card-title";
  const cardActionCSS = "card-actions justify-start";

  console.log("project", project);

  return (
    <Link href={`${link}`}>
      <div className={`${cardCSS} glass-container`}>
        <figure className={`${figureCSS}`}>

          <img
            className={`${imageCSS}`}
            src={project.backgroundImage}
            alt="Album"
          />


        </figure>
        <div className={`${cardBodyWrapperCSS}`}>
        <div className={`${cardBodyCSS}`}>
          <h2 className={`${cardTitleCSS}`}>{project.title} </h2>
          <p>{project.blurb}</p>
          <p>{project.summary.overview}</p>
          <div className={`${cardActionCSS}`}>
            <Button  label="View Project"></Button>

          </div>
        </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
