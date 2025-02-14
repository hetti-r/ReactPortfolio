import React from 'react'

const SkillCard = ({ imgSrc, imgAlt, barSrc, barAlt, skillName, skillText }) => {
  return (
    <div className="skillbox">
      <img className="skillbox-img" src={imgSrc} alt={imgAlt} />
      <img className="skillbox-bar" src={barSrc} alt={barAlt} />
      <h5>{skillName}</h5>
      <p>{skillText}</p>
    </div>
  )
}

export default SkillCard