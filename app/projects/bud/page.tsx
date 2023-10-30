import React from "react";
import CenterColumnLayout from "@/app/_common/CenterColumnLayout";
import HeaderImage from "./components/HeaderImage";
import ProjectTitle from "./components/ProjectTitle";
import SubHeading from "./components/SubHeading";
import Paragraph from "./components/Paragraph";
import Demo from "./components/Demo";
import ButtonWrapper from "./components/ButtonWrapper";
import PrevNext from "./components/PrevNext";
import FeatureList from "./components/FeatureList";
import projects from "../../api/projectdata.json"


const Page = () => {
  return (
    <>
      <HeaderImage image={projects[0].backgroundImage}></HeaderImage>
      <CenterColumnLayout>
        <div className="flex flex-col lg:max-w-screen-md py-5 px-4">
          <ProjectTitle title={projects[0].title} blurb={projects[0].blurb}></ProjectTitle>
          <div>
            <SubHeading>_Overview</SubHeading>
            <Paragraph>
              {projects[0].overview}
            </Paragraph>
          </div>
          <Demo srcValue={projects[0].demo} altValue={projects[0].alt}></Demo>
          <ButtonWrapper links={projects[0].links}></ButtonWrapper>

          <SubHeading>_Goal</SubHeading>
          <Paragraph>
            {projects[0].goal}
          </Paragraph>

          <SubHeading>_Main Features</SubHeading>
          <FeatureList features={projects[0].mainFeature}></FeatureList>

          <SubHeading> _Outcome</SubHeading>
          <Paragraph>
            {projects[0].outcome}
          </Paragraph>
        </div>
        <PrevNext></PrevNext>
      </CenterColumnLayout>
    </>
  );
};

export default Page;
