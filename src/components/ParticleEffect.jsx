import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ParticleEffect = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const particles = [...Array(5)].map((_, i) => {
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
                    x: [startX, startX * 0.5, 0],
                    y: [
                        randomY,
                        randomY + (Math.random() * 100 - 50),
                        randomY + (Math.random() * 100 - 50)
                    ]
                }}
                transition={{
                    duration: 8,
                    ease: "linear",
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 1
                }}
            />
        );
    });

    return (
        <div className="particles-container" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            overflow: 'hidden'
        }}>
            {particles}
        </div>
    );
};

export default ParticleEffect;