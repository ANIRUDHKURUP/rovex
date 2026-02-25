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
    { src: '/assets/curtain and blinds automation.png', title: 'Curtains & Blinds Automation' },
    { src: '/assets/smart shutter automation.png', title: 'Shutter Automation' },
    { src: '/assets/automatic boom barrier.png', title: 'Boom Barrier' },
    { src: '/assets/sprinkler automation.png', title: 'Sprinkler Automation' }
];

export default function PremiumCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextImage();
        }, 3000);
        return () => clearInterval(timer);
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

    return (
        <div className="premium-carousel-wrapper">
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
