import React from "react";
import CenterColumnLayout from "@/app/_common/CenterColumnLayout";
import HeaderImage from "../bud/components/HeaderImage";
import ProjectTitle from "../bud/components/ProjectTitle";
import SubHeading from "../bud/components/SubHeading";
import Paragraph from "../bud/components/Paragraph";
import Demo from "../bud/components/Demo";
import ButtonWrapper from "../bud/components/ButtonWrapper";
import PrevNext from "../bud/components/PrevNext";
import FeatureList from "../bud/components/FeatureList";
import type { ProjectObjProps } from "./ProjectCard";

interface PageTemplateProps extends ProjectObjProps {
    hideHeader?: boolean
}

const PageTemplate = ({hideHeader=false, ...project}: PageTemplateProps) => {
  return (
    <>
      {(!hideHeader) && <HeaderImage image={project.backgroundImage}></HeaderImage>}
      <CenterColumnLayout>
        <div className="flex flex-col lg:max-w-screen-md py-5 px-4">
          <ProjectTitle title={project.title} blurb={project.blurb}></ProjectTitle>
          <div>
            <SubHeading>_Overview</SubHeading>
            <Paragraph>
              {project.overview}
            </Paragraph>
          </div>
          <Demo srcValue={project.demo} altValue={project.alt}></Demo>
          <ButtonWrapper links={project.links}></ButtonWrapper>

          <SubHeading>_Goal</SubHeading>
          <Paragraph>
            {project.goal}
          </Paragraph>

          <SubHeading>_Main Features</SubHeading>
          <FeatureList features={project.mainFeature}></FeatureList>

          <SubHeading> _Outcome</SubHeading>
          <Paragraph>
            {project.outcome}
          </Paragraph>
        </div>
        <PrevNext></PrevNext>
      </CenterColumnLayout>
    </>
  );
};

export default PageTemplate;
