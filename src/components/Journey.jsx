import React from 'react'
import FadeInUpMotion from '../components/FadeInUpMotion';

export const Journey = () => {
    return (
        <div className="journey-container">
            <section className="journey" >
                <FadeInUpMotion>
                    <h2>Journey so far...</h2>
                </FadeInUpMotion>
                <FadeInUpMotion delay={0.2}>
                    <h4>Education</h4>
                </FadeInUpMotion>
                <FadeInUpMotion delay={0.4}>
                    <p>React and Drupal - Business College Helsinki</p>
                    <p>BA (hons) Filmmaking and Screenwriting - The University of West of Scotland</p>
                    <p>Game Design - Helsingin Evankelinen Opisto</p>
                    <p>Film & TV - Voionmaan Opisto</p>
                </FadeInUpMotion>

            </section>
        </div>
    )
}
