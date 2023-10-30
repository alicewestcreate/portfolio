import React from "react";

interface Props {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  description: string;
}

const ExperienceCard = (props: Props) => {
  return (
    <div className="glass-container flex flex-col md:flex-row gap-6 py-10">
      <div className="min-w-fit ">
        <h3 className="text-white font-light">
          {props.startDate} - {props.endDate}
        </h3>
      </div>
      <div className="">
        <h2 className="text-white text-xl pb-4">
          {props.position}
          <span className="font-light"> | {props.company} </span>
        </h2>
        <p className="text-white">{props.description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
