import React from 'react'

const SkillCard = ({ imgSrc, imgAlt, barSrc, barAlt, skillName, skillText }) => {
  return (
    <div className="skillbox" title={skillText}>
      <img className="skillbox-img" src={imgSrc} alt={imgAlt} />
      <img className="skillbox-bar" src={barSrc} alt={barAlt} />
      <h5>{skillName}</h5>
    </div>
  )
}

export default SkillCard