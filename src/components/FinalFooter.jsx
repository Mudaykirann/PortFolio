
import { FaDiscord, FaLinkedin, FaTelegram } from 'react-icons/fa';

const FinalFooter = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>UDAY KIRAN.</h4>
                    <p className='loc'>Student</p>
                </div>
                <div className="footer-column">
                    <h4>Location.</h4>
                    <p className='loc'>Tadipatri | Tirupathi</p>
                </div>
                <div className="footer-column">
                    <div className='footer-links'>
                        <p><a href="https://www.linkedin.com/in/uday-kiran-a0105b228/" target="_blank"><FaLinkedin size={20} /></a></p>
                        <p><a href="https://t.me/@aizensos1?text=Hello%20there!" target="_blank"><FaTelegram size={20} /></a></p>
                        <p><a href="https://discord.com/users/codemaddy." target="_blank"><FaDiscord size={24} /></a></p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Made with ❤️ by KIRAN.</p>
            </div>
        </footer>
    );
};

export default FinalFooter;
