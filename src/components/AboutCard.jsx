import React, { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

const AboutCard = () => {
    const controls = useAnimation();
    const location = useLocation();
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-100px",
        once: true
    });

    useEffect(() => {
        // Start animation when component mounts or comes into view
        if (isInView || location.state?.fromProjects) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.8,
                    ease: "easeInOut"
                }
            });
            // Scroll to the target section if coming from projects
            if (location.state?.fromProjects && location.state.targetSection) {
                const element = document.getElementById(location.state.targetSection);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
            }
        }
    }, [isInView, controls, location]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={controls}
            transition={{
                duration: 0.8,
                ease: "easeInOut",
                type: "spring",
                bounce: 0.05,
                delay: 0.1,
                damping: 29,
            }}>
            <div className="about-card">
                <div className="header">
                    <div className="top">
                        <div className="title">
                            <p id="title2">⋆˚｡⊹ about_me.txt ୨ৎ</p>
                        </div>
                        <div className="symbols">

                            <span className="material-symbols-outlined">
                                more_horiz
                            </span>
                        </div>
                    </div>
                    <div className='about-content'>
                        <p>I’m a screenwriter & game/web developer based in Helsinki, Finland. I'm currently studyin full-stack development in Business College Helsinki. I love everything games and animation related and these interests have led me to work on various projects during the years. <br /><br />
                            Recently, I’ve been expanding my skills in web development, diving into UI/UX design, front-end development and game programming. My goal is to merge storytelling, design, and technology to create compelling interactive experiences.</p>
                        <img className="about-pic" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/pilvet.png" alt="pixel clouds and stars" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutCard