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
import projects from "../../api/projectdata.json"


const Page = () => {
  return (
    <>
      <HeaderImage image={projects[2].backgroundImage}></HeaderImage>
      <CenterColumnLayout>
        <div className="flex flex-col lg:max-w-screen-md py-5 px-4">
          <ProjectTitle title={projects[2].title} blurb={projects[2].blurb}></ProjectTitle>
          <div>
            <SubHeading>_Overview</SubHeading>
            <Paragraph>
              {projects[2].overview}
            </Paragraph>
          </div>
          <Demo srcValue={projects[2].demo} altValue={projects[2].alt}></Demo>
          <ButtonWrapper links={projects[2].links}></ButtonWrapper>

          <SubHeading>_Goal</SubHeading>
          <Paragraph>
            {projects[2].goal}
          </Paragraph>

          <SubHeading>_Main Features</SubHeading>
          <FeatureList features={projects[2].mainFeature}></FeatureList>

          <SubHeading> _Outcome</SubHeading>
          <Paragraph>
            {projects[2].outcome}
          </Paragraph>
        </div>
        <PrevNext></PrevNext>
      </CenterColumnLayout>
    </>
  );
};

export default Page;
