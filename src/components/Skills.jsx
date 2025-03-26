import React from 'react'
import SkillCard from '../components/SkillCard'

// Static image imports (PNG)
import cat from '../assets/icons/cat.png'
import kuppi from '../assets/icons/kuppi.png'
import floppy from '../assets/icons/floppy.png'
import kone from '../assets/icons/kone.png'
import folder from '../assets/icons/folder.png'
import heart from '../assets/icons/heart.png'
import progressbar1 from '../assets/icons/progressbar.png'
import progressbar2 from '../assets/icons/2progressbar.png'
import progressbar3 from '../assets/icons/3progressbar.png'
import progressbar4 from '../assets/icons/4progressbar.png'
import progressbar5 from '../assets/icons/5progressbar.png'

// Animated image imports (GIF)
import kuppi_gif from '../assets/icons/kuppi.gif'
import cat_gif from '../assets/icons/cat.gif'
import floppy_gif from '../assets/icons/floppy.gif'
import kone_gif from '../assets/icons/kone.gif'
import folder_gif from '../assets/icons/folder.gif'
import heart_gif from '../assets/icons/heart.gif'

const Skills = () => {
    return (
        <section id="skills">
            <h2>My Skillset</h2>
            <div className="skillbox-container">
                <SkillCard
                    imgSrc={cat}
                    imgGifSrc={cat_gif}
                    imgAlt="sleepy pixel cat"
                    barSrc={progressbar4}
                    barAlt="pixel progressbar half full"
                    skillName="Game Design"
                    skillText={"I have a strong foundation in game design, with a focus on creating engaging and immersive experiences for players. I have experience in 2D art, animation, and level design."}
                />
                <SkillCard
                    imgSrc={floppy}
                    imgGifSrc={floppy_gif}
                    imgAlt="pixel floppy disc"
                    barSrc={progressbar2}
                    barAlt="pixel progressbar half full"
                    skillName="Backend"
                    skillText={"I am proficient in back-end technologies such as Symfony, Drupal and MySQL, which enable me to create robust and scalable server-side applications."}
                />
                <SkillCard
                    imgSrc={kone}
                    imgGifSrc={kone_gif}
                    imgAlt="pixel folder with flowers"
                    barSrc={progressbar1}
                    barAlt="pixel progressbar quite empty"
                    skillName="Frontend"
                    skillText={"I focus on front-end technologies such as HTML, CSS, and JavaScript. I am passionate about creating visually stunning and user-friendly websites that engage and inspire visitors."}
                />
                <SkillCard
                    imgSrc={folder}
                    imgGifSrc={folder_gif}
                    imgAlt="pixel folder with flowers"
                    barSrc={progressbar5}
                    barAlt="pixel progressbar quite empty"
                    skillName="Art"
                    skillText={"I have a strong background in 2D art, animation, and level design, which allows me to contribute to various aspects of game development."}
                />
                <SkillCard
                    imgSrc={heart}
                    imgGifSrc={heart_gif}
                    imgAlt="pixel crystal heart"
                    barSrc={progressbar4}
                    barAlt="pixel progressbar half full"
                    skillName="Teamwork"
                    skillText={"I'm good at team building and I tend to encourage and inspire other people. While working in a team I'm also keen on open dialogue and transparency."}
                />
                <SkillCard
                    imgSrc={kuppi}
                    imgGifSrc={kuppi_gif}
                    imgAlt="pixel cup with sprouts and a heart"
                    barSrc={progressbar3}
                    barAlt="pixel progressbar almost full"
                    skillName="Screenwriting"
                    skillText={"I have 6+ years of experience writing for a variety of genres and formats. I am adept at crafting engaging and emotionally resonant stories that captivate and inspire audiences."}
                />
            </div>
        </section>
    )
}

export default Skills