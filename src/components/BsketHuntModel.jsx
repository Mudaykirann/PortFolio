// Modal.js

import { motion } from "framer-motion";
import { IoMdCloseCircle } from "react-icons/io";

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modal = {
    hidden: {
        opacity: 0,
        y: "-100vh",
    },
    visible: {
        opacity: 1,
        y: "0",
        transition: { duration: 0.5 },
    },
};

const BsketHuntModel = ({ showModal1, setShowModal1 }) => {
    return (
        <>
            {showModal1 && (
                <motion.div
                    className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    onClick={() => setShowModal1(false)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Slight dark overlay
                        backdropFilter: "blur(10px)", // Blurred background
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <motion.div
                        className="modal"
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        style={{
                            padding: "30px",
                            borderRadius: "15px",
                            textAlign: "center",
                            backgroundColor: "#000",
                            backdropFilter: "blur(30px)",
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                            zIndex: 1001,
                        }}
                    >
                        <ul className="job-res" style={{ color: "white" }}>
                            <li className="job-res_text">
                                Contributed to the development of a responsive and user-friendly luggage storage website using React.
                            </li>
                            <li className="job-res_text">
                                Started as a Web Developer Intern at BasketHunt and advanced to the position of Subject Matter Expert (SME).
                            </li>
                            <li className="job-res_text">
                                Incorporated responsive design techniques to ensure seamless experiences across all devices.
                            </li>
                            <li className="job-res_text">
                                Ensured cross-browser compatibility for consistent performance across platforms.
                            </li>
                        </ul>
                        <button
                            className="model-close"
                            onClick={() => setShowModal1(false)}
                            style={{ marginTop: "10px" }}
                        >
                            <IoMdCloseCircle size={32} color="#fff" />
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default BsketHuntModel;
