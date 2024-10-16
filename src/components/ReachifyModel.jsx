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

const ReachifyModal = ({ showModal, setShowModal }) => {
    return (
        <>
            {showModal && (
                <motion.div
                    className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    onClick={() => setShowModal(false)}
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
                            width: "80%",
                            backgroundColor: "#000",
                            backdropFilter: "blur(30px)",
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                            zIndex: 1001,
                        }}
                    >
                        <ul className="job-res" style={{ color: "white" }}>
                            <li className="job-res_text">Engineered a website using React to support marketing initiatives, enhancing user experience by 40% and reducing page load time by 50% across all devices.</li>
                            <li className="job-res_text">Collaborated with project managers and the development team to brainstorm new ideas for improved project outcomes.</li>
                            <li className="job-res_text">Managed a cross-functional team of 4 members (product, web, support) and coordinated the CRM platform.</li>
                            <li className="job-res_text">Worked as a Web Development Intern at Reachify, utilizing CSS, React, Node.js, Express.js, and MongoDB to develop solutions.</li>
                        </ul>
                        <button
                            className="model-close"
                            onClick={() => setShowModal(false)}
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

export default ReachifyModal;
