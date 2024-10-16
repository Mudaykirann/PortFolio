import { Zoom, Bounce } from 'react-awesome-reveal';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaJava, FaPython, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiNestjs, SiPostgresql, SiMysql, SiVercel, SiNetlify } from 'react-icons/si';

const Toolkit = () => {
    return (
        <section className="container">
            <h2 className="title">My Toolkit</h2>
            <div className="skill_icons">
                <Zoom delay={100} duration={500} cascade damping={0.2}>
                    <p className="skill_icon" title="HTML"><Bounce><FaHtml5 size={52} /></Bounce></p>
                    <p className="skill_icon" title="CSS"><Bounce><FaCss3Alt size={52} /></Bounce></p>
                    <p className="skill_icon" title="JS"><Bounce><FaJs size={52} /></Bounce></p>
                    <p className="skill_icon" title="TailwindCss"><Bounce><SiTailwindcss size={52} /></Bounce></p>
                    <p className="skill_icon" title="Bootstrap"><Bounce><FaBootstrap size={52} /></Bounce></p>
                    <p className="skill_icon" title="React"><Bounce><FaReact size={52} /></Bounce></p>
                    <p className="skill_icon" title="NodeJS"><Bounce><FaNodeJs size={52} /></Bounce></p>
                    <p className="skill_icon" title="ExpressJS"><Bounce><SiExpress size={52} /></Bounce></p>
                    <p className="skill_icon" title="MongoDB"><Bounce><SiMongodb size={52} /></Bounce></p>
                    <p className="skill_icon" title="NestJS"><Bounce><SiNestjs size={52} /></Bounce></p>
                    <p className="skill_icon" title="Postgresql"><Bounce><SiPostgresql size={52} /></Bounce></p>
                    <p className="skill_icon" title="Mysql"><Bounce><SiMysql size={52} /></Bounce></p>
                    <p className="skill_icon" title="Java"><Bounce><FaJava size={52} /></Bounce></p>
                    <p className="skill_icon" title="Python"><Bounce><FaPython size={52} /></Bounce></p>
                    <p className="skill_icon" title="Github"><Bounce><FaGithub size={48} /></Bounce></p>
                    <p className="skill_icon" title="Vercel"><Bounce><SiVercel size={48} /></Bounce></p>
                    <p className="skill_icon" title="Netlify"><Bounce><SiNetlify size={52} /></Bounce></p>
                </Zoom>
            </div>
        </section>
    );
};

export default Toolkit;
