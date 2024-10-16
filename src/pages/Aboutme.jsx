import { FaExpandAlt } from "react-icons/fa"
import { useState } from "react";
import ReachifyModal from "../components/ReachifyModel";
import BsketHuntModel from "../components/BsketHuntModel";
function Aboutme() {
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    return (
        <>
            <section className="container">
                <div className="abt-container">
                    <h1 className="abt-head">Get to Know Me.</h1>
                    <p className="abt-txt">
                        I am a Full Stack Web Developer specializing in building user-friendly websites and web applications that drive product success. My expertise lies in front-end technologies such as HTML, CSS, and JavaScript, complemented by frameworks like React and Tailwind CSS for modern, responsive designs. Since I began my development journey on Developing an E-commerce Project , I have completed various projects, ranging from personal blogs to extensive e-commerce platforms. I pride myself on my attention to detail and my ability to solve complex challenges effectively. Additionally, I have experience with back-end development using Node.js and Express.js, allowing me to create cohesive and functional solutions. I am committed to continuous learning and staying updated with the latest web development trends. Feel free to explore my projects below, and connect with me on LinkedIn for insights and discussions related to web development.
                    </p>
                    <div>
                        <p className="abt-txt">Solving over 100+ coding challenges on <span><a style={{ color: 'blue' }} href="https://leetcode.com/u/codemaddy18/" target="_blank">LeetCode</a></span> and  <span><a style={{ color: 'blue' }} href="https://www.geeksforgeeks.org/user/udaykiran001/" target="_blank">GeeksforGeeks</a></span> has sharpened my problem-solving skills and deepened my understanding of data structures and algorithms</p>

                    </div>

                </div>
                <div className="abt-work">
                    <div className="experience">
                        <h2 className="abt-title">Experience</h2>
                        <div className="job">
                            <div className="job-profile">
                                <h3><a href="https://www.linkedin.com/company/reachifyinnovations/posts/?feedView=all" target="_blank">Reachify.Marketing</a></h3>
                                <div className="job-role">
                                    <p>FullStack WebDev Intern</p>
                                    <FaExpandAlt className="model-open" size={12} onClick={() => setShowModal(true)} />
                                </div>
                            </div>
                            <div className="job-duration">
                                <p>Apr 24 - Jun 24</p>
                            </div>
                        </div>

                        <ReachifyModal showModal={showModal} setShowModal={setShowModal} />
                        <div className="job">
                            <div className="job-profile">
                                <h3><a href="https://www.linkedin.com/company/baskethunt-pvt-ltd/posts/?feedView=all" target="_blank">BasketHunt pvt.ltd</a></h3>
                                <div className="job-role">
                                    <p>WebDev Intern</p>
                                    <FaExpandAlt className="model-open" size={12} onClick={() => setShowModal1(true)} />
                                </div>
                            </div>
                            <div className="job-duration">
                                <p>Nov 23 - Jan 24</p>
                            </div>
                        </div>

                        <BsketHuntModel showModal1={showModal1} setShowModal1={setShowModal1} />
                    </div>
                    <div className="education">
                        <h2 className="abt-title">Education</h2>
                        <div className="educ">
                            <div className="educ-name">
                                <h3>SV Engineering College</h3>
                                <p>Tirupathi | 85%</p>
                            </div>
                            <div className="educ-duration">
                                <p>2021 - 2025</p>
                            </div>
                        </div>
                        <div className="educ">
                            <div className="educ-name">
                                <h3>Chaitanya Junior College</h3>
                                <p>Vijayawada | 97%</p>
                            </div>
                            <div className="educ-duration">
                                <p>2019 - 2021</p>
                            </div>
                        </div>
                        <div className="educ">
                            <div className="educ-name">
                                <h3>Target E/M High School</h3>
                                <p>Tadipatri | 10.0</p>
                            </div>
                            <div className="educ-duration">
                                <p>2018 - 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutme
