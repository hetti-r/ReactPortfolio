import { motion } from 'framer-motion';

const FadeInUpMotion = ({ children, delay = 0.1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeInOut",
                type: "spring",
                bounce: 0.05,
                delay: delay,
                damping: 29,
            }}
            viewport={{
                once: true,
                amount: 0.1,
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInUpMotion;