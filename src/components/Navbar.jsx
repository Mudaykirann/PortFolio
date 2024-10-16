
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import pdf from '../assets/Mangala_Uday_Kiran-Resume.pdf (1).pdf'

function Navbar() {

    return (
        <nav>
            <div className="name"><a href="mailto:udaykirankirru2003@gmail.com?subject=find%20Application&body=Hello Uday Kiran,%20can%20we%20discuss%20?%20." className="mail-icon"><IoMail size={16} /></a><p className="original"><a href="mailto:udaykirankirru2003@gmail.com?subject=find%20Application&body=Hello Uday Kiran,%20can%20we%20discuss%20?%20.">udaykirankirru2003@gmail.com</a></p></div>
            <div className="menubar">
                <p className="line"><a href={pdf} download target="_blank"><p><FiPrinter size={20} color="#d1d5db" /></p></a></p>
                <p className="line"><a href="https://www.linkedin.com/in/uday-kiran-a0105b228/" target="_blank"><FaLinkedin color="#d1d5db" size={20} /></a></p>
                <p className="line"><a href="https://github.com/Mudaykirann" target="_blank"><FaGithub color="#d1d5db" size={20} /></a></p>
            </div>
        </nav>
    )
}

export default Navbar
