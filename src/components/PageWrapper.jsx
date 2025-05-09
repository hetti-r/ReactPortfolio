import { motion } from 'framer-motion';
import React from 'react';

const PageWrapper = ({ children }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                filter: 'blur(10px)'
            }}
            animate={{
                opacity: 1,
                filter: 'blur(0px)'
            }}
            exit={{
                opacity: 0,
                filter: 'blur(10px)'
            }}
            transition={{
                duration: 1,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper