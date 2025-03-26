import React, { useState } from 'react'

const SkillCard = ({ imgSrc, imgGifSrc, imgAlt, barSrc, barAlt, skillName, skillText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="skillbox" data-tooltip={skillText}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      <img className="skillbox-img" src={isHovered ? imgGifSrc : imgSrc}
        alt={imgAlt} />
      <img className="skillbox-bar" src={barSrc} alt={barAlt} />
      <h5>{skillName}</h5>
    </div>
  )
}

export default SkillCard