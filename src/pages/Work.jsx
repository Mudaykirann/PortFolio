import unboundmsg from '../assets/Screenshot (372).png';
import recipemsg from '../assets/Screenshotgood.png';
import notesy from '../assets/Screenshot (329).png';
import portfolio from '../assets/Screenshot (332).png';
import barber from '../assets/Screenshot (331).png'
import { Slide, Fade } from 'react-awesome-reveal';
import { FaGithub } from 'react-icons/fa';

const Works = () => {
    return (
        <section className="works container">
            <h2 className="title">Selected Work</h2>
            <div className="works">
                {/* UNBOUND Blog Application */}
                <Slide direction="down" damping={0.3} duration={1200}>
                    <Fade delay={300} duration={1000}>
                        <div className="work-box">
                            <div className="work-textbox">
                                <h3 className="work-name">UNBOUND Blog Application</h3>
                                <p className="work-text">
                                    A Blog application with clean, modern UI for seamless user experience.
                                </p>
                                <ul className="work-technologies">
                                    <li>React</li>
                                    <li>NodeJS</li>
                                    <li>ExpressJS</li>
                                    <li>MongoDB</li>
                                </ul>
                                <div className="work-links">
                                    <a
                                        href="https://github.com/Mudaykirann/UNBOUND_Blog_application"
                                        target="_blank"
                                        rel="noopener"
                                        className="link"
                                    >
                                        Explore this project
                                    </a>
                                    <a
                                        href="https://github.com/Mudaykirann/UNBOUND_Blog_application"
                                        target="_blank"
                                        rel="noopener"
                                        title="Source code"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                </div>
                            </div>
                            <picture className="work-img">
                                <img loading="lazy" className='image' src={unboundmsg} alt="UNBOUND" />
                                <div className='img-overlay'>
                                    <p><a href='/' target='_blank'>Deploy in Progress</a></p>
                                </div>
                            </picture>
                        </div>
                    </Fade>
                </Slide>

                {/* Recipe Finder */}
                <Slide direction="down" damping={0.3} duration={1200}>
                    <Fade delay={300} duration={1000}>
                        <div className="work-box">
                            <div className="work-textbox">
                                <h3 className="work-name">A Recipe Finder</h3>
                                <p className="work-text">
                                    A ReactJS application built with modern web technologies for smooth performance.
                                </p>
                                <ul className="work-technologies">
                                    <li>React</li>
                                    <li>CSS</li>
                                    <li>Router Dom</li>
                                </ul>
                                <div className="work-links">
                                    <a
                                        href="https://github.com/Mudaykirann/GOODFOOD_APP"
                                        target="_blank"
                                        rel="noopener"
                                        className="link"
                                    >
                                        Explore this project
                                    </a>
                                    <a
                                        href="https://github.com/Mudaykirann/GOODFOOD_APP/"
                                        target="_blank"
                                        rel="noopener"
                                        title="Source code"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                </div>
                            </div>
                            <picture className="work-img">
                                <img className='image' loading="lazy" src={recipemsg} alt="Recipe Finder" />
                                <div className='img-overlay'>
                                    <p><a href='https://goodfood01.netlify.app/' target='_blank'>Go Live</a></p>
                                </div>
                            </picture>
                        </div>
                    </Fade>
                </Slide>




                {/* Notesy */}
                <Slide direction="down" damping={0.3} duration={1200}>
                    <Fade delay={200} duration={1000}>
                        <div className="work-box">
                            <div className="work-textbox">
                                <h3 className="work-name">Notesy</h3>
                                <p className="work-text">
                                    A web application which organizes and manages our personal notes.
                                </p>
                                <ul className="work-technologies">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                                <div className="work-links">
                                    <a
                                        href="https://github.com/Mudaykirann/Fav-Projects/tree/master/Notes-Taking-App"
                                        target="_blank"
                                        rel="noopener"
                                        className="link"
                                    >
                                        Explore this project
                                    </a>
                                    <a
                                        href="https://github.com/Mudaykirann/Fav-Projects/tree/master/Notes-Taking-App"
                                        target="_blank"
                                        rel="noopener"
                                        title="Source code"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                </div>
                            </div>
                            <picture className="work-img">
                                <img className='image' loading="lazy" src={notesy} alt="Notesy" />
                                <div className='img-overlay'>
                                    <p><a href='https://notestakingjs.netlify.app/' target='_blank'>Go Live</a></p>
                                </div>
                            </picture>
                        </div>
                    </Fade>
                </Slide>

                {/* Portfolio Template */}
                <Slide direction="down" damping={0.3} duration={1200}>
                    <Fade delay={200} duration={1000}>
                        <div className="work-box">
                            <div className="work-textbox">
                                <h3 className="work-name">portfolio.template</h3>
                                <p className="work-text">
                                    A free to use, minimal and accessible portfolio template for developers.
                                </p>
                                <ul className="work-technologies">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                                <div className="work-links">
                                    <a
                                        href="https://github.com/Mudaykirann/uday_kiran"
                                        target="_blank"
                                        rel="noopener"
                                        className="link"
                                    >
                                        Explore this project
                                    </a>
                                    <a
                                        href="https://github.com/Mudaykirann/uday_kiran/"
                                        target="_blank"
                                        rel="noopener"
                                        title="Source code"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                </div>
                            </div>
                            <picture className="work-img">
                                <img loading="lazy" src={portfolio} alt="Portfolio Template" />
                                <div className='img-overlay'>
                                    <p><a href='https://uday-kiran.vercel.app//' target='_blank'>Go Live</a></p>
                                </div>
                            </picture>
                        </div>
                    </Fade>
                </Slide>

                {/* Barber Website */}
                <Slide direction="down" damping={0.3} duration={1200}>
                    <Fade delay={200} duration={1000}>
                        <div className="work-box">
                            <div className="work-textbox">
                                <h3 className="work-name">Barber Website</h3>
                                <p className="work-text">
                                    Designed and developed a visually appealing and user-friendly barber website.
                                </p>
                                <ul className="work-technologies">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                                <div className="work-links">
                                    <a
                                        href="https://github.com/Mudaykirann/barber-Website"
                                        target="_blank"
                                        rel="noopener"
                                        className="link"
                                    >
                                        Explore this project
                                    </a>
                                    <a
                                        href="https://github.com/Mudaykirann/barber-Website"
                                        target="_blank"
                                        rel="noopener"
                                        title="Source code"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                </div>
                            </div>
                            <picture className="work-img">
                                <img loading="lazy" src={barber} alt="Barber Website" />
                                <div className='img-overlay'>
                                    <p><a href='https://ramubarberwebsite.netlify.app/' target='_blank'>Go Live</a></p>
                                </div>
                            </picture>
                        </div>
                    </Fade>
                </Slide>
            </div>
        </section>
    );
};

export default Works;
