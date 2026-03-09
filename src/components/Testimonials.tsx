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
        text: "Rovex provides top-quality services with outstanding quality. The setup was clean, fast, and the system works flawlessly every day. Definitely a five-star service.⭐",
        author: "Anirudh",
        role: "Client",
        initials: "A",
        bgColor: "#004B7A",
        textColor: "white"
    },
    {
        id: 3,
        text: "Rovex completely transformed our home into a smart living space. The installation was smooth and the system works flawlessly. Highly professional team.",
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
        text: "The automation solutions from Rovex are reliable and easy to use. Everything from lighting to security is now just a tap away.",
        author: "Lijuraj Thuvassery",
        role: "Client",
        initials: "LT",
        bgColor: "#8B1E40",
        textColor: "white"
    },
    {
        id: 7,
        text: "Rovex brought a new level of convenience to our home. The automation system works perfectly and the support team is great.",
        author: "anand sasidharan",
        role: "Client",
        initials: "AS",
        bgColor: "#FFFFFF",
        textColor: "#000000"
    },
    {
        id: 8,
        text: "The team at Rovex was knowledgeable and very professional. They explained every feature clearly and installed the system perfectly. Our home now feels more secure and modern.",
        mobileText: "The team Rovex was knowledgeable and very professional. They installed the system perfectly. Our home now feels more secure and modern.",
        author: "Safeer 07",
        role: "Client",
        initials: "S0",
        bgColor: "#004B7A",
        textColor: "white"
    },
    {
        id: 9,
        text: "Professional, reliable, and innovative. Rovex provided a seamless smart automation experience for our office.",
        author: "Lpcowork Legacy",
        role: "Client",
        initials: "LL",
        bgColor: "#E10600",
        textColor: "white"
    },
    {
        id: 10,
        text: "Excellent service and attention to detail. Rovex delivered exactly what they promised and made our home smarter and safer.",
        author: "Sajin P",
        role: "Client",
        initials: "SP",
        bgColor: "#8B1E40",
        textColor: "white"
    },
    {
        id: 11,
        text: "We love the convenience Rovex brought to our home. Controlling everything from our phone is amazing.",
        author: "ATHUL Op",
        role: "Client",
        initials: "AO",
        bgColor: "#121212",
        textColor: "white"
    },
    {
        id: 12,
        text: "Rovex delivered a reliable and well-designed automation setup for our property. The quality of work and attention to detail were impressive. We are very happy with the result.",
        mobileText: "Rovex delivered a reliable automation setup for our property. The quality of work and attention to detail were impressive.",
        author: "Sarun K",
        role: "Client",
        initials: "SK",
        bgColor: "#FFFFFF",
        textColor: "#000000"
    },
    {
        id: 13,
        text: "From consultation to installation, the Rovex team was extremely supportive. The technology is impressive and very user-friendly.",
        author: "ajal k",
        role: "Client",
        initials: "AK",
        bgColor: "#004B7A",
        textColor: "white"
    },
    {
        id: 14,
        text: "Our office security and access control system by Rovex works flawlessly. Highly recommended. Great technology and even better service.",
        author: "VivekAsend Vivekpp",
        role: "Client",
        initials: "VV",
        bgColor: "#8B1E40",
        textColor: "white"
    },
    {
        id: 15,
        text: "From consultation to installation, Rovex handled everything efficiently. The automation system is simple to use and works exactly as promised. A great choice for smart living solutions.",
        mobileText: "From consultation to installation, Rovex handled everything efficiently. They works exactly as promised.",
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

    // Auto play "one after the other" using requestAnimationFrame
    useEffect(() => {
        let animationFrameId: number;
        let lastTime = performance.now();

        const loop = (currentTime: number) => {
            if (currentTime - lastTime >= 4000) {
                nextReview();
                lastTime = currentTime;
            }
            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(animationFrameId);
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
                        {reviewsData.map((review, index) => {
                            const diff = (index - activeIndex + reviewsData.length) % reviewsData.length;
                            // Pre-render the active, next, next-next, prev, and prev-prev cards only.
                            // The rest are strictly unmounted to save DOM memory and repaints on mobile.
                            const isVisible = diff === 0 || diff === 1 || diff === 2 || diff === reviewsData.length - 2 || diff === reviewsData.length - 1;

                            if (!isVisible) return null;

                            const positionClass = getPositionClass(index);
                            return (
                                <div
                                    key={review.id}
                                    className={`testimonial-card ${positionClass}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="stars">
                                        {"★★★★★"}
                                    </div>
                                    <p className="testimonial-text">
                                        {'mobileText' in review ? (
                                            <>
                                                <i className="testimonial-text-desktop">{review.text}</i>
                                                <i className="testimonial-text-mobile">{review.mobileText}</i>
                                            </>
                                        ) : (
                                            <i>{review.text}</i>
                                        )}
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
                            );
                        })}
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
