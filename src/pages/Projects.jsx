import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <>
    <section id="projects">
    <h2>Projects</h2>
    <div className="boxcontainer">
      <ProjectCard
        imageSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/project1.png"
        imageAlt="Pixel Clown game scene"
        title="Farthabet"
        description="Farthabet is a 2D reaction game where the player must enter given letters as quickly as possible to appease the school master of the Clown School. The game was made for the Global Game Jam 2024 where I worked as a 2D graphics artist in a team."
        link="https://lennysmithgames.itch.io/clown-className-1-farthabet"
      />
      <ProjectCard
        imageSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/Project2.png"
        imageAlt="Snowy scenery with a yeti"
        title="Yeti Ski"
        description="Yeti Ski is a procedurally generated skiing game where the player jumps over obstacles as a yeti fleeing from the approaching avalanche. I worked as a 2D/concept artist and also did rigging and animating for this project in GamePro study program."
        link="https://h3tt1.itch.io/yeti-ski"
      />
      <ProjectCard
        imageSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/Project3.png"
        imageAlt="Funny looking dodo birds"
        title="Dodo Sapiens"
        description="Dodo Sapiens was a final game project for my year of game studies in HEO academy. I worked as a game and level designer as well as an animator and 2D artist. Dodo Sapiens is a time limited game with a collect and drop - mechanics."
        link="https://youtu.be/rYB4JmqTs7k"
      />
    </div>
  </section>
    </>
  )
}

export default Projects