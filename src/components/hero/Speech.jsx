import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Speech = () => {
    return (
        <motion.div
            className="bubbleContainer"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
        >
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        "Hi there! Glad you stopped by.",
                        1000,
                        "explore my work and let’s build something amazing together!",
                        1000,
                    ]}
                    wrapper="span"
                    speed={40}
                    deletionSpeed={60}
                    // omitDeletionAnimation
                    repeat={Infinity}
                />
            </div>
            <img src="/man.png" alt="" />
        </motion.div>
    );
};
export default Speech;