import React from 'react'
import SkillCard from '../components/SkillCard'
import FadeInUpMotion from '../components/FadeInUpMotion';


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
        <>
            <FadeInUpMotion>
                <h2>My Skillset</h2>
            </FadeInUpMotion>
            <div className="skillbox-container">
                <FadeInUpMotion>
                    <SkillCard
                        imgSrc={cat}
                        imgGifSrc={cat_gif}
                        imgAlt="sleepy pixel cat"
                        barSrc={progressbar4}
                        barAlt="pixel progressbar half full"
                        skillName="Game Design"
                        skillText={"• Unity\n• C#\n• UI&UX\n• Level Design\n• Narrative Design"}

                    />
                </FadeInUpMotion>
                <FadeInUpMotion delay={0.2}>
                    <SkillCard
                        imgSrc={floppy}
                        imgGifSrc={floppy_gif}
                        imgAlt="pixel floppy disc"
                        barSrc={progressbar5}
                        barAlt="pixel progressbar half full"
                        skillName="Backend"
                        skillText={"• PHP\n• Symfony\n• Drupal\n• MySQL\n• Firebase\n• AWS\n• Docker\n• Kubernetes\n• REST API\n• CI/CD"}
                    />
                </FadeInUpMotion>
                <FadeInUpMotion delay={0.4}>
                    <SkillCard
                        imgSrc={kone}
                        imgGifSrc={kone_gif}
                        imgAlt="pixel folder with flowers"
                        barSrc={progressbar2}
                        barAlt="pixel progressbar quite empty"
                        skillName="Frontend"
                        skillText={"I focus on front-end technologies such as React and Tailwind CSS to create visually stunning and user-friendly websites that engage and inspire visitors."}
                    />
                </FadeInUpMotion>
                <FadeInUpMotion delay={0.6}>
                    <SkillCard
                        imgSrc={folder}
                        imgGifSrc={folder_gif}
                        imgAlt="pixel folder with flowers"
                        barSrc={progressbar4}
                        barAlt="pixel progressbar quite empty"
                        skillName="Art"
                        skillText={"• 2D&3D Art\n• Animation\n• Pixel Art\n• Storyboarding\n• Character Design\n• Concept Art\n• Figma\n• Photoshop\n• AfterEffects\n• Blender"}
                    />
                </FadeInUpMotion>
                <FadeInUpMotion delay={0.8}>
                    <SkillCard
                        imgSrc={heart}
                        imgGifSrc={heart_gif}
                        imgAlt="pixel crystal heart"
                        barSrc={progressbar3}
                        barAlt="pixel progressbar half full"
                        skillName="Teamwork"
                        skillText={"\n• Agile/Scrum\n• Git, GitHub\n• Jira\n• Trello\n• Discord\n• Slack"}
                    />
                </FadeInUpMotion>
                <FadeInUpMotion delay={1}>
                    <SkillCard
                        imgSrc={kuppi}
                        imgGifSrc={kuppi_gif}
                        imgAlt="pixel cup with sprouts and a heart"
                        barSrc={progressbar3}
                        barAlt="pixel progressbar almost full"
                        skillName="Screenwriting"
                        skillText={"With 6+ years of experience in various genres, I craft engaging and emotionally resonant stories that captivate audiences."}
                    />
                </FadeInUpMotion>
            </div>
        </>
    )
}

export default Skills