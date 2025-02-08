import React from 'react'

const Footer = () => {
const currentYear = new Date().getFullYear();

return (
    <footer>
        <section id="formcontainer">
            <div className="form-wrap">
                <h4>Contact Me</h4>
                <form id="contact-me">
                    <div className="form-group">
                        <label htmlFor="firstname">Your name</label>
                        <input type="text" name="firstname" id="firstname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your email</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <input type="text" name="message" id="message" />
                    </div>

                    <button type="submit">SEND MESSAGE</button>
                </form>
            </div>
        </section>

        <small id="bottom">&copy; Hetti Rönnemaa {currentYear}</small>
    </footer>
)
}

export default Footer