import React from "react";
import CenterColumnLayout from "../_common/CenterColumnLayout";
import PageTitle from "../_common/PageTitle";
import ExperienceCard from "./components/ExperienceCard";
import experienceList from "./components/experience.json";
import previousExperience from "./components/previousExperience.json"
import Button from "../_common/Button";
import SkillFlags from "../_common/SkillFlags";

interface experienceCard {
  position: string,
  company: string,
  url: string,
  description: string,
  start: string,
  end: string,
}


const TimeLine = () => {
  const skills = [
    "typescript",
    "python",
    "react",
    "next.js",
    "ui-libraries",
    "SaaS",
    "agile & scrum",
    "version control"
  ];

  const brandSkills = [
    'brand management',
    'graphic design',
    'marketing', 
    'leadership',
    'content creation',
    'relationship management',
    'collaboration'

  ]


  const renderExperienceCards = (ex:experienceCard[]) => {
   return ex.map((experience, index) => (
       <ExperienceCard
        key={index}
        startDate={experience.start}
        endDate={experience.end}
        position={experience.position}
        company={experience.company}
        description={experience.description}
      ></ExperienceCard>
   ));
  };

  return (
    <div className="p-5 pb-28">
      <CenterColumnLayout>
        <div className="flex justify-between">
        <PageTitle>_Experience</PageTitle>
        <Button hrefValue="/Alice West Software Engineer.pdf" newTab download="Alice West Software Engineer" label="download resume"></Button>
        </div>

        <div className="">
          <p className="text-white text-center">
            A junior software engineer, with experience in Typescript, uniting
            testing, agile working.
          </p>
          <div className="flex flex-wrap gap-3 justify-center py-8">
            <SkillFlags skillList={skills} />
          </div>
        </div>
        {renderExperienceCards(experienceList)}
        <hr></hr>

        <PageTitle>_Previous Experience</PageTitle>
        <div className="">
          <p className="text-white text-center">
          Over eight years experience across Brand, Design and Marketing
          </p>
          <div className="flex flex-wrap gap-3 justify-center py-8">
          <SkillFlags skillList={brandSkills} />
          </div>
        </div>
        {renderExperienceCards(previousExperience)}
      </CenterColumnLayout>

    </div>
  );
};

export default TimeLine;
