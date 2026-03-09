import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    parallaxOffset?: number;
    priority?: boolean;
}

export default function ParallaxImage({
    src,
    alt,
    className = '',
    parallaxOffset = 10,
    priority = false,
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [`-${parallaxOffset}%`, `${parallaxOffset}%`]);

    return (
        <div
            ref={ref}
            style={{ overflow: 'hidden', height: '100%', width: '100%', position: 'relative' }}
            className={className}
        >
            <motion.img
                src={src}
                alt={alt}
                style={{
                    y,
                    height: `${100 + parallaxOffset * 2}%`,
                    width: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: `-${parallaxOffset}%`,
                    willChange: 'transform',
                }}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={priority ? 'high' : 'low'}
            />
        </div>
    );
}
