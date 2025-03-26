import React from 'react'
import SkillCard from '../components/SkillCard'


const Skills = () => {
    return (
        <section id="skills">
            <h2>My Skillset</h2>
            <div className="skillbox-container">
                <SkillCard
                    imgSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/cat.png"
                    imgAlt="sleepy pixel cat"
                    barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/4progressbar.png"
                    barAlt="pixel progressbar half full"
                    skillName="Game Design"
                    skillText={"I have a strong foundation in game design, with a focus on creating engaging and immersive experiences for players. I have experience in 2D art, animation, and level design."}
                />
                <SkillCard
                    imgSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/floppy.png"
                    imgAlt="pixel floppy disc"
                    barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/2progressbar.png"
                    barAlt="pixel progressbar half full"
                    skillName="Backend"
                    skillText={"I am proficient in back-end technologies such as Symfony, Drupal and MySQL, which enable me to create robust and scalable server-side applications."}
                />
                <SkillCard
                    imgSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/kone.png"
                    imgAlt="pixel computer with a face"
                    barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/progressbar.png"
                    barAlt="pixel progressbar quite empty"
                    skillName="Frontend"
                    skillText={"I focus on front-end technologies such as HTML, CSS, and JavaScript. I am passionate about creating visually stunning and user-friendly websites that engage and inspire visitors."}
                />
                <SkillCard
                    imgSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/folder.png"
                    imgAlt="pixel folder with flowers"
                    barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/5progressbar.png"
                    barAlt="pixel progressbar quite empty"
                    skillName="Art"
                    skillText={"I have a strong background in 2D art, animation, and level design, which allows me to contribute to various aspects of game development."}
                />
                <SkillCard
                    imgSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/heart.png"
                    imgAlt="pixel crystal heart"
                    barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/4progressbar.png"
                    barAlt="pixel progressbar half full"
                    skillName="Teamwork"
                    skillText={"I'm good at team building and I tend to encourage and inspire other people. While working in a team I'm also keen on open dialogue and transparency."}
                />
                <SkillCard
                    imgSrc="https://github.com/hetti-r/ReactPortfolio/blob/reform/src/assets/icons/kuppi.png?raw=true"
                    imgGifSrc="https://github.com/hetti-r/ReactPortfolio/blob/reform/src/assets/icons/kuppi.gif?raw=true"
                    imgAlt="pixel cup with sprouts and a heart"
                    barSrc="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/3progressbar.png"
                    barAlt="pixel progressbar almost full"
                    skillName="Screenwriting"
                    skillText={"I have 6+ years of experience writing for a variety of genres and formats. I am adept at crafting engaging and emotionally resonant stories that captivate and inspire audiences."}
                />
            </div>
        </section>
    )
}

export default Skills