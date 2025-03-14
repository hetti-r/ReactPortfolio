import React from 'react'

const AboutCard = () => {
    return (
        <div className="about-card">
            <div className="header">
                <div className="top">
                    <div className="circle">
                        <span className="red circle2"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow circle2"></span>
                    </div>
                    <div className="circle">
                        <span className="green circle2"></span>
                    </div>
                    <div className="title">
                        <p id="title2">about_me.txt</p>
                    </div>
                </div>
                <div className='about-content'>
                    <p>I’m a screenwriter & game developer based in Helsinki, Finland. I'm currently studyin full-stack development in Business College Helsinki. I love everything games and animation related and these interests have led me to work on various projects during the years. <br /><br />I appreciate working with all kinds of people and I have an ability to see the different strengths people posses. I'm good at team building and I tend to encourage and inspire other people. While working in a team I'm also keen on open dialogue and transparency. <br /><br />My current goal is to learn professional level coding skills in web development. I'm also making a progress in narrative game design and creating a visual style.</p>
                    <img className="picAbout" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/pilvet.png" alt="pixel clouds and stars" />
                </div>
            </div>
        </div>
    )
}

export default AboutCard