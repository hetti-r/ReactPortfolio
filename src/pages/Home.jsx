import React from 'react'

const Home = () => {
  return (
    <>
        
          
    <main>

      <section id="projects">
            <h2>Projects</h2>
          <div className="boxcontainer">

            <div className="box">
              <img className="projectimg" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/project1.png" alt="Pixel Clown game scene" />
              <h4>Farthabet</h4>
              <p>Farthabet is a 2D reaction game where the player must enter given letters as quickly as possible to appease the school master of the Clown School. The game was made for the Global Game Jam 2024 where I worked as a 2D graphics artist in a team.</p>
              <p><a href="https://lennysmithgames.itch.io/clown-className-1-farthabet">See more</a></p>
            </div>

            <div className="box">
              <img className="projectimg" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/Project2.png" alt="Snowy scenery with a yeti" />
              <h4>Yeti Ski</h4>
              <p>Yeti Ski is a procedurally generated skiing game where the player jumps over obstacles as a yeti fleeing from the approaching avalanche. I worked as a 2D/concept artist and also did rigging and animating for this project in GamePro study program.</p>
              <p><a href="https://h3tt1.itch.io/yeti-ski">See more</a></p>
            </div>

            <div className="box">
              <img className="projectimg" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/Project3.png" alt="Funny looking dodo birds" />
              <h4>Dodo Sapiens</h4>
              <p>Dodo Sapiens was a final game project for my year of game studies in HEO academy. I worked as a game and level designer as well as an animator and 2D artist. Dodo Sapiens is a time limited game with a collect and drop - mechanics.</p>
              <p><a href="https://youtu.be/rYB4JmqTs7k">See more</a></p>
            </div>

          </div>
      </section>

      <div className="aboutme">
        <section id="aboutme">
          <img className="pic1" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/pilvet.png"
          alt="pixel clouds and stars"/>
            <h2>About Me</h2>
            <p>
              I’m a screenwriter & game developer based in Helsinki, Finland. I'm currently studyin full-stack development in Business College Helsinki. I love everything games and animation related and these interests have led me to work on various projects during the years. I appreciate working with all kinds of people and I have an ability to see the different strengths people posses. I'm good at team building and I tend to encourage and inspire other people. While working in a team I'm also keen on open dialogue and transparency. My current goal is to learn professional level coding skills in web development. I'm also making a progress in narrative game design and creating a visual style.
            </p>
      </section>
      </div>

      <section id="skills">
          <h2>Skills</h2>
          <div className="skillbox-container">
            <div className="skillbox">
              <img className="skillbox-img" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/cat.png" alt="sleepy pixel cat" />
              <img className="skillbox-bar" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/4progressbar.png" alt="pixel progressbar half full" />
              <h5>Game Design</h5>
            </div>
            <div className="skillbox">
              <img className="skillbox-img" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/floppy.png" alt="pixel floppy disc" />
              <img className="skillbox-bar" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/2progressbar.png" alt="pixel progressbar half full" />
              <h5>HTML&CSS</h5>
            </div>
            <div className="skillbox">
              <img className="skillbox-img" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/folder.png" alt="pixel folder with flowers" />
              <img className="skillbox-bar" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/5progressbar.png" alt="pixel progressbar quite empty" />
              <h5>Javascript</h5>
            </div>
            <div className="skillbox">
              <img className="skillbox-img" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/kone.png" alt="pixel computer with a face" />
              <img className="skillbox-bar" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/progressbar.png" alt="pixel progressbar quite empty" />
              <h5>PHP</h5>
            </div>
            <div className="skillbox">
              <img className="skillbox-img" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/heart.png" alt="pixel crystal heart" />
              <img className="skillbox-bar" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/4progressbar.png" alt="pixel progressbar half full" />
              <h5>Art</h5>
            </div>
            <div className="skillbox">
              <img className="skillbox-img" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/kuppi.png" alt="pixel cup with sprouts and a heart" />
              <img className="skillbox-bar" src="https://raw.githubusercontent.com/hetti-r/hetti-r.github.io/main/ICONS/3progressbar.png" alt="pixel progressbar almost full" />
              <h5>Screenwriting</h5>
            </div>
            
          </div>
      </section>

    </main>
    </>
  )
}

export default Home