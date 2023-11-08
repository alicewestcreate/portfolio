import React from 'react'


const SkillFlag = ({skill} : {skill: string}) => {
    return (
      <span
      className="text-white font-light px-2 bg-teal-500 rounded"
    >
      {skill}
    </span>
    )
  }

const SkillFlags = ({skillList} : {skillList : string[]}) => {
  return skillList.map((skill, index) => (
    <SkillFlag key={index} skill={skill}></SkillFlag>

  ));
}

export default SkillFlags


