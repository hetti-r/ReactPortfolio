import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ParticleEffect = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    const particles = [...Array(5)].map((_, i) => {
        // Start from right side of the screen
        const startX = dimensions.width;
        const randomY = Math.random() * dimensions.height;

        return (
            <motion.div
                key={i}
                className="particle"
                initial={{
                    opacity: 0,
                    scale: 0,
                    x: startX,
                    y: randomY
                }}
                animate={{
                    opacity: [0.8, 0.8, 0],
                    scale: [0, 2, 1],
                    x: [
                        startX,
                        startX * 0.5, // Move to middle
                        0 // End at left side
                    ],
                    y: [
                        randomY,
                        randomY + (Math.random() * 100 - 50), // Slight vertical movement
                        randomY + (Math.random() * 100 - 50)
                    ]
                }}
                transition={{
                    duration: 8, // Increased duration for slower movement
                    ease: "linear", // Linear movement for smoother flow
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 1
                }}
            />
        );
    });

    return (
        <div className="particles-container">
            {particles}
        </div>
    );
};

const FadeInUpMotion = ({ children, delay = 0.1 }) => {
    return (
        <motion.div
            className="fade-container"
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
            <ParticleEffect />
        </motion.div>
    );
};

export default FadeInUpMotion;