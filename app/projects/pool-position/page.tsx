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
      <HeaderImage image={projects[1].backgroundImage}></HeaderImage>
      <CenterColumnLayout>
        <div className="flex flex-col lg:max-w-screen-md py-5 px-4">
          <ProjectTitle title={projects[1].title} blurb={projects[1].blurb}></ProjectTitle>
          <div>
            <SubHeading>_Overview</SubHeading>
            <Paragraph>
              {projects[1].overview}
            </Paragraph>
          </div>
          <Demo srcValue={projects[1].demo} altValue={projects[1].alt}></Demo>
          <ButtonWrapper links={projects[1].links}></ButtonWrapper>

          <SubHeading>_Goal</SubHeading>
          <Paragraph>
            {projects[1].goal}
          </Paragraph>

          <SubHeading>_Main Features</SubHeading>
          <FeatureList features={projects[1].mainFeature}></FeatureList>

          <SubHeading> _Outcome</SubHeading>
          <Paragraph>
            {projects[1].outcome}
          </Paragraph>
        </div>
        <PrevNext></PrevNext>
      </CenterColumnLayout>
    </>
  );
};

export default Page;
