import React from 'react'
import FadeInUpMotion from '../components/FadeInUpMotion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <section id="footercontainer">
                <div className="footer-wrap">
                    <FadeInUpMotion amount={0.5}>
                        <h4>Contact Me</h4>
                    </FadeInUpMotion>
                    <FadeInUpMotion delay={0.4}>
                        <div className="social-links">
                            <a href="mailto:hetti.ronnemaa@gmail.com" className="social-link">
                                <i className="fas fa-envelope"></i>
                                <span>Email</span>
                            </a>

                            <a href="https://github.com/hetti-r" className="social-link">
                                <i className="fab fa-github"></i>
                                <span>GitHub</span>
                            </a>

                            <a href="https://www.linkedin.com/in/hetti-r%C3%B6nnemaa-30986016b/" className="social-link">
                                <i className="fab fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>

                            <a href="https://www.artstation.com/hettironnemaa" className="social-link">
                                <i className="fab fa-artstation"></i>
                                <span>ArtStation</span>
                            </a>
                        </div>
                    </FadeInUpMotion>
                </div>
            </section>
            <div className='footer-bottom'>
                <small>&copy; Hetti Rönnemaa {currentYear}</small>
            </div>
        </footer>
    )
}

export default Footer