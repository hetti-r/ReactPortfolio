import React from 'react'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'

const Home = () => {
  return (
    <>
    <main>
      <section id="projects">
        <h2>Projects</h2>
        <div className="boxcontainer">
          <ProjectCard
            imageSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/project1.png"
            imageAlt="Pixel Clown game scene"
            title="Games"
            description="As a game designer, I bring a unique blend of creativity, technical skill, and a deep passion for gaming. My journey in game design has been marked by a commitment to creating engaging and immersive experiences for players. I have a strong background in 2D art, animation, and level design, which allows me to contribute to various aspects of game development. My work is characterized by a keen eye for detail, a love for storytelling, and a dedication to pushing the boundaries of interactive entertainment."
            link="#"
          />
          <ProjectCard
            imageSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/Project2.png"
            imageAlt="Snowy scenery with a yeti"
            title="Websites"
            description="I have a strong foundation in web development, with a focus on front-end technologies such as HTML, CSS, and JavaScript. I am passionate about creating visually stunning and user-friendly websites that engage and inspire visitors. I have experience working with frameworks such as React and Bootstrap, which allow me to build responsive and dynamic web applications. I am also proficient in back-end technologies such as Symfony, Drupal and MySQL, which enable me to create robust and scalable server-side applications."
            link="https://h3tt1.itch.io/yeti-ski"
          />
          <ProjectCard
            imageSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/Project3.png"
            imageAlt="Funny looking dodo birds"
            title="Films"
            description="As a screenwriter, my work is characterized by a deep passion for storytelling, a commitment to creating compelling characters and narratives, and a dedication to pushing the boundaries of visual storytelling. I have experience writing for a variety of genres and formats, including feature films, television series, and short films. I am adept at crafting engaging and emotionally resonant stories that captivate and inspire audiences. I am also skilled at collaborating with directors, producers, and other creatives to bring scripts to life on screen."
            link="https://youtu.be/rYB4JmqTs7k"
          />
        </div>
      </section>

      <div className="aboutme">
        <section id="aboutme">
          <img className="pic1" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/pilvet.png" alt="pixel clouds and stars"/>
          <h2>About Me</h2>
          <p>
            I’m a screenwriter & game developer based in Helsinki, Finland. I'm currently studyin full-stack development in Business College Helsinki. I love everything games and animation related and these interests have led me to work on various projects during the years. I appreciate working with all kinds of people and I have an ability to see the different strengths people posses. I'm good at team building and I tend to encourage and inspire other people. While working in a team I'm also keen on open dialogue and transparency. My current goal is to learn professional level coding skills in web development. I'm also making a progress in narrative game design and creating a visual style.
          </p>
        </section>
      </div>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skillbox-container">
          <SkillCard
            imgSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/cat.png" 
            imgAlt="sleepy pixel cat" 
            barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/4progressbar.png" 
            barAlt="pixel progressbar half full" 
            skillName="Game Design" 
          />
          <SkillCard
            imgSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/floppy.png" 
            imgAlt="pixel floppy disc" 
            barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/2progressbar.png" 
            barAlt="pixel progressbar half full" 
            skillName="HTML&CSS" 
          />
          <SkillCard
            imgSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/folder.png" 
            imgAlt="pixel folder with flowers" 
            barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/5progressbar.png" 
            barAlt="pixel progressbar quite empty" 
            skillName="Frontend" 
          />
          <SkillCard
            imgSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/kone.png" 
            imgAlt="pixel computer with a face" 
            barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/progressbar.png" 
            barAlt="pixel progressbar quite empty" 
            skillName="Backend" 
          />
          <SkillCard
            imgSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/heart.png" 
            imgAlt="pixel crystal heart" 
            barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/4progressbar.png" 
            barAlt="pixel progressbar half full" 
            skillName="Art" 
          />
          <SkillCard
            imgSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/kuppi.png" 
            imgAlt="pixel cup with sprouts and a heart" 
            barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/3progressbar.png" 
            barAlt="pixel progressbar almost full" 
            skillName="Screenwriting" 
          />
        </div>
      </section>
    </main>
    </>
  )
}

export default Home