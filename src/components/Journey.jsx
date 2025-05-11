import React from 'react'
import FadeInUpMotion from '../components/FadeInUpMotion';

export const Journey = () => {
    return (
        <div className="journey-container">
            <section className="journey" >
                <FadeInUpMotion>
                    <h2>Journey so far...</h2>
                </FadeInUpMotion>

                <div className="journey-content">
                    <div className="journey-education">
                        <FadeInUpMotion delay={0.2}>
                            <h4>Education</h4>
                            <br />
                        </FadeInUpMotion>
                        <FadeInUpMotion delay={0.4}>
                            <div className="education-item">
                                <div className="timeline">2024-2025</div>
                                <div className="details">
                                    <h6>React and Drupal</h6>
                                    <p>Business College Helsinki</p>
                                </div>
                            </div>
                            <div className="education-item">
                                <div className="timeline">2014-2018</div>
                                <div className="details">
                                    <h6>BA (hons) Filmmaking and Screenwriting</h6>
                                    <p>The University of West of Scotland</p>
                                </div>
                            </div>
                            <div className="education-item">
                                <div className="timeline">2018-2019</div>
                                <div className="details">
                                    <h6>Game Design</h6>
                                    <p>Helsingin Evankelinen Opisto</p>
                                </div>
                            </div>
                            <div className="education-item">
                                <div className="timeline">2013-2014</div>
                                <div className="details">
                                    <h6>Film & TV</h6>
                                    <p>Voionmaan Opisto</p>
                                </div>
                            </div>
                        </FadeInUpMotion>
                    </div>
                    <div className="journey-work">
                        <FadeInUpMotion delay={0.6}>
                            <h4>Work Experience</h4>
                            <br />
                        </FadeInUpMotion>
                        <FadeInUpMotion delay={0.8}>
                            <div className="work-item">
                                <div className="timeline">2015-2022</div>
                                <div className="details">
                                    <h6>Screenwriter</h6>
                                    <p>Sun In The Eye Productions</p>
                                </div>
                            </div>
                            <div className="work-item">
                                <div className="timeline">2019</div>
                                <div className="details">
                                    <h6>Screenwriter & Animator</h6>
                                    <p>Platonic Partnership</p>
                                </div>
                            </div>
                            <div className="work-item">
                                <div className="timeline">2018</div>
                                <div className="details">
                                    <h6>Editor Assistant</h6>
                                    <p>Aitomedia</p>
                                </div>
                            </div>
                        </FadeInUpMotion>
                    </div>
                </div>
            </section>
        </div>
    )
}
