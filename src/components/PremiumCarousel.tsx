import { useState, useEffect, useCallback } from 'react';
import './PremiumCarousel.css';

const items = [
    { src: '/assets/smarthome.jpg', title: 'Smart Home Automation' },
    { src: '/assets/ai camera.png', title: 'AI CCTV Camera' },
    { src: '/assets/multiroomaudiosystem.png', title: 'Multiroom Audio' },
    { src: '/assets/access control.png', title: 'Access Control' },
    { src: '/assets/doorlock.jpg', title: 'Smart Door Lock' },
    { src: '/assets/gate automation.jpg', title: 'Gate Automation' },
    { src: '/assets/video door phone system.png', title: 'Video Door Phone' },
    { src: '/assets/intrusion alarm.png', title: 'Intrusion Alarm' },
    { src: '/assets/networking and wifi.png', title: 'Networking & WiFi' },
    { src: '/assets/curtain and blinds automation.png', title: 'Curtain Automation' },
    { src: '/assets/smart shutter automation.png', title: 'Shutter Automation' },
    { src: '/assets/automatic boom barrier.png', title: 'Boom Barrier' },
    { src: '/assets/sprinkler automation.png', title: 'Sprinkler Automation' }
];

export default function PremiumCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const nextImage = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    }, []);

    const prevImage = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }, []);

    useEffect(() => {
        let animationFrameId: number;
        let lastTime = performance.now();

        const loop = (currentTime: number) => {
            if (currentTime - lastTime >= 3000) {
                nextImage();
                lastTime = currentTime;
            }
            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(animationFrameId);
    }, [nextImage]);

    const getPositionClass = (index: number) => {
        const diff = (index - activeIndex + items.length) % items.length;
        if (diff === 0) return 'active-slide';
        if (diff === 1) return 'next-slide';
        if (diff === 2) return 'next-next-slide';
        if (diff === items.length - 2) return 'prev-prev-slide';
        if (diff === items.length - 1) return 'prev-slide';
        return 'hidden-slide';
    };

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextImage();
        } else if (isRightSwipe) {
            prevImage();
        }
    };

    return (
        <div
            className="premium-carousel-wrapper"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="premium-carousel-slider">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`premium-carousel-card ${getPositionClass(index)}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div className="premium-card-inner">
                            <img src={item.src} alt={item.title} loading="lazy" />
                            <div className="premium-card-title">{item.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
