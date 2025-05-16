import React from 'react'
import ProjectCard from '../components/ProjectCard'
import AboutCard from '../components/AboutCard'
import { Journey } from '../components/Journey'
import Skills from '../components/Skills'
import FadeInUpMotion from '../components/FadeInUpMotion';

// Import project images
import yetiImg from '../assets/projectPics/yeti.png'
import tbuddyImg from '../assets/projectPics/tbuddy.png'
import gasImg from '../assets/projectPics/gas.jpg'

const Home = () => {
  return (
    <>
      <main>
        <section id="about-container">
          <div className="boxcontainer">
            <AboutCard />
          </div>
        </section>
        <FadeInUpMotion>
          <h2 className='projectsTitle'>What do I do?</h2>
        </FadeInUpMotion>

        <div className="boxcontainer">
          <div className="card-wrapper">
            <FadeInUpMotion>
              <ProjectCard
                imageSrc={yetiImg}
                imageAlt="Snowy scenery with a yeti"
                title="Games"
                description="I specialize in creating engaging game experiences through 2D art, animation, and level design. My work combines attention to detail with compelling storytelling to deliver immersive interactive entertainment."
                tags={['Game Design', '2D&3D Art', 'Unity']}
              />
            </FadeInUpMotion>
          </div>
          <div className="card-wrapper">
            <FadeInUpMotion delay={0.2}>
              <ProjectCard
                imageSrc={tbuddyImg}
                imageAlt="Website preview, island picture behind symbols."
                title="Websites"
                description="I create responsive and user-friendly websites using React and modern front-end frameworks. My expertise extends to back-end development with Symfony, Drupal, and MySQL for building robust web applications."
                tags={['Web Design', 'PHP', 'React', 'UI/UX']}
              />
            </FadeInUpMotion>
          </div>
          <div className="card-wrapper">
            <FadeInUpMotion delay={0.4}>
              <ProjectCard
                imageSrc={gasImg}
                imageAlt="Drawn animation of girl laying on a bed, black and white"
                title="Films"
                description="I craft compelling stories and characters for film and television. My screenwriting spans multiple genres and formats, focusing on emotionally resonant narratives that captivate audiences."
                tags={['Film&TV', 'Screenwriting', 'Animation']}
              />
            </FadeInUpMotion>
          </div>
        </div>

        <Journey />
        <section id="skills">
          <Skills /></section>
      </main >
    </>
  )
}

export default Home