import React from 'react'
import ProjectCard from '../components/ProjectCard'
import AboutCard from '../components/AboutCard'
import { Journey } from '../components/Journey'
import Skills from '../components/Skills'

// Import project images
import yetiImg from '../assets/projectPics/yeti.png'
import tbuddyImg from '../assets/projectPics/tbuddy.png'
import gasImg from '../assets/projectPics/gas.jpg'

const Home = () => {
  return (
    <>
      <main>
        <section id="projects">
          <div className="boxcontainer">
            <AboutCard />
          </div>
        </section>

        <h2 className='projectsTitle'>What do I do?</h2>
        <div className="boxcontainer">
          <ProjectCard
            imageSrc={yetiImg}
            imageAlt="Snowy scenery with a yeti"
            title="Games"
            description="My journey in game design has been marked by a commitment to creating engaging and immersive experiences for players. I have a strong background in 2D art, animation, and level design, which allows me to contribute to various aspects of game development. My work is characterized by a keen eye for detail, a love for storytelling, and a dedication to pushing the boundaries of interactive entertainment."
            tags={['Game Design', '2D&3D Art', 'Unity']}
          />
          <ProjectCard
            imageSrc={tbuddyImg}
            imageAlt="Website preview, island picture behind symbols."
            title="Websites"
            description="I have a strong foundation in web development, with a focus on front-end frameworks such as React and Bootstrap. I am passionate about creating visually stunning and user-friendly websites that engage and inspire visitors. I am also proficient in back-end technologies such as Symfony, Drupal and MySQL, which enable me to create robust and scalable server-side applications."
            tags={['Web Design', 'PHP', 'React', 'UI/UX']}
          />
          <ProjectCard
            imageSrc={gasImg}
            imageAlt="Drawn animation of girl laying on a bed, black and white"
            title="Films"
            description="As a screenwriter, my work is characterized by a passion for storytelling, a commitment to creating compelling characters, and a dedication to pushing the boundaries of visual storytelling. I have experience writing for a variety of genres and formats, including feature films, television series, and short films. I am adept at crafting engaging and emotionally resonant stories that captivate and inspire audiences."
            tags={['Film & TV', 'Screenwriting', 'Animation']}
          />
        </div>

        <Journey />
        <section id="skills">
          <Skills /></section>
      </main >
    </>
  )
}

export default Home