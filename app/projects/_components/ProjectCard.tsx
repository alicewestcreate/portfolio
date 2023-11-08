import Button from "@/app/_common/Button";
import Image from "next/image";
import Link from "next/link";

import SkillFlags from "@/app/_common/SkillFlags";

export interface ProjectObjProps {
  path: string;
  title: string;
  blurb: string;
  backgroundImage: string;
  demo: string;
  alt: string;
  devSpec: string[];
  links: {
    deployed: string;
    repo: string;
  };
  overview: string;
  goal: string;
  mainFeature: string[];
  outcome: string;
}

const ProjectCard = ({ ...project }: ProjectObjProps) => {
  const link = `projects/${project.path}`;
  const cardCSS = "flex flex-col md:flex-row";
  const figureCSS = "aspect-square flex-1";
  const imageCSS = "object-cover h-full w-full bg-slate-100";
  const cardBodyWrapperCSS = "flex-1";
  const cardBodyCSS =
    "flex flex-col p-8 text-white gap-5 justify-center h-full ";
  const cardTitleCSS = "card-title";
  const skillFlagsCSS = "flex flex-wrap gap-3 my-6"
  const cardActionCSS = "card-actions justify-start";

  return (
    <Link href={`${link}`}>
      <div className={`${cardCSS} glass-container`}>
        <figure className={`${figureCSS}`}>
          <Image
            className={`${imageCSS}`}
            src={project.backgroundImage}
            alt="Album"
            width={1000}
            height={1000}
          />
        </figure>
        <div className={`${cardBodyWrapperCSS}`}>
          <div className={`${cardBodyCSS}`}>
            <h2 className={`${cardTitleCSS}`}>{project.title} </h2>
            <p>{project.blurb}</p>
            <div className={`${skillFlagsCSS}`}>
              <SkillFlags skillList={project.devSpec} />
            </div>
            <div className={`${cardActionCSS}`}>
              <Button
                hrefValue={`projects/${project.path}`}
                label="View Project"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
