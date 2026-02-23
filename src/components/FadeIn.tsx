import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.16, 1, 0.3, 1] // ultra-smooth ease-out
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
