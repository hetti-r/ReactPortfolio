import { motion } from 'framer-motion';
import React from 'react';
import ParticleEffect from './ParticleEffect';

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
            style={{ position: 'relative' }}
        >
            {children}
            <ParticleEffect />
        </motion.div>
    );
};

export default PageWrapper;