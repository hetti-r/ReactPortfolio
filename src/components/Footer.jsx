import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <section id="footercontainer">
                <div className="footer-wrap">
                    <h4>Contact Me</h4>
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

                        <a href="https://artstation.com/yourprofile" className="social-link">
                            <i className="fab fa-artstation"></i>
                            <span>ArtStation</span>
                        </a>
                    </div>
                </div>
            </section>

            <small id="bottom">&copy; Hetti Rönnemaa {currentYear}</small>
        </footer>
    )
}

export default Footer