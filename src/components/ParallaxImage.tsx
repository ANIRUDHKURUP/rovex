import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    parallaxOffset?: number; // percentage movement, max 10%
}

export default function ParallaxImage({ src, alt, className = '', parallaxOffset = 10 }: ParallaxImageProps) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Calculate the y transform based on offset percentage
    const y = useTransform(scrollYProgress, [0, 1], [`-${parallaxOffset}%`, `${parallaxOffset}%`]);

    return (
        <div ref={ref} style={{ overflow: 'hidden', height: '100%', width: '100%', position: 'relative' }} className={className}>
            <motion.img
                src={src}
                alt={alt}
                style={{
                    y,
                    height: `${100 + parallaxOffset * 2}%`,
                    width: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: `-${parallaxOffset}%`
                }}
                loading="lazy"
            />
        </div>
    );
}
