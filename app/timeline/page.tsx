import React from "react";
import CenterColumnLayout from "../_common/CenterColumnLayout";
import PageTitle from "../_common/PageTitle";
import ExperienceCard from "./components/ExperienceCard";

const TimeLine = () => {
  const skills = [
    "typescript",
    "react",
    "unit-testing",
    "next.js",
    "typescript",
    "react",
    "unit-testing",
  ];

  const skillsUI = skills.map((skill) => (
    <span className="text-white font-light px-2 bg-teal-500 rounded">
      {skill}
    </span>
  ));

  return (
    <div className="p-5 pb-28">
      <CenterColumnLayout>
        <PageTitle>_Experience</PageTitle>

        <div className="">
          <p className="text-white text-center">
            A junior software engineer, with experience in Typescript, uniting
            testing, agile working.
          </p>
          <div className="flex flex-wrap gap-3 justify-center py-8">
            {skillsUI}
          </div>
        </div>
        <ExperienceCard startDate={"Jun 23"} endDate={"Sep 23"} position={"Software Engineer Intern"} company={"Data Camp"} description={" Refactored Confusing Card Components: Investigated and devised aplan to enhance clarity in card components. Created StoryBook components for visual guidance and updated hard coded elements with the DataCamp’s UI library"} ></ExperienceCard>
        <ExperienceCard startDate={"Jun 23"} endDate={"Sep 23"} position={"Software Engineer Intern"} company={"Data Camp"} description={" Refactored Confusing Card Components: Investigated and devised aplan to enhance clarity in card components. Created StoryBook components for visual guidance and updated hard coded elements with the DataCamp’s UI library"} ></ExperienceCard>
        <ExperienceCard startDate={"Jun 23"} endDate={"Sep 23"} position={"Software Engineer Intern"} company={"Data Camp"} description={" Refactored Confusing Card Components: Investigated and devised aplan to enhance clarity in card components. Created StoryBook components for visual guidance and updated hard coded elements with the DataCamp’s UI library"} ></ExperienceCard>



      </CenterColumnLayout>
    </div>
  );
};

export default TimeLine;
