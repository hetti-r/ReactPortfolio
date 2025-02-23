import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <section id="formcontainer">
                <div className="form-wrap">
                    <h4>Contact Me</h4>
                    <div class="social-links">
                        <a href="mailto:hetti.ronnemaa@gmail.com" class="social-link">
                            <i class="fas fa-envelope"></i>
                            <span>Email</span>
                        </a>

                        <a href="https://github.com/hetti-r" class="social-link">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>

                        <a href="https://www.linkedin.com/in/hetti-r%C3%B6nnemaa-30986016b/" class="social-link">
                            <i class="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://artstation.com/yourprofile" class="social-link">
                            <i class="fab fa-artstation"></i>
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