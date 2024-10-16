import { FaReact } from "react-icons/fa"
import profile1 from '../assets/IMG-20240512-WA0001.jpg'
import { TbBrandFramerMotion } from "react-icons/tb";

function Home() {
    return (
        <>
            <section className="container hero">
                <div className="header">
                    <header>
                        <div className="profile" >
                            <img src={profile1} className="centered-image" />
                        </div>
                        <h1>UDAY KIRAN 👋</h1>
                        <div className="header_occ">
                            <p>
                                <div className="inner-headings">
                                    <span>
                                        Frontend Developer <br />
                                        Full stack Developer <br />
                                        Self Learner <br />
                                        Problem Solver <br />
                                    </span>
                                </div>
                            </p>
                        </div>
                    </header>
                    <p>I design and code beautifully simple things, and I love what I do</p>
                </div>
                <div className="built">
                    <p> Built with</p>
                    <p><FaReact size={22} /></p>
                    <p>|</p>
                    <p><TbBrandFramerMotion size={22} /></p>

                </div>
            </section>
        </>
    )
}

export default Home
