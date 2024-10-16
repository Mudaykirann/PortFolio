import { FaDiscord, FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa"

function Footerpage() {
    return (
        <section className="container touch">
            <h3>Get in Touch</h3>
            <p>I’m currently looking for a remote job or any new opportunities.
                Whether you have a project to discuss or just want to say hi, my inbox is open for all!</p>
            <div className="social-links">
                <a href="https://wa.me/+916301244145?text=Hello%20from%20our%20website!" target="_blank"><FaWhatsapp size={32} /></a>
                <a href="https://t.me/@aizensos1?text=Hello%20there!" target="_blank"><FaTelegram size={32} /></a>
                <a href="https://discord.com/users/codemaddy." target="_blank"><FaDiscord size={32} /></a>
                <a href="tel:+916301244145"><FaPhone size={26} /></a>
            </div>
        </section>
    )
}

export default Footerpage
