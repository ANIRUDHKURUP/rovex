import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import './Testimonials.css';
import { FadeIn } from './FadeIn';

const reviewsData = [
    {
        id: 1,
        text: "Rovex is the best home automotion company with my personal experience. Thankyou team.",
        author: "Dinil dinesh",
        role: "Client",
        initials: "DD",
        bgColor: "#8B1E40",
        textColor: "white"
    },
    {
        id: 2,
        text: "Home Automation, Hotel Automation, Gate Automation, Curtain Automation,",
        author: "Danish KT",
        role: "Client",
        initials: "DK",
        bgColor: "#004B7A",
        textColor: "white"
    },
    {
        id: 3,
        text: "Best home automation company",
        author: "Neema Shonithlal",
        role: "Client",
        initials: "NS",
        bgColor: "#FFFFFF",
        textColor: "#000000"
    },
    {
        id: 4,
        text: "Thank you team Rovex Automation for upgrading my apple imac",
        author: "Amaan",
        role: "Client",
        initials: "A",
        bgColor: "#E10600",
        textColor: "white"
    },
    {
        id: 5,
        text: "Highly recommended for all home automation needs.",
        author: "Asritha P T",
        role: "Client",
        initials: "AP",
        bgColor: "#121212",
        textColor: "white"
    },
    {
        id: 6,
        text: "good service",
        author: "Lijuraj Thuvassery",
        role: "Client",
        initials: "LT",
        bgColor: "#8B1E40",
        textColor: "white"
    },
    {
        id: 7,
        text: "Good work ..",
        author: "anand sasidharan",
        role: "Client",
        initials: "AS",
        bgColor: "#FFFFFF",
        textColor: "#000000"
    },
    {
        id: 8,
        text: "Very professional execution and great service.",
        author: "Safeer 07",
        role: "Client",
        initials: "S0",
        bgColor: "#004B7A",
        textColor: "white"
    },
    {
        id: 9,
        text: "Premium quality work.",
        author: "Lpcowork Legacy",
        role: "Client",
        initials: "LL",
        bgColor: "#E10600",
        textColor: "white"
    },
    {
        id: 10,
        text: "Excellent products and great support.",
        author: "Sajin P",
        role: "Client",
        initials: "SP",
        bgColor: "#8B1E40",
        textColor: "white"
    },
    {
        id: 11,
        text: "Great experience with their automation systems.",
        author: "ATHUL Op",
        role: "Client",
        initials: "AO",
        bgColor: "#121212",
        textColor: "white"
    },
    {
        id: 12,
        text: "Impressive service and response time.",
        author: "Sarun K",
        role: "Client",
        initials: "SK",
        bgColor: "#FFFFFF",
        textColor: "#000000"
    },
    {
        id: 13,
        text: "Great automation options.",
        author: "ajal k",
        role: "Client",
        initials: "AK",
        bgColor: "#004B7A",
        textColor: "white"
    },
    {
        id: 14,
        text: "Reliable team and robust technology.",
        author: "VivekAsend Vivekpp",
        role: "Client",
        initials: "VV",
        bgColor: "#8B1E40",
        textColor: "white"
    },
    {
        id: 15,
        text: "Very nice work overall.",
        author: "Dilsha Naduthodi",
        role: "Client",
        initials: "DN",
        bgColor: "#E10600",
        textColor: "white"
    }
];

export default function Testimonials() {
    // Array of reviews (we duplicate them slightly to ensure smooth infinite if needed, 
    // but 3 is enough for a standard 3-visible carousel if we wrap indices)
    const [activeIndex, setActiveIndex] = useState(1);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum distance required for swipe
    const minSwipeDistance = 50;

    const nextReview = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % reviewsData.length);
    }, []);

    const prevReview = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
    }, []);

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEndHandler = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextReview();
        }
        if (isRightSwipe) {
            prevReview();
        }
    };

    // Auto play "one after the other"
    useEffect(() => {
        const timer = setInterval(() => {
            nextReview();
        }, 4000);
        return () => clearInterval(timer);
    }, [nextReview]);

    const reviewUrl = "https://www.google.com/search?sca_esv=e40f04d2a6b22062&hl=en-IN&sxsrf=ANbL-n74_k_MFv9_hD8lq2RsQP6f4S1dKQ:1772121322475&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZz31Vh4QGtCVICOr4bt70WzVNbwoYKzshN0FrESC4oe7ISq5cVdjjJWDO0bdQdsN5-Mbvn68LqDVS2X-DWh7Vx3xs-3zkhLfGcxLLK615CjT55x7IRnMlzCycWWqMNp6pwLAzw%3D&q=Rovex+Automation+LLP+%7C+Home+Automation+Company+Reviews&sa=X&ved=2ahUKEwic_bKvwveSAxUgcGwGHUwUNVYQ0bkNegQILRAH&biw=1540&bih=742&dpr=1.25";

    const getPositionClass = (index: number) => {
        const diff = (index - activeIndex + reviewsData.length) % reviewsData.length;
        if (diff === 0) return 'active-slide';
        if (diff === 1) return 'next-slide';
        if (diff === reviewsData.length - 1) return 'prev-slide';
        return 'hidden-slide';
    };

    return (
        <section id="reviews" className="testimonials-section section">
            <div className="container">
                <FadeIn>
                    <h2 className="title-large mb-8" style={{ textAlign: 'center', fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginTop: '-30px' }}>
                        Happy Customers
                    </h2>
                </FadeIn>
                <FadeIn className="testimonials-wrapper">
                    <button className="nav-btn prev" onClick={prevReview} aria-label="Previous Review">
                        <ChevronLeft size={24} />
                    </button>

                    <div
                        className="testimonials-slider"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEndHandler}
                    >
                        {reviewsData.map((review, index) => (
                            <div
                                key={review.id}
                                className={`testimonial-card ${getPositionClass(index)}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="stars">
                                    {"★★★★★"}
                                </div>
                                <p className="testimonial-text">
                                    <i>{review.text}</i>
                                </p>
                                <div className="testimonial-author">
                                    <div
                                        className="avatar"
                                        style={{ backgroundColor: review.bgColor, color: review.textColor }}
                                    >
                                        {review.initials}
                                    </div>
                                    <div className="author-info">
                                        <h4>{review.author}</h4>
                                        <span>{review.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="nav-btn next" onClick={nextReview} aria-label="Next Review">
                        <ChevronRight size={24} />
                    </button>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="slider-dots mt-8">
                        {reviewsData.map((_, idx) => (
                            <button
                                key={idx}
                                className={`dot ${idx === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </FadeIn>

                <FadeIn delay={0.4} className="text-center mt-12">
                    <a
                        href={reviewUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-review"
                    >
                        REVIEW US <ExternalLink size={18} />
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}
