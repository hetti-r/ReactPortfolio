import React from 'react'

const AboutCard = () => {
    return (
        <div className="about-card">
            <div className="header">
                <div className="top">
                    <div className="title">
                        <p id="title2">⋆˚｡⊹ᰔ about_me.txt ୨ৎ</p>
                    </div>
                    <div className="symbols">

                        <span className="material-symbols-outlined">
                            more_horiz
                        </span>
                    </div>
                </div>
                <div className='about-content'>
                    <p><br />I’m a screenwriter & game developer based in Helsinki, Finland. I'm currently studyin full-stack development in Business College Helsinki. I love everything games and animation related and these interests have led me to work on various projects during the years. <br /><br />
                        Recently, I’ve been expanding my skills in web development, diving into UI/UX design, front-end development and game programming. My goal is to merge storytelling, design, and technology to create compelling interactive experiences.</p>
                    <img className="about-pic" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/pilvet.png" alt="pixel clouds and stars" />
                </div>
            </div>
        </div>
    )
}

export default AboutCard