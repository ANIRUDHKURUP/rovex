import { useEffect, useRef } from 'react';
import { FadeIn } from '../components/FadeIn';
import ParallaxImage from '../components/ParallaxImage';
import { MessageCircle, MapPin, Home as HomeIcon, Cctv, Laptop, BellRing, Fingerprint } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import PremiumCarousel from '../components/PremiumCarousel';
import './Home.css';

export default function Home() {
    const tickerRef = useRef<HTMLDivElement>(null);
    const isInteracting = useRef(false);

    useEffect(() => {
        let animationId: number;
        const scrollStep = 0.5;

        const autoScroll = () => {
            if (tickerRef.current && !isInteracting.current) {
                const el = tickerRef.current;

                // On mobile devices where this element is visible, do the auto-scroll
                if (window.innerWidth <= 768) {
                    el.scrollLeft += scrollStep;
                    // The items are duplicated exactly once, so halfway is scrollWidth / 2
                    // We need to account for slight rounding errors in measuring width
                    if (el.scrollLeft >= el.scrollWidth / 2) {
                        el.scrollLeft -= el.scrollWidth / 2;
                    }
                }
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        animationId = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(animationId);
    }, []);

    const servicesList = [
        {
            title: 'Home Automation',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontStyle: 'normal' }}>
                        Make life easier, one smart upgrade at a time.
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* Wireless Automation */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>Wireless Automation</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Flexible, Smart &amp; Effortless</span>
                            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 64 64" fill="none">
                                    {/* Phone */}
                                    <rect x="6" y="18" width="18" height="28" rx="3" stroke="#5b9bc8" strokeWidth="2.5" fill="none" />
                                    <line x1="6" y1="40" x2="24" y2="40" stroke="#5b9bc8" strokeWidth="2" />
                                    <circle cx="15" cy="43.5" r="1.2" fill="#5b9bc8" />
                                    {/* House */}
                                    <polygon points="32,14 52,30 48,30 48,46 36,46 36,36 44,36 44,30 32,20 20,30" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    {/* WiFi arcs */}
                                    <path d="M36 10 Q44 6 52 10" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M38 7 Q44 4 50 7" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                    <circle cx="44" cy="13" r="1.5" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Control via App or Panel</span>
                        </div>
                        {/* Wired Automation */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>Wired Automation</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Stable, Reliable &amp; Seamless</span>
                            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 64 64" fill="none">
                                    {/* House */}
                                    <polygon points="32,10 54,28 50,28 50,50 14,50 14,28 10,28" stroke="#5b9bc8" strokeWidth="2.5" fill="none" />
                                    {/* Gear */}
                                    <circle cx="32" cy="36" r="6" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="32" cy="36" r="2" fill="#5b9bc8" />
                                    <line x1="32" y1="28" x2="32" y2="30" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="32" y1="42" x2="32" y2="44" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="24" y1="36" x2="26" y2="36" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="38" y1="36" x2="40" y2="36" stroke="#5b9bc8" strokeWidth="2" />
                                    {/* Plug wire */}
                                    <path d="M20 50 Q20 56 32 56 Q44 56 44 50" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <line x1="32" y1="56" x2="32" y2="60" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="29" y1="60" x2="35" y2="60" stroke="#5b9bc8" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Integrated Wired System</span>
                        </div>
                        {/* Presence Sensors */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>Presence Sensors</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Adaptive, &amp; Energy Efficient</span>
                            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 64 64" fill="none">
                                    {/* Sensor dome */}
                                    <path d="M20 28 Q20 16 32 16 Q44 16 44 28" stroke="#5b9bc8" strokeWidth="2.5" fill="rgba(91,155,200,0.2)" strokeLinecap="round" />
                                    <ellipse cx="32" cy="28" rx="12" ry="4" fill="#5b9bc8" opacity="0.5" />
                                    <circle cx="32" cy="26" r="3" fill="#5b9bc8" />
                                    {/* Detection rays */}
                                    <line x1="32" y1="30" x2="18" y2="46" stroke="#5b9bc8" strokeWidth="1.5" opacity="0.6" />
                                    <line x1="32" y1="30" x2="32" y2="50" stroke="#5b9bc8" strokeWidth="1.5" opacity="0.6" />
                                    <line x1="32" y1="30" x2="46" y2="46" stroke="#5b9bc8" strokeWidth="1.5" opacity="0.6" />
                                    {/* Person */}
                                    <circle cx="44" cy="44" r="3" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                    <line x1="44" y1="47" x2="44" y2="54" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="40" y1="50" x2="48" y2="50" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="44" y1="54" x2="41" y2="60" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="44" y1="54" x2="47" y2="60" stroke="#5b9bc8" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Motion &amp; Climate Control</span>
                        </div>
                    </div>
                </>
            ),
            img: '/assets/smarthome.jpg'
        },
        {
            title: 'Ai-CCTV System',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Smarter &nbsp;•&nbsp; Faster &nbsp;•&nbsp; Reliable
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem', justifyContent: 'center' }}>
                        {/* 24/7 Monitoring */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* CCTV Camera body */}
                                    <rect x="8" y="24" width="32" height="18" rx="4" stroke="#5b9bc8" strokeWidth="2.5" fill="none" />
                                    <circle cx="24" cy="33" r="6" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="24" cy="33" r="2.5" fill="#5b9bc8" />
                                    {/* Lens */}
                                    <rect x="40" y="28" width="16" height="10" rx="2" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    {/* Mount */}
                                    <line x1="20" y1="24" x2="20" y2="18" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="14" y1="18" x2="26" y2="18" stroke="#5b9bc8" strokeWidth="2" />
                                    {/* Signal */}
                                    <path d="M52 26 Q58 33 52 40" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>24/7 Monitoring</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Always watching, no blind spots.</span>
                        </div>
                        {/* Instant Alerts */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(200,80,80,0.12)', border: '2px solid rgba(200,80,80,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Alarm bell dome */}
                                    <path d="M16 38 Q16 18 32 18 Q48 18 48 38" stroke="#c85050" strokeWidth="2.5" fill="rgba(200,80,80,0.15)" strokeLinecap="round" />
                                    <ellipse cx="32" cy="38" rx="16" ry="5" fill="#c85050" opacity="0.4" />
                                    <line x1="32" y1="43" x2="32" y2="48" stroke="#c85050" strokeWidth="2.5" />
                                    <line x1="27" y1="48" x2="37" y2="48" stroke="#c85050" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="32" y1="18" x2="32" y2="14" stroke="#c85050" strokeWidth="2" />
                                    {/* Flash rays */}
                                    <line x1="20" y1="14" x2="17" y2="10" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="44" y1="14" x2="47" y2="10" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="14" y1="24" x2="10" y2="22" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="50" y1="24" x2="54" y2="22" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Instant Alerts</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Intrusion & unauthorized parking detection.</span>
                        </div>
                        {/* AI Detection */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Brain outline */}
                                    <path d="M22 44 Q12 40 14 30 Q14 22 22 20 Q24 14 32 14 Q40 14 42 20 Q50 22 50 30 Q52 40 42 44" stroke="#5b9bc8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                                    <line x1="32" y1="44" x2="32" y2="50" stroke="#5b9bc8" strokeWidth="2" />
                                    {/* Circuit lines */}
                                    <line x1="32" y1="20" x2="32" y2="28" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="26" y1="28" x2="38" y2="28" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="26" y1="28" x2="26" y2="36" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="38" y1="28" x2="38" y2="36" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <circle cx="26" cy="36" r="2" fill="#5b9bc8" />
                                    <circle cx="38" cy="36" r="2" fill="#5b9bc8" />
                                    <circle cx="32" cy="28" r="2" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>AI Detection</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Analyzes movements and unusual activity.</span>
                        </div>
                        {/* Smart Recognition */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Face */}
                                    <circle cx="22" cy="26" r="10" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="19" cy="24" r="1.5" fill="#5b9bc8" />
                                    <circle cx="25" cy="24" r="1.5" fill="#5b9bc8" />
                                    <path d="M19 29 Q22 32 25 29" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                    {/* Car */}
                                    <rect x="34" y="30" width="24" height="12" rx="3" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <path d="M38 30 L42 24 L52 24 L56 30" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="40" cy="42" r="3" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="52" cy="42" r="3" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    {/* License plate */}
                                    <rect x="42" y="33" width="8" height="5" rx="1" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Smart Recognition</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>People counting, vehicle & license plate tracking.</span>
                        </div>
                        {/* Traffic Insights */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Bar chart */}
                                    <rect x="10" y="38" width="10" height="16" rx="2" fill="#5b9bc8" opacity="0.6" />
                                    <rect x="26" y="28" width="10" height="26" rx="2" fill="#5b9bc8" opacity="0.8" />
                                    <rect x="42" y="16" width="10" height="38" rx="2" fill="#5b9bc8" />
                                    {/* Axis */}
                                    <line x1="8" y1="54" x2="56" y2="54" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="8" y1="14" x2="8" y2="54" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    {/* Trend line */}
                                    <path d="M15 46 Q31 36 47 24" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeDasharray="3 2" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Traffic Insights</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Understand visitor flow in real time.</span>
                        </div>
                    </div>
                </>
            ),
            img: '/assets/ai camera.png'
        },
        {
            title: 'Intrusion Alarms',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Security That Thinks for You
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* AI Threat Detection */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Shield */}
                                    <path d="M32 8 L52 16 L52 36 Q52 50 32 58 Q12 50 12 36 L12 16 Z" stroke="#5b9bc8" strokeWidth="2.5" fill="rgba(91,155,200,0.1)" />
                                    {/* Eye/radar inside */}
                                    <circle cx="32" cy="34" r="8" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="32" cy="34" r="3" fill="#5b9bc8" />
                                    <path d="M28 22 Q32 18 36 22" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>AI Threat Detection</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Identifies real threats instantly.</span>
                        </div>
                        {/* Smart Alerts */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(200,80,80,0.12)', border: '2px solid rgba(200,80,80,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    <path d="M16 38 Q16 18 32 18 Q48 18 48 38" stroke="#c85050" strokeWidth="2.5" fill="rgba(200,80,80,0.15)" strokeLinecap="round" />
                                    <ellipse cx="32" cy="38" rx="16" ry="5" fill="#c85050" opacity="0.4" />
                                    <line x1="32" y1="43" x2="32" y2="48" stroke="#c85050" strokeWidth="2.5" />
                                    <line x1="27" y1="48" x2="37" y2="48" stroke="#c85050" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="20" y1="14" x2="17" y2="10" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="44" y1="14" x2="47" y2="10" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="14" y1="24" x2="10" y2="22" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="50" y1="24" x2="54" y2="22" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Smart Alerts</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Real-time notifications when danger appears.</span>
                        </div>
                        {/* False Alarm Reduction */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    <path d="M22 44 Q12 40 14 30 Q14 22 22 20 Q24 14 32 14 Q40 14 42 20 Q50 22 50 30 Q52 40 42 44" stroke="#5b9bc8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                                    <line x1="32" y1="44" x2="32" y2="50" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="32" y1="20" x2="32" y2="28" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="26" y1="28" x2="38" y2="28" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="26" y1="28" x2="26" y2="36" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="38" y1="28" x2="38" y2="36" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <circle cx="26" cy="36" r="2" fill="#5b9bc8" />
                                    <circle cx="38" cy="36" r="2" fill="#5b9bc8" />
                                    <circle cx="32" cy="28" r="2" fill="#5b9bc8" />
                                    {/* Cross/check filter */}
                                    <line x1="22" y1="50" x2="28" y2="56" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="28" y1="50" x2="22" y2="56" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>False Alarm Reduction</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>AI filters harmless movements.</span>
                        </div>
                        {/* Live Verification */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Camera */}
                                    <rect x="6" y="20" width="28" height="20" rx="3" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="20" cy="30" r="5" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="20" cy="30" r="2" fill="#5b9bc8" />
                                    <rect x="34" y="24" width="12" height="8" rx="1.5" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    {/* Person silhouette */}
                                    <circle cx="50" cy="22" r="5" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <path d="M43 38 Q43 30 50 30 Q57 30 57 38" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    {/* Live dot */}
                                    <circle cx="10" cy="16" r="3" fill="#c85050" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Live Verification (IVaaS)</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>View live footage and respond immediately.</span>
                        </div>
                        {/* Proactive Security */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Shield with lightning bolt */}
                                    <path d="M32 8 L52 16 L52 36 Q52 50 32 58 Q12 50 12 36 L12 16 Z" stroke="#5b9bc8" strokeWidth="2.5" fill="rgba(91,155,200,0.1)" />
                                    {/* Lightning bolt */}
                                    <path d="M36 18 L28 34 L34 34 L28 50 L40 30 L34 30 Z" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Proactive Security</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>A system that thinks before it reacts.</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        Imagine a security system that not only detects threats but thinks before it reacts, ensuring you get a security system that's always thinking ahead.
                    </span>
                </>
            ),
            img: '/assets/intrusion alarm.png'
        },
        {
            title: 'Multi-room Audio',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Music That Moves With You
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* Whole-Home Sound */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* House */}
                                    <polygon points="32,10 54,28 50,28 50,52 14,52 14,28 10,28" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    {/* Music note inside */}
                                    <path d="M28 42 L28 30 L38 27 L38 39" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <circle cx="26" cy="42" r="3" fill="#5b9bc8" />
                                    <circle cx="36" cy="39" r="3" fill="#5b9bc8" />
                                    {/* Sound waves on sides */}
                                    <path d="M8 32 Q4 36 8 40" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <path d="M56 32 Q60 36 56 40" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Whole-Home Sound</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Music in every room.</span>
                        </div>
                        {/* Sync or Stream */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Left speaker */}
                                    <rect x="6" y="22" width="14" height="20" rx="3" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="13" cy="32" r="4" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="13" cy="32" r="1.5" fill="#5b9bc8" />
                                    {/* Right speaker */}
                                    <rect x="44" y="22" width="14" height="20" rx="3" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="51" cy="32" r="4" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="51" cy="32" r="1.5" fill="#5b9bc8" />
                                    {/* Music notes between */}
                                    <path d="M26 28 L26 22 L36 19 L36 25" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <circle cx="24" cy="28" r="2.5" fill="#5b9bc8" />
                                    <circle cx="34" cy="25" r="2.5" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Sync or Stream</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Play different or same music.</span>
                        </div>
                        {/* Smart Control */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Speaker */}
                                    <rect x="8" y="20" width="18" height="24" rx="3" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="17" cy="32" r="5" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="17" cy="32" r="2" fill="#5b9bc8" />
                                    {/* WiFi/control arcs */}
                                    <path d="M34 20 Q44 26 44 32 Q44 38 34 44" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M38 24 Q46 30 46 32 Q46 34 38 40" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                                    {/* Music note */}
                                    <path d="M50 18 L50 12 L58 10 L58 16" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <circle cx="48" cy="18" r="2.5" fill="#5b9bc8" />
                                    <circle cx="56" cy="16" r="2.5" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Smart Control</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Use your phone to control it all.</span>
                        </div>
                        {/* Live Streaming */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Phone */}
                                    <rect x="10" y="12" width="20" height="34" rx="3" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <line x1="10" y1="40" x2="30" y2="40" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <circle cx="20" cy="43" r="1.5" fill="#5b9bc8" />
                                    {/* Music note on phone */}
                                    <path d="M17 28 L17 22 L23 20 L23 26" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                    <circle cx="15.5" cy="28" r="2" fill="#5b9bc8" />
                                    <circle cx="21.5" cy="26" r="2" fill="#5b9bc8" />
                                    {/* WiFi waves from phone */}
                                    <path d="M34 22 Q40 26 40 32 Q40 38 34 42" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <path d="M38 18 Q48 24 48 32 Q48 40 38 46" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                                    {/* Live dot */}
                                    <circle cx="54" cy="16" r="3.5" fill="#c85050" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Live Verification (IVaaS)</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>View live footage and respond immediately.</span>
                        </div>
                        {/* Seamless Listening */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Headphones */}
                                    <path d="M16 32 Q16 16 32 16 Q48 16 48 32" stroke="#5b9bc8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                    <rect x="10" y="30" width="10" height="16" rx="5" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <rect x="44" y="30" width="10" height="16" rx="5" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    {/* Music note */}
                                    <path d="M28 50 L28 44 L36 41 L36 47" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <circle cx="26" cy="50" r="2.5" fill="#5b9bc8" />
                                    <circle cx="34" cy="47" r="2.5" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Seamless Listening</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Enjoy music anywhere in your home.</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        Let your entire home echo with music, vibrant and clear. Experience music like never before, no matter where you are in your home.
                    </span>
                </>
            ),
            img: '/assets/multiroomaudiosystem.png'
        },
        {
            title: 'Access Control',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Secure &nbsp;•&nbsp; Fast &nbsp;•&nbsp; Contactless
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* Face Recognition */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Face scan brackets */}
                                    <path d="M10 20 L10 10 L20 10" stroke="#5b9bc8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                    <path d="M44 10 L54 10 L54 20" stroke="#5b9bc8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                    <path d="M10 44 L10 54 L20 54" stroke="#5b9bc8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                    <path d="M44 54 L54 54 L54 44" stroke="#5b9bc8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                    {/* Face */}
                                    <circle cx="32" cy="30" r="12" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="28" cy="28" r="1.8" fill="#5b9bc8" />
                                    <circle cx="36" cy="28" r="1.8" fill="#5b9bc8" />
                                    <path d="M27 34 Q32 38 37 34" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    {/* Scan line */}
                                    <line x1="20" y1="30" x2="44" y2="30" stroke="#5b9bc8" strokeWidth="1" opacity="0.4" strokeDasharray="2 2" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Face Recognition</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Touchless and instant authentication.</span>
                        </div>
                        {/* AI Identification */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    <path d="M22 44 Q12 40 14 30 Q14 22 22 20 Q24 14 32 14 Q40 14 42 20 Q50 22 50 30 Q52 40 42 44" stroke="#5b9bc8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                                    <line x1="32" y1="44" x2="32" y2="50" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="32" y1="20" x2="32" y2="28" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="26" y1="28" x2="38" y2="28" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="26" y1="28" x2="26" y2="36" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="38" y1="28" x2="38" y2="36" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <circle cx="26" cy="36" r="2" fill="#5b9bc8" />
                                    <circle cx="38" cy="36" r="2" fill="#5b9bc8" />
                                    <circle cx="32" cy="28" r="2" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>AI Identification</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>High-accuracy user recognition.</span>
                        </div>
                        {/* Multi-Layer Security */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Stacked shields */}
                                    <path d="M32 10 L50 18 L50 34 Q50 46 32 54 Q14 46 14 34 L14 18 Z" stroke="#5b9bc8" strokeWidth="2.5" fill="rgba(91,155,200,0.08)" />
                                    <path d="M32 16 L46 22 L46 34 Q46 44 32 50 Q18 44 18 34 L18 22 Z" stroke="#5b9bc8" strokeWidth="1.8" fill="rgba(91,155,200,0.08)" />
                                    <path d="M32 22 L42 26 L42 34 Q42 42 32 46 Q22 42 22 34 L22 26 Z" stroke="#5b9bc8" strokeWidth="1.5" fill="rgba(91,155,200,0.15)" />
                                    {/* Checkmark */}
                                    <path d="M26 34 L30 38 L38 28" stroke="#5b9bc8" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Multi-Layer Security</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>RFID · PIN · Biometric options.</span>
                        </div>
                        {/* Entry Logs */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Clipboard */}
                                    <rect x="14" y="14" width="36" height="42" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <rect x="24" y="10" width="16" height="8" rx="2" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    {/* Checklist lines */}
                                    <line x1="22" y1="28" x2="42" y2="28" stroke="#5b9bc8" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="22" y1="36" x2="42" y2="36" stroke="#5b9bc8" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="22" y1="44" x2="36" y2="44" stroke="#5b9bc8" strokeWidth="1.8" strokeLinecap="round" />
                                    {/* Checkmarks */}
                                    <path d="M18 27 L20 29 L24 25" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 35 L20 37 L24 33" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Entry Logs</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Track every entry and exit.</span>
                        </div>
                        {/* Versatile Access */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Door */}
                                    <rect x="16" y="10" width="28" height="46" rx="2" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    {/* Door open crease */}
                                    <path d="M16 10 Q30 14 30 32 Q30 50 16 56" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    {/* Handle */}
                                    <circle cx="38" cy="33" r="2.5" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    {/* Checkmark/approved */}
                                    <circle cx="48" cy="18" r="8" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.15)" />
                                    <path d="M44 18 L47 21 L52 14" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Versatile Access</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Ideal for offices, homes, and secure areas.</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        No more keycards or PIN codes. Fast, reliable, and precise access control that works perfectly in offices, residences, and high-security areas.
                    </span>
                </>
            ),
            img: '/assets/access control.png'
        },
        {
            title: 'Digital Door Locks',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Security Meets Innovation
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* Multiple Unlock */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Fingerprint */}
                                    <path d="M20 32 Q20 20 32 20 Q44 20 44 32" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M24 32 Q24 24 32 24 Q40 24 40 32 Q40 38 32 42" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <path d="M28 32 Q28 28 32 28 Q36 28 36 32 Q36 36 32 38" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                    {/* Scan brackets */}
                                    <path d="M10 22 L10 14 L18 14" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M46 14 L54 14 L54 22" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M10 42 L10 50 L18 50" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M46 50 L54 50 L54 42" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Multiple Unlock</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Fingerprint, RFID, PIN, or Face Lock.</span>
                        </div>
                        {/* Video Doorbell */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Tablet/screen */}
                                    <rect x="14" y="10" width="28" height="40" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="14" y1="44" x2="42" y2="44" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <circle cx="28" cy="48" r="2" fill="#5b9bc8" />
                                    {/* Face on screen */}
                                    <circle cx="28" cy="28" r="9" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="25" cy="26" r="1.5" fill="#5b9bc8" />
                                    <circle cx="31" cy="26" r="1.5" fill="#5b9bc8" />
                                    <path d="M24 32 Q28 35 32 32" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                    {/* Camera dot top */}
                                    <circle cx="28" cy="14" r="2" fill="#5b9bc8" opacity="0.6" />
                                    {/* Live indicator */}
                                    <circle cx="46" cy="12" r="4" fill="#c85050" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Video Doorbell</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Camera and screen — see who's at the door.</span>
                        </div>
                        {/* Auto-Locking */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Lock body */}
                                    <rect x="16" y="30" width="32" height="24" rx="4" stroke="#5b9bc8" strokeWidth="2.5" fill="none" />
                                    {/* Lock shackle */}
                                    <path d="M22 30 L22 22 Q22 14 32 14 Q42 14 42 22 L42 30" stroke="#5b9bc8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                    {/* Keyhole */}
                                    <circle cx="32" cy="40" r="4" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <line x1="32" y1="44" x2="32" y2="49" stroke="#5b9bc8" strokeWidth="2.5" />
                                    {/* Auto arrow */}
                                    <path d="M46 10 Q54 16 50 24" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <polyline points="48,24 50,24 50,20" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Auto-Locking</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Auto-locking for peace of mind.</span>
                        </div>
                        {/* Battery Backup */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Battery */}
                                    <rect x="14" y="16" width="32" height="36" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="24" y1="16" x2="24" y2="12" stroke="#5b9bc8" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="40" y1="16" x2="40" y2="12" stroke="#5b9bc8" strokeWidth="2.5" strokeLinecap="round" />
                                    {/* Battery fill level */}
                                    <rect x="18" y="36" width="24" height="12" rx="2" fill="#5b9bc8" opacity="0.3" />
                                    {/* Lightning bolt */}
                                    <path d="M34 20 L28 34 L32 34 L28 48 L38 30 L34 30 Z" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Battery Backup</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Low battery indicators and emergency power.</span>
                        </div>
                        {/* Smart & Connected */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* House */}
                                    <polygon points="32,12 52,28 48,28 48,50 16,50 16,28 12,28" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    {/* Door */}
                                    <rect x="26" y="36" width="12" height="14" rx="1" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="35" cy="43" r="1.5" fill="#5b9bc8" />
                                    {/* WiFi arcs */}
                                    <path d="M22 18 Q32 12 42 18" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <path d="M25 14 Q32 9 39 14" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                    <circle cx="32" cy="20" r="2" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Smart & Connected</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Optional VDP and real-time visitor logs.</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        Say goodbye to keys and step into the future of home security with AI-powered digital smart locks.
                    </span>
                </>
            ),
            img: '/assets/doorlock.jpg'
        },
        {
            title: 'Gate Automation',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Secure &nbsp;•&nbsp; Convenient &nbsp;•&nbsp; Intelligent
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* Automatic Entry */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Gate posts */}
                                    <rect x="6" y="14" width="8" height="40" rx="2" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <rect x="50" y="14" width="8" height="40" rx="2" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    {/* Left gate panel (open/swung) */}
                                    <rect x="14" y="18" width="16" height="32" rx="2" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.1)" transform="skewX(-15)" />
                                    {/* Right gate panel */}
                                    <rect x="34" y="18" width="16" height="32" rx="2" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.1)" transform="skewX(15)" />
                                    {/* Bars on panels */}
                                    <line x1="20" y1="18" x2="20" y2="50" stroke="#5b9bc8" strokeWidth="1.5" opacity="0.5" />
                                    <line x1="44" y1="18" x2="44" y2="50" stroke="#5b9bc8" strokeWidth="1.5" opacity="0.5" />
                                    {/* Arrow indicating open */}
                                    <path d="M28 32 L36 32" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    <polyline points="33,29 36,32 33,35" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Automatic Entry</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Gate opens smoothly as you arrive.</span>
                        </div>
                        {/* Multiple Access */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Key */}
                                    <circle cx="20" cy="28" r="9" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <circle cx="20" cy="28" r="4" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <line x1="29" y1="34" x2="52" y2="50" stroke="#5b9bc8" strokeWidth="2.2" strokeLinecap="round" />
                                    <line x1="44" y1="44" x2="44" y2="50" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="50" y1="46" x2="50" y2="52" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    {/* Face scan mini */}
                                    <circle cx="46" cy="18" r="7" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="44" cy="17" r="1" fill="#5b9bc8" />
                                    <circle cx="48" cy="17" r="1" fill="#5b9bc8" />
                                    <path d="M43 21 Q46 23 49 21" stroke="#5b9bc8" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Multiple Access</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Face · Fingerprint RFID · QR · Password.</span>
                        </div>
                        {/* Remote Control */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Phone */}
                                    <rect x="16" y="10" width="22" height="38" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="16" y1="42" x2="38" y2="42" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <circle cx="27" cy="46" r="2" fill="#5b9bc8" />
                                    {/* Music note (IoT symbol) */}
                                    <path d="M22 28 L22 20 L32 17 L32 25" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <circle cx="20" cy="28" r="2.5" fill="#5b9bc8" />
                                    <circle cx="30" cy="25" r="2.5" fill="#5b9bc8" />
                                    {/* WiFi arcs */}
                                    <path d="M40 18 Q48 22 48 28 Q48 34 40 38" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M44 22 Q50 26 50 28 Q50 30 44 34" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Remote Control</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>IoT & GSM access from anywhere.</span>
                        </div>
                        {/* Safety Protection */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Shield */}
                                    <path d="M32 8 L52 16 L52 34 Q52 48 32 56 Q12 48 12 34 L12 16 Z" stroke="#5b9bc8" strokeWidth="2.5" fill="rgba(91,155,200,0.1)" />
                                    {/* Exclamation */}
                                    <line x1="32" y1="24" x2="32" y2="38" stroke="#5b9bc8" strokeWidth="3" strokeLinecap="round" />
                                    <circle cx="32" cy="44" r="2.5" fill="#5b9bc8" />
                                    {/* Side sparkle indicating alert */}
                                    <line x1="52" y1="20" x2="56" y2="16" stroke="#5b9bc8" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="54" y1="24" x2="58" y2="24" stroke="#5b9bc8" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="52" y1="28" x2="56" y2="32" stroke="#5b9bc8" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Safety Protection</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Prevents accidents and unauthorized entry.</span>
                        </div>
                        {/* Power Backup */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Clipboard/battery card */}
                                    <rect x="14" y="12" width="32" height="42" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <rect x="24" y="8" width="12" height="8" rx="2" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    {/* Battery icon inside */}
                                    <rect x="20" y="22" width="20" height="10" rx="2" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <line x1="40" y1="25" x2="43" y2="25" stroke="#5b9bc8" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="40" y1="29" x2="43" y2="29" stroke="#5b9bc8" strokeWidth="2.5" strokeLinecap="round" />
                                    <rect x="21" y="23" width="12" height="8" rx="1" fill="#5b9bc8" opacity="0.4" />
                                    {/* Lightning bolt */}
                                    <path d="M35 38 L29 48 L33 48 L29 58 L39 44 L35 44 Z" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Power Backup</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Operates even during power outages.</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        Imagine pulling up to your home and your gate opens automatically— no buttons, no waiting.
                    </span>
                </>
            ),
            img: '/assets/gate automation.jpg'
        },
        {
            title: 'Video Door Phone',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Instant Verification &nbsp;•&nbsp; Enhanced Security
                    </span>
                    <div className="vdp-mobile-swap" style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* Live Video */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Monitor/screen */}
                                    <rect x="8" y="18" width="38" height="26" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="22" y1="44" x2="22" y2="50" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="42" y1="44" x2="42" y2="50" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="16" y1="50" x2="48" y2="50" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    {/* Camera on top */}
                                    <rect x="20" y="12" width="14" height="10" rx="2" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="27" cy="17" r="2.5" fill="#5b9bc8" opacity="0.7" />
                                    {/* WiFi arcs */}
                                    <path d="M48 22 Q54 26 54 31 Q54 36 48 40" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <path d="M52 25 Q57 29 57 31 Q57 33 52 37" stroke="#5b9bc8" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.6" />
                                    {/* Live dot */}
                                    <circle cx="14" cy="23" r="3" fill="#c85050" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Live Video</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>See who is at your door anytime.</span>
                        </div>
                        {/* Two-Way Communication */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Microphone */}
                                    <rect x="24" y="10" width="16" height="26" rx="8" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <path d="M16 32 Q16 46 32 46 Q48 46 48 32" stroke="#5b9bc8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                                    <line x1="32" y1="46" x2="32" y2="54" stroke="#5b9bc8" strokeWidth="2.2" />
                                    <line x1="24" y1="54" x2="40" y2="54" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    {/* Speech bubble dots */}
                                    <circle cx="48" cy="14" r="6" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="46" cy="14" r="1" fill="#5b9bc8" />
                                    <circle cx="48" cy="14" r="1" fill="#5b9bc8" />
                                    <circle cx="50" cy="14" r="1" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Two-Way Communication</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Talk with visitors instantly.</span>
                        </div>
                        {/* Remote Access */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Phone */}
                                    <rect x="16" y="10" width="22" height="38" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="16" y1="42" x2="38" y2="42" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <circle cx="27" cy="46" r="2" fill="#5b9bc8" />
                                    {/* Music note (representing media/access) */}
                                    <path d="M22 28 L22 20 L32 17 L32 25" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <circle cx="20" cy="28" r="2.5" fill="#5b9bc8" />
                                    <circle cx="30" cy="25" r="2.5" fill="#5b9bc8" />
                                    {/* WiFi arcs right */}
                                    <path d="M40 18 Q48 22 48 28 Q48 34 40 38" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M44 22 Q50 26 50 28 Q50 30 44 34" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Remote Access</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Monitor and control from anywhere.</span>
                        </div>
                        {/* Smart Integration */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Tablet */}
                                    <rect x="6" y="14" width="22" height="32" rx="3" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="17" cy="42" r="1.5" fill="#5b9bc8" />
                                    {/* Phone */}
                                    <rect x="36" y="18" width="16" height="28" rx="3" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="44" cy="43" r="1.5" fill="#5b9bc8" />
                                    {/* Lock/integration icon between */}
                                    <line x1="28" y1="30" x2="36" y2="30" stroke="#5b9bc8" strokeWidth="1.8" strokeLinecap="round" />
                                    <circle cx="32" cy="30" r="4" stroke="#5b9bc8" strokeWidth="1.8" fill="rgba(91,155,200,0.2)" />
                                    <path d="M30 30 L32 28 L34 30" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                    {/* Person icon on tablet */}
                                    <circle cx="17" cy="24" r="4" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                    <path d="M11 36 Q11 30 17 30 Q23 30 23 36" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Smart Integration</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Works with intercoms, phones, and security systems.</span>
                        </div>
                        {/* SIP Technology */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Globe */}
                                    <circle cx="32" cy="32" r="22" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    {/* Latitude lines */}
                                    <path d="M10 32 Q22 26 32 32 Q42 38 54 32" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                    <path d="M10 32 Q22 38 32 32 Q42 26 54 32" stroke="#5b9bc8" strokeWidth="1" fill="none" opacity="0.4" />
                                    {/* Longitude line */}
                                    <path d="M32 10 Q20 22 20 32 Q20 42 32 54" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                    <path d="M32 10 Q44 22 44 32 Q44 42 32 54" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                    {/* Location pin */}
                                    <circle cx="44" cy="16" r="6" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.2)" />
                                    <circle cx="44" cy="15" r="2" fill="#5b9bc8" />
                                    <path d="M44 21 Q44 25 44 26" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>SIP Technology</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Crystal-clear audio video over IP networks.</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        See who's at your door from anywhere. With remote access, real-time monitoring, and two-way communication, you can greet visitors, grant access, or secure your premises effortlessly—whether you're at home, in the office, or on the go.
                    </span>
                </>
            ),
            img: '/assets/video door phone system.png'
        },
        {
            title: 'Networking and Wi-Fi',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Data Network &amp; Server Room Setup
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* High-Speed Performance */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Two servers connected */}
                                    <rect x="6" y="24" width="18" height="16" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <circle cx="10" cy="32" r="2" fill="#5b9bc8" />
                                    <line x1="16" y1="28" x2="22" y2="28" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="16" y1="36" x2="22" y2="36" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <rect x="40" y="24" width="18" height="16" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <circle cx="44" cy="32" r="2" fill="#5b9bc8" />
                                    <line x1="50" y1="28" x2="56" y2="28" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="50" y1="36" x2="56" y2="36" stroke="#5b9bc8" strokeWidth="1.5" />
                                    {/* Connection line with speed arrows */}
                                    <line x1="24" y1="32" x2="40" y2="32" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    <polyline points="30,28 34,32 30,36" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    {/* WiFi arcs top */}
                                    <path d="M24 16 Q32 10 40 16" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <path d="M27 12 Q32 7 37 12" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                    <circle cx="32" cy="18" r="2" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>High-Speed Performance</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Ultra-fast network with seamless connectivity.</span>
                        </div>
                        {/* Advanced Security */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Shield */}
                                    <path d="M32 8 L52 16 L52 34 Q52 48 32 56 Q12 48 12 34 L12 16 Z" stroke="#5b9bc8" strokeWidth="2.5" fill="rgba(91,155,200,0.1)" />
                                    {/* Exclamation */}
                                    <line x1="32" y1="24" x2="32" y2="36" stroke="#5b9bc8" strokeWidth="3" strokeLinecap="round" />
                                    <circle cx="32" cy="42" r="2.5" fill="#5b9bc8" />
                                    {/* Lock underneath */}
                                    <rect x="26" y="46" width="12" height="8" rx="2" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                    <path d="M28 46 L28 44 Q28 40 32 40 Q36 40 36 44 L36 46" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Advanced Security</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Enterprise-grade protection for your data.</span>
                        </div>
                        {/* Scalability */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Phone/tablet */}
                                    <rect x="18" y="16" width="20" height="32" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="18" y1="42" x2="38" y2="42" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <circle cx="28" cy="46" r="1.5" fill="#5b9bc8" />
                                    {/* Music note inside */}
                                    <path d="M24 32 L24 24 L34 21 L34 29" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <circle cx="22" cy="32" r="2.5" fill="#5b9bc8" />
                                    <circle cx="32" cy="29" r="2.5" fill="#5b9bc8" />
                                    {/* WiFi expanding arcs */}
                                    <path d="M40 22 Q48 28 48 32 Q48 36 40 42" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M44 18 Q54 26 54 32 Q54 38 44 46" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Scalability</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Easily expand and adapt to growing needs.</span>
                        </div>
                        {/* Centralized Management */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Cloud */}
                                    <path d="M16 38 Q10 38 10 30 Q10 22 18 22 Q18 14 28 14 Q36 14 38 22 Q46 22 46 30 Q46 38 40 38 Z" stroke="#5b9bc8" strokeWidth="2.2" fill="rgba(91,155,200,0.1)" />
                                    {/* Gear inside cloud */}
                                    <circle cx="28" cy="30" r="5" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="28" cy="30" r="2" fill="#5b9bc8" />
                                    <line x1="28" y1="23" x2="28" y2="25" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="28" y1="35" x2="28" y2="37" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="21" y1="30" x2="23" y2="30" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="33" y1="30" x2="35" y2="30" stroke="#5b9bc8" strokeWidth="1.5" />
                                    {/* Lines going down (management) */}
                                    <line x1="28" y1="38" x2="28" y2="46" stroke="#5b9bc8" strokeWidth="1.8" />
                                    <line x1="20" y1="46" x2="36" y2="46" stroke="#5b9bc8" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="20" y1="46" x2="20" y2="52" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="28" y1="46" x2="28" y2="52" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="36" y1="46" x2="36" y2="52" stroke="#5b9bc8" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Centralized Management</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Cloud-based control and real-time monitoring.</span>
                        </div>
                        {/* Reliable Wi-Fi */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Mesh network nodes */}
                                    <circle cx="32" cy="20" r="4" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.2)" />
                                    <circle cx="16" cy="38" r="4" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.2)" />
                                    <circle cx="48" cy="38" r="4" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.2)" />
                                    <circle cx="24" cy="52" r="4" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.2)" />
                                    <circle cx="40" cy="52" r="4" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.2)" />
                                    {/* Mesh connections */}
                                    <line x1="32" y1="24" x2="16" y2="34" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="32" y1="24" x2="48" y2="34" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="16" y1="42" x2="24" y2="48" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="48" y1="42" x2="40" y2="48" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="20" y1="38" x2="44" y2="38" stroke="#5b9bc8" strokeWidth="1.5" />
                                    {/* WiFi arc top */}
                                    <path d="M24 14 Q32 8 40 14" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <path d="M27 10 Q32 6 37 10" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Reliable Wi-Fi</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Intelligent Wi-Fi 6 mesh system for unbeatable coverage.</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        No downtime. No connectivity issues. Our infrastructure is expertly designed to keep your business running at peak efficiency.
                    </span>
                </>
            ),
            img: '/assets/networking and wifi.png'
        },
        {
            title: 'Curtain Automation',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Smart &nbsp;•&nbsp; Convenient &nbsp;•&nbsp; Effortless
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* Motorized Control */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Curtain rail */}
                                    <line x1="8" y1="12" x2="56" y2="12" stroke="#5b9bc8" strokeWidth="2.5" strokeLinecap="round" />
                                    {/* Left curtain panel */}
                                    <rect x="8" y="12" width="18" height="38" rx="2" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.1)" />
                                    <line x1="14" y1="12" x2="14" y2="50" stroke="#5b9bc8" strokeWidth="1.2" opacity="0.5" />
                                    <line x1="20" y1="12" x2="20" y2="50" stroke="#5b9bc8" strokeWidth="1.2" opacity="0.5" />
                                    {/* Right curtain panel */}
                                    <rect x="38" y="12" width="18" height="38" rx="2" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.1)" />
                                    <line x1="44" y1="12" x2="44" y2="50" stroke="#5b9bc8" strokeWidth="1.2" opacity="0.5" />
                                    <line x1="50" y1="12" x2="50" y2="50" stroke="#5b9bc8" strokeWidth="1.2" opacity="0.5" />
                                    {/* Gear control */}
                                    <circle cx="32" cy="38" r="7" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="32" cy="38" r="2.5" fill="#5b9bc8" />
                                    <line x1="32" y1="29" x2="32" y2="31" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="32" y1="45" x2="32" y2="47" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="23" y1="38" x2="25" y2="38" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="39" y1="38" x2="41" y2="38" stroke="#5b9bc8" strokeWidth="2" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Motorized Control</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Open and close with a button tap.</span>
                        </div>
                        {/* Remote Access */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Phone */}
                                    <rect x="14" y="10" width="22" height="38" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="14" y1="42" x2="36" y2="42" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <circle cx="25" cy="46" r="2" fill="#5b9bc8" />
                                    {/* Music note on screen */}
                                    <path d="M20 28 L20 20 L30 17 L30 25" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <circle cx="18" cy="28" r="2.5" fill="#5b9bc8" />
                                    <circle cx="28" cy="25" r="2.5" fill="#5b9bc8" />
                                    {/* WiFi arcs */}
                                    <path d="M38 18 Q46 24 46 28 Q46 32 38 38" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M42 22 Q48 26 48 28 Q48 30 42 34" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Remote Access</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Operate curtains and blinds remotely.</span>
                        </div>
                        {/* Manual Override */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Hand pointer */}
                                    <path d="M26 44 L26 24 Q26 20 30 20 Q34 20 34 24 L34 32 Q36 30 38 30 Q41 30 41 34 L41 42 Q41 50 34 52 L26 52 Q20 52 18 46 L18 40 Q18 36 22 36 Q24 36 26 38 Z" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    {/* Curtain behind */}
                                    <rect x="44" y="10" width="12" height="36" rx="2" stroke="#5b9bc8" strokeWidth="1.8" fill="rgba(91,155,200,0.1)" />
                                    <line x1="48" y1="10" x2="48" y2="46" stroke="#5b9bc8" strokeWidth="1.2" opacity="0.5" />
                                    {/* Rail */}
                                    <line x1="42" y1="8" x2="58" y2="8" stroke="#5b9bc8" strokeWidth="2.2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Manual Override</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Easy switch between manual and automated.</span>
                        </div>
                        {/* Safety Features */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Shield */}
                                    <path d="M32 8 L52 16 L52 34 Q52 48 32 56 Q12 48 12 34 L12 16 Z" stroke="#5b9bc8" strokeWidth="2.5" fill="rgba(91,155,200,0.1)" />
                                    {/* Exclamation */}
                                    <line x1="32" y1="22" x2="32" y2="36" stroke="#5b9bc8" strokeWidth="3" strokeLinecap="round" />
                                    <circle cx="32" cy="42" r="2.5" fill="#5b9bc8" />
                                    {/* Lightning bolt overlay */}
                                    <path d="M38 16 L34 26 L37 26 L33 36" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Safety Features</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Overload protection for secure operation.</span>
                        </div>
                        {/* Automatic Stroke */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Curtain rail with runners */}
                                    <line x1="8" y1="14" x2="56" y2="14" stroke="#5b9bc8" strokeWidth="2.5" strokeLinecap="round" />
                                    {/* Runner circles */}
                                    <circle cx="16" cy="14" r="3" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="28" cy="14" r="3" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="40" cy="14" r="3" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="52" cy="14" r="3" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    {/* Curtain folds */}
                                    <path d="M8 17 Q12 30 8 44 Q12 56 16 44 Q20 30 16 17" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.1)" />
                                    <path d="M20 17 Q24 30 20 44 Q24 56 28 44 Q32 30 28 17" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.1)" />
                                    <path d="M36 17 Q40 30 36 44 Q40 56 44 44 Q48 30 44 17" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.1)" />
                                    <path d="M48 17 Q52 30 48 44 Q52 56 56 44 Q60 30 56 17" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.1)" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Automatic Stroke</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Smooth motion and consistent alignment.</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        Effortlessly adjust your curtains and blinds with the touch of a button.
                    </span>
                </>
            ),
            img: '/assets/curtain and blinds automation.png'
        },
        {
            title: 'Shutter Automation',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Secure &nbsp;•&nbsp; Efficient &nbsp;•&nbsp; Easy to Control
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* Smart Operation */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    <rect x="10" y="8" width="44" height="8" rx="2" stroke="#5b9bc8" strokeWidth="2.2" fill="rgba(91,155,200,0.2)" />
                                    <rect x="10" y="18" width="44" height="6" rx="1" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <rect x="10" y="26" width="44" height="6" rx="1" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <rect x="10" y="34" width="44" height="6" rx="1" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <rect x="10" y="42" width="44" height="6" rx="1" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <line x1="8" y1="52" x2="56" y2="52" stroke="#5b9bc8" strokeWidth="2.2" strokeLinecap="round" />
                                    <line x1="10" y1="8" x2="10" y2="52" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="54" y1="8" x2="54" y2="52" stroke="#5b9bc8" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Smart Operation</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Open or close shutters effortlessly.</span>
                        </div>
                        {/* Remote Control */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    <rect x="14" y="10" width="22" height="38" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="14" y1="42" x2="36" y2="42" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <circle cx="25" cy="46" r="2" fill="#5b9bc8" />
                                    <path d="M20 28 L20 20 L30 17 L30 25" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <circle cx="18" cy="28" r="2.5" fill="#5b9bc8" />
                                    <circle cx="28" cy="25" r="2.5" fill="#5b9bc8" />
                                    <path d="M38 18 Q46 24 46 28 Q46 32 38 38" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M42 22 Q48 26 48 28 Q48 30 42 34" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Remote Control</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Operate via WiFi, GSM, or key switch.</span>
                        </div>
                        {/* Safety Brake */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    <path d="M32 8 L52 16 L52 34 Q52 48 32 56 Q12 48 12 34 L12 16 Z" stroke="#5b9bc8" strokeWidth="2.5" fill="rgba(91,155,200,0.1)" />
                                    <line x1="32" y1="22" x2="32" y2="36" stroke="#5b9bc8" strokeWidth="3" strokeLinecap="round" />
                                    <circle cx="32" cy="42" r="2.5" fill="#5b9bc8" />
                                    <circle cx="46" cy="46" r="9" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.1)" />
                                    <circle cx="46" cy="46" r="4" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <line x1="46" y1="37" x2="46" y2="41" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="46" y1="51" x2="46" y2="55" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="37" y1="46" x2="41" y2="46" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="51" y1="46" x2="55" y2="46" stroke="#5b9bc8" strokeWidth="2" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Safety Brake</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Prevents sudden shutter drops.</span>
                        </div>
                        {/* Security Alerts */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(200,80,80,0.12)', border: '2px solid rgba(200,80,80,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    <rect x="18" y="44" width="28" height="8" rx="3" stroke="#c85050" strokeWidth="2.2" fill="rgba(200,80,80,0.2)" />
                                    <path d="M16 44 Q16 26 32 26 Q48 26 48 44" stroke="#c85050" strokeWidth="2.5" fill="rgba(200,80,80,0.15)" strokeLinecap="round" />
                                    <line x1="32" y1="22" x2="32" y2="16" stroke="#c85050" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="20" y1="28" x2="15" y2="23" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="44" y1="28" x2="49" y2="23" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="14" y1="38" x2="8" y2="36" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="50" y1="38" x2="56" y2="36" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Security Alerts</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Flash alarm for unauthorized access.</span>
                        </div>
                        {/* Reliable Automation */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    <rect x="8" y="28" width="30" height="20" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="14" y1="34" x2="32" y2="34" stroke="#5b9bc8" strokeWidth="1.5" strokeLinecap="round" />
                                    <line x1="14" y1="40" x2="28" y2="40" stroke="#5b9bc8" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="34" cy="38" r="2" fill="#5b9bc8" />
                                    <circle cx="48" cy="22" r="10" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <circle cx="48" cy="22" r="4" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <line x1="48" y1="10" x2="48" y2="14" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="48" y1="30" x2="48" y2="34" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="36" y1="22" x2="40" y2="22" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="56" y1="22" x2="60" y2="22" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="39" y1="13" x2="42" y2="16" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="54" y1="28" x2="57" y2="31" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="38" y1="32" x2="38" y2="28" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Reliable Automation</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Smooth, secure, and stress-free control.</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        No more struggling with manual locks or keys. Upgrade your shutters with intelligent automation and control it remotely anytime, anywhere.
                    </span>
                </>
            ),
            img: '/assets/smart shutter automation.png'
        },
        {
            title: 'Boom Barrier',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Smart &nbsp;•&nbsp; Secure &nbsp;•&nbsp; Efficient Parking Control
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* Automated Access */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Barrier arm */}
                                    <rect x="10" y="28" width="6" height="22" rx="2" stroke="#5b9bc8" strokeWidth="2.2" fill="rgba(91,155,200,0.2)" />
                                    {/* Barrier bar horizontal */}
                                    <rect x="16" y="30" width="36" height="6" rx="2" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.15)" />
                                    {/* Stripes on bar */}
                                    <line x1="22" y1="30" x2="22" y2="36" stroke="#5b9bc8" strokeWidth="2" opacity="0.6" />
                                    <line x1="30" y1="30" x2="30" y2="36" stroke="#5b9bc8" strokeWidth="2" opacity="0.6" />
                                    <line x1="38" y1="30" x2="38" y2="36" stroke="#5b9bc8" strokeWidth="2" opacity="0.6" />
                                    {/* Ground */}
                                    <line x1="6" y1="52" x2="58" y2="52" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    {/* Car silhouette */}
                                    <rect x="36" y="40" width="20" height="10" rx="3" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <path d="M38 40 L40 34 L52 34 L54 40" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                    <circle cx="40" cy="51" r="3" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                    <circle cx="52" cy="51" r="3" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Automated Access</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Smooth vehicle entry and exit.</span>
                        </div>
                        {/* Vehicle Detection */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Car top view */}
                                    <rect x="16" y="24" width="32" height="20" rx="4" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <path d="M20 24 L22 16 L42 16 L44 24" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    <circle cx="20" cy="46" r="4" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <circle cx="44" cy="46" r="4" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    {/* Loop detector lines */}
                                    <line x1="8" y1="52" x2="56" y2="52" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="8" y1="56" x2="56" y2="56" stroke="#5b9bc8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                                    {/* Sensor dots */}
                                    <circle cx="12" cy="32" r="2.5" fill="#5b9bc8" opacity="0.6" />
                                    <circle cx="52" cy="32" r="2.5" fill="#5b9bc8" opacity="0.6" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Vehicle Detection</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Loop detector for accurate sensing.</span>
                        </div>
                        {/* Safety Alerts */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(200,80,80,0.12)', border: '2px solid rgba(200,80,80,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Alarm base */}
                                    <rect x="18" y="44" width="28" height="8" rx="3" stroke="#c85050" strokeWidth="2.2" fill="rgba(200,80,80,0.2)" />
                                    {/* Alarm dome */}
                                    <path d="M16 44 Q16 26 32 26 Q48 26 48 44" stroke="#c85050" strokeWidth="2.5" fill="rgba(200,80,80,0.15)" strokeLinecap="round" />
                                    {/* Flash rays */}
                                    <line x1="32" y1="22" x2="32" y2="16" stroke="#c85050" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="20" y1="28" x2="15" y2="23" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="44" y1="28" x2="49" y2="23" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="14" y1="38" x2="8" y2="36" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="50" y1="38" x2="56" y2="36" stroke="#c85050" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Safety Alerts</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Flash lamps and signals for visibility.</span>
                        </div>
                        {/* Multiple Controls */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Key fob / remote */}
                                    <rect x="8" y="18" width="20" height="32" rx="4" stroke="#5b9bc8" strokeWidth="2" fill="none" />
                                    <rect x="12" y="24" width="12" height="8" rx="2" stroke="#5b9bc8" strokeWidth="1.5" fill="rgba(91,155,200,0.15)" />
                                    <circle cx="14" cy="38" r="2" fill="#5b9bc8" />
                                    <circle cx="24" cy="38" r="2" fill="#5b9bc8" />
                                    <line x1="18" y1="42" x2="18" y2="46" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    {/* WiFi / remote signal */}
                                    <path d="M34 24 Q42 28 42 32 Q42 36 34 40" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M38 20 Q50 26 50 32 Q50 38 38 44" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                                    {/* Push button */}
                                    <circle cx="56" cy="32" r="5" stroke="#5b9bc8" strokeWidth="1.8" fill="rgba(91,155,200,0.2)" />
                                    <circle cx="56" cy="32" r="2" fill="#5b9bc8" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Multiple Controls</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Key switch, push button, or remote.</span>
                        </div>
                        {/* Wide Applications */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Building */}
                                    <rect x="8" y="20" width="22" height="36" rx="2" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <rect x="18" y="30" width="8" height="26" rx="1" stroke="#5b9bc8" strokeWidth="1.5" fill="none" />
                                    <line x1="12" y1="26" x2="16" y2="26" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="12" y1="32" x2="16" y2="32" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <line x1="12" y1="38" x2="16" y2="38" stroke="#5b9bc8" strokeWidth="1.5" />
                                    {/* Tall building */}
                                    <rect x="34" y="12" width="16" height="44" rx="2" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="38" y1="18" x2="46" y2="18" stroke="#5b9bc8" strokeWidth="1.2" opacity="0.5" />
                                    <line x1="38" y1="24" x2="46" y2="24" stroke="#5b9bc8" strokeWidth="1.2" opacity="0.5" />
                                    <line x1="38" y1="30" x2="46" y2="30" stroke="#5b9bc8" strokeWidth="1.2" opacity="0.5" />
                                    {/* Parking P sign */}
                                    <rect x="46" y="8" width="14" height="14" rx="2" stroke="#5b9bc8" strokeWidth="1.8" fill="rgba(91,155,200,0.2)" />
                                    <path d="M50 10 L50 20 M50 10 L54 10 Q57 10 57 13 Q57 16 54 16 L50 16" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    {/* Ground */}
                                    <line x1="6" y1="56" x2="58" y2="56" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Wide Applications</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Perfect for parking, tolls, and gated areas.</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        Ideal for residential complexes, commercial buildings, toll booths, and gated communities.
                    </span>
                </>
            ),
            img: '/assets/automatic boom barrier.png'
        },
        {
            title: 'Sprinkler Automation',
            desc: (
                <>
                    <span style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Smart &amp; Efficient Irrigation
                    </span>
                    <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {/* Smart Scheduling */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Calendar */}
                                    <rect x="8" y="14" width="38" height="36" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="8" y1="24" x2="46" y2="24" stroke="#5b9bc8" strokeWidth="2" />
                                    <line x1="18" y1="8" x2="18" y2="20" stroke="#5b9bc8" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="36" y1="8" x2="36" y2="20" stroke="#5b9bc8" strokeWidth="2.5" strokeLinecap="round" />
                                    {/* Calendar grid dots */}
                                    <circle cx="18" cy="32" r="2" fill="#5b9bc8" />
                                    <circle cx="27" cy="32" r="2" fill="#5b9bc8" />
                                    <circle cx="36" cy="32" r="2" fill="#5b9bc8" />
                                    <circle cx="18" cy="40" r="2" fill="#5b9bc8" />
                                    <circle cx="27" cy="40" r="2" fill="#5b9bc8" />
                                    {/* Water drop */}
                                    <path d="M50 30 Q50 22 54 22 Q58 22 58 30 Q58 36 54 38 Q50 36 50 30 Z" stroke="#5b9bc8" strokeWidth="1.8" fill="rgba(91,155,200,0.2)" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Smart Scheduling</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Automate watering with set timings.</span>
                        </div>
                        {/* Weather Based */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Cloud */}
                                    <path d="M18 42 Q10 42 10 34 Q10 26 18 26 Q18 18 28 18 Q36 18 38 26 Q46 26 46 34 Q46 42 38 42 Z" stroke="#5b9bc8" strokeWidth="2.2" fill="rgba(91,155,200,0.1)" />
                                    {/* Sun peeking */}
                                    <circle cx="50" cy="18" r="7" stroke="#5b9bc8" strokeWidth="1.8" fill="rgba(91,155,200,0.15)" />
                                    <line x1="50" y1="8" x2="50" y2="6" stroke="#5b9bc8" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="57" y1="11" x2="59" y2="9" stroke="#5b9bc8" strokeWidth="1.8" strokeLinecap="round" />
                                    <line x1="60" y1="18" x2="62" y2="18" stroke="#5b9bc8" strokeWidth="1.8" strokeLinecap="round" />
                                    {/* Rain drops */}
                                    <line x1="20" y1="46" x2="18" y2="54" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="28" y1="46" x2="26" y2="54" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="36" y1="46" x2="34" y2="54" stroke="#5b9bc8" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Weather Based</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Adjusts watering based on forecast.</span>
                        </div>
                        {/* Soil Moisture Sensors */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Plant sprout */}
                                    <line x1="32" y1="56" x2="32" y2="30" stroke="#5b9bc8" strokeWidth="2.2" strokeLinecap="round" />
                                    <path d="M32 40 Q20 36 18 24 Q26 20 32 30" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.15)" strokeLinecap="round" />
                                    <path d="M32 34 Q44 30 46 18 Q38 14 32 26" stroke="#5b9bc8" strokeWidth="2" fill="rgba(91,155,200,0.15)" strokeLinecap="round" />
                                    {/* Sprinkler head */}
                                    <rect x="26" y="50" width="12" height="6" rx="2" stroke="#5b9bc8" strokeWidth="1.8" fill="none" />
                                    {/* Water spray arcs */}
                                    <path d="M14 52 Q20 46 26 50" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                    <path d="M50 52 Q44 46 38 50" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Soil Moisture Sensors</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Optimizes usage, prevents overwatering.</span>
                        </div>
                        {/* Remote Control */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Phone */}
                                    <rect x="14" y="10" width="22" height="38" rx="3" stroke="#5b9bc8" strokeWidth="2.2" fill="none" />
                                    <line x1="14" y1="42" x2="36" y2="42" stroke="#5b9bc8" strokeWidth="1.5" />
                                    <circle cx="25" cy="46" r="2" fill="#5b9bc8" />
                                    {/* Music note on screen (control icon) */}
                                    <path d="M20 28 L20 20 L30 17 L30 25" stroke="#5b9bc8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                    <circle cx="18" cy="28" r="2.5" fill="#5b9bc8" />
                                    <circle cx="28" cy="25" r="2.5" fill="#5b9bc8" />
                                    {/* WiFi arcs */}
                                    <path d="M38 18 Q46 24 46 28 Q46 32 38 38" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M42 22 Q48 26 48 28 Q48 30 42 34" stroke="#5b9bc8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Remote Control</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Manage your sprinklers via mobile.</span>
                        </div>
                        {/* Water Conservation */}
                        <div style={{ flex: 1, minWidth: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(91,155,200,0.12)', border: '2px solid rgba(91,155,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 64 64" fill="none">
                                    {/* Water drop */}
                                    <path d="M32 8 Q20 22 20 36 Q20 50 32 52 Q44 50 44 36 Q44 22 32 8 Z" stroke="#5b9bc8" strokeWidth="2.2" fill="rgba(91,155,200,0.15)" />
                                    {/* Leaf inside drop */}
                                    <path d="M32 44 Q22 36 26 26 Q30 22 32 26 Q34 22 38 26 Q42 36 32 44 Z" stroke="#5b9bc8" strokeWidth="1.8" fill="rgba(91,155,200,0.3)" />
                                    <line x1="32" y1="44" x2="32" y2="36" stroke="#5b9bc8" strokeWidth="1.5" />
                                    {/* Checkmark */}
                                    <path d="M26 36 L30 40 L38 30" stroke="#5b9bc8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span style={{ color: '#5b9bc8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>Water Conservation</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Efficient use for lush, healthy landscapes.</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        No more over-watering or under-watering. Set watering timings, optimize water usage based on soil moisture and real-time weather, and control everything remotely through your mobile. Keep your landscape lush and healthy year round, all while saving water, time, and effort.
                    </span>
                </>
            ),
            img: '/assets/sprinkler automation.png'
        }
    ];

    return (
        <main className="home">
            {/* 1. HERO SECTION */}
            <section id="home" className="hero">
                <div className="hero-bg-wrapper">
                    <img src="/assets/smarthome.jpg" alt="Luxury Automation" className="hero-bg-img" />
                    <div className="hero-bg-overlay"></div>
                </div>

                <div className="container hero-content glass-panel">
                    <FadeIn delay={0.2}>
                        <h1 className="hero-title">
                            Welcome to the <br />
                            <span className="text-accent">Automation Expert Team</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="expert-solution-section">
                            <div className="expert-icons-row">
                                <div className="expert-icon-item">
                                    <div className="expert-icon-box">
                                        <HomeIcon size={20} />
                                    </div>
                                    <span className="expert-icon-label">AUTOMATION</span>
                                </div>
                                <div className="expert-icon-item">
                                    <div className="expert-icon-box">
                                        <Cctv size={20} />
                                    </div>
                                    <span className="expert-icon-label">AI - CCTV</span>
                                </div>
                                <div className="expert-icon-item">
                                    <div className="expert-icon-box">
                                        <Laptop size={20} />
                                    </div>
                                    <span className="expert-icon-label">IT SUPPORT</span>
                                </div>
                                <div className="expert-icon-item">
                                    <div className="expert-icon-box">
                                        <BellRing size={20} />
                                    </div>
                                    <span className="expert-icon-label">ALARM</span>
                                </div>
                                <div className="expert-icon-item">
                                    <div className="expert-icon-box">
                                        <Fingerprint size={20} />
                                    </div>
                                    <span className="expert-icon-label">BIOMETRIC</span>
                                </div>
                            </div>
                            <div className="expert-banner">
                                THE COMPLETE ELV SOLUTION EXPERT
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Mobile-only services label */}
                <div className="hero-services-label">
                    Our <span style={{ color: '#ff4d4d' }}>services</span> -
                </div>

                {/* Mobile-only services ticker */}
                <div
                    className="hero-services-ticker"
                    ref={tickerRef}
                    onTouchStart={() => isInteracting.current = true}
                    onTouchEnd={() => isInteracting.current = false}
                    onMouseEnter={() => isInteracting.current = true}
                    onMouseLeave={() => isInteracting.current = false}
                >
                    <div className="hero-services-track">
                        {([
                            { label: 'Home Automation', id: 'service-home-automation' },
                            { label: 'Ai-CCTV System', id: 'service-ai-cctv' },
                            { label: 'Intrusion Alarms', id: 'service-intrusion-alarms' },
                            { label: 'Access Control', id: 'service-access-control' },
                            { label: 'Video Door Phone', id: 'service-video-door-phone' },
                            { label: 'Gate Automation', id: 'service-gate-automation' },
                            { label: 'Networking & Wi-Fi', id: 'service-networking-wifi' },
                            { label: 'Curtain Automation', id: 'service-curtain-automation' },
                            { label: 'Shutter Automation', id: 'service-shutter-automation' },
                            { label: 'Boom Barrier', id: 'service-boom-barrier' },
                            { label: 'Sprinkler Automation', id: 'service-sprinkler-automation' },
                            { label: 'Home Automation', id: 'service-home-automation' },
                            { label: 'Ai-CCTV System', id: 'service-ai-cctv' },
                            { label: 'Intrusion Alarms', id: 'service-intrusion-alarms' },
                            { label: 'Access Control', id: 'service-access-control' },
                            { label: 'Video Door Phone', id: 'service-video-door-phone' },
                            { label: 'Gate Automation', id: 'service-gate-automation' },
                            { label: 'Networking & Wi-Fi', id: 'service-networking-wifi' },
                            { label: 'Curtain Automation', id: 'service-curtain-automation' },
                            { label: 'Shutter Automation', id: 'service-shutter-automation' },
                            { label: 'Boom Barrier', id: 'service-boom-barrier' },
                            { label: 'Sprinkler Automation', id: 'service-sprinkler-automation' },
                        ] as { label: string; id: string }[]).map((service, idx) => (
                            <button
                                key={idx}
                                className="hero-services-item"
                                onClick={() => {
                                    const el = document.getElementById(service.id);
                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }}
                            >
                                {service.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2. PREMIUM CAROUSEL (Moved to bottom of Hero) */}
                <div className="hero-carousel-placement">
                    <PremiumCarousel />
                </div>
            </section>

            {/* 3. ABOUT SECTION */}
            <section id="about" className="section about-section">
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <FadeIn>
                        <h2 className="title-large mb-8 about-title">About Us</h2>
                        <div className="about-text-container glass-panel">
                            <p className="text-body about-text">
                                Rovex brings the future of smart living to your doorstep. Whether upgrading your home or business, our technology puts control at your fingertips. With a focus on reliability and intelligent design, our solutions are designed for safety, comfort and peace of mind.
                            </p>
                            <p className="text-body about-text mt-4">
                                In an era where technology is constantly redefining everyday life, we ensure people stay ahead—creating spaces that are safer, smarter, and seamlessly connected.
                                <br /><br />
                                <span className="about-highlight">Because the future isnʼt just coming itʼs here, and weʼre here to help the world embrace it.</span>
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="section stats-section pb-0 pt-0">
                <div className="container">
                    <FadeIn delay={0.2}>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-number">
                                    <span className="stat-digit">1000</span>
                                    <span className="stat-plus">+</span>
                                </div>
                                <div className="stat-label">Successful projects</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">
                                    <span className="stat-digit">50</span>
                                    <span className="stat-plus">+</span>
                                </div>
                                <div className="stat-label">Brands</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">
                                    <span className="stat-digit">15</span>
                                    <span className="stat-plus red-plus">+</span>
                                </div>
                                <div className="stat-label">Years Excellence</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 4. SERVICES SECTION */}
            <section id="services" className="section services-section grid-bg">
                <div className="container">
                    <FadeIn>
                        <h2 className="title-large mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', textAlign: 'center' }}>Services Provided</h2>
                    </FadeIn>
                    <div className="services-list">
                        {servicesList.map((srv, idx) => {
                            const serviceIdMap: Record<string, string> = {
                                'Home Automation': 'service-home-automation',
                                'Ai-CCTV System': 'service-ai-cctv',
                                'Intrusion Alarms': 'service-intrusion-alarms',
                                'Access Control': 'service-access-control',
                                'Video Door Phone': 'service-video-door-phone',
                                'Gate Automation': 'service-gate-automation',
                                'Networking and Wi-Fi': 'service-networking-wifi',
                                'Curtain Automation': 'service-curtain-automation',
                                'Shutter Automation': 'service-shutter-automation',
                                'Boom Barrier': 'service-boom-barrier',
                                'Sprinkler Automation': 'service-sprinkler-automation',
                            };
                            return (
                                <div key={idx} id={serviceIdMap[srv.title] || ''}>
                                    <FadeIn delay={0.1} className={`service-layer ${idx % 2 !== 0 ? 'reverse' : ''}`}>
                                        <div className="service-text">
                                            <h3 className={`title-medium text-white ${srv.title === 'Networking and Wi-Fi' ? 'networking-title' : ''}`}>{srv.title}</h3>
                                            <div className="accent-line"></div>
                                            <p className="text-body max-w-lg mt-4">{srv.desc}</p>
                                        </div>
                                        <div className="service-image-wrap">
                                            <ParallaxImage src={srv.img} alt={srv.title} parallaxOffset={8} />
                                        </div>
                                    </FadeIn>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. BRANDS SECTION */}
            <section id="brands" className="section brands-section">
                <div className="container">
                    <FadeIn>
                        <h2 className="title-large mb-8" style={{ textAlign: 'center', fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>Brands Provided</h2>
                    </FadeIn>
                </div>
                <div className="marquee-container mt-6">
                    <div className="marquee-track">
                        {[
                            'abb.png', 'ajax.png', 'bosch.png', 'cisco.png', 'dlink.png', 'eglu.png', 'ezviz.png', 'fibaro.png',
                            'fortinet.png', 'hikvision.png', 'hogar.png', 'knx.png', 'legrand.png', 'netgear.png', 'panasonic.png',
                            'samsung.png', 'schneiderelectric.png', 'somfy.png', 'sophos.png', 'tenda.png', 'tplink.png', 'tuya.png',
                            'tyco.png', 'yalen.png'
                        ].map((logo, idx) => (
                            <div key={idx} className="brand-logo-wrap">
                                <img src={`/logo/${logo}`} alt="Brand Logo" loading="lazy" />
                            </div>
                        ))}
                        {/* Duplicate for infinite effect */}
                        {[
                            'abb.png', 'ajax.png', 'bosch.png', 'cisco.png', 'dlink.png', 'eglu.png', 'ezviz.png', 'fibaro.png',
                            'fortinet.png', 'hikvision.png', 'hogar.png', 'knx.png', 'legrand.png', 'netgear.png', 'panasonic.png',
                            'samsung.png', 'schneiderelectric.png', 'somfy.png', 'sophos.png', 'tenda.png', 'tplink.png', 'tuya.png',
                            'tyco.png', 'yalen.png'
                        ].map((logo, idx) => (
                            <div key={`dup-${idx}`} className="brand-logo-wrap">
                                <img src={`/logo/${logo}`} alt="Brand Logo" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <Testimonials />

            {/* TRUSTED BY INDUSTRY LEADERS SECTION */}
            <section className="section bg-soft" style={{ paddingTop: '5rem', paddingBottom: '10rem' }}>
                <div className="container">
                    <FadeIn>
                        <h2 className="title-medium mb-6" style={{ textAlign: 'center' }}>
                            Trusted by <span className="text-accent">Industry Leaders</span>
                        </h2>
                    </FadeIn>
                </div>
                <div className="logo-grid mt-6">
                    {[
                        'adani.png', 'ajion.png', 'aps.jpg', 'arabiann.jpg', 'asianet.png', 'cabriotn.png', 'cmc.jpg', 'co-operative.png', 'emin.png', 'farook.png', 'fincare.png', 'hp.png', 'icici.png', 'kaalyn.png', 'karadan.png', 'kdch.jpg', 'kevabox.jpg', 'ksebn.png', 'kurikkaln.png', 'lipin.png', 'lulu.png', 'm-dit.png', 'meraldan.png', 'minar.png', 'nayara.png', 'peekeyn.png', 'preethi.jpg', 'rg.png', 'safi.png', 'tc-onen.png', 'tec.png', 'the raviz.png', 'theaddress.jpg', 'xylem.jpg', 'yashn.png', 'sbin.png'
                    ].map((logo, idx) => (
                        <div key={idx} className="brand-logo-wrap leader-card">
                            <img
                                src={`/leaders/${logo}`}
                                alt="Industry Leader"
                                loading="lazy"
                                style={
                                    logo === 'kurikkaln.png' ? { transform: 'scale(1.7)' } :
                                        logo === 'lipin.png' ? { transform: 'scale(1.8)' } :
                                            logo === 'yashn.png' ? { transform: 'scale(1.9)' } :
                                                logo === 'peekeyn.png' ? { transform: 'scale(1.9)' } :
                                                    logo === 'preethi.jpg' ? { transform: 'scale(1.6)' } :
                                                        logo === 'rg.png' ? { transform: 'scale(1.5)' } :
                                                            logo === 'safi.png' ? { transform: 'scale(1.5)' } :
                                                                logo === 'icici.png' ? { transform: 'scale(1.5)' } :
                                                                    logo === 'emin.png' ? { transform: 'scale(1.5)' } :
                                                                        logo === 'co-operative.png' ? { transform: 'scale(1.5)' } :
                                                                            logo === 'farook.png' ? { transform: 'scale(1.5)' } :
                                                                                logo === 'fincare.png' ? { transform: 'scale(1.5)' } :
                                                                                    logo === 'asianet.png' ? { transform: 'scale(1.5)' } :
                                                                                        logo === 'cabriotn.png' ? { transform: 'scale(1.5)' } :
                                                                                            logo === 'karadan.png' ? { transform: 'scale(1.5)' } :
                                                                                                undefined
                                }
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CONTACT SECTION */}
            <section id="contact" className="section contact-page pb-0">
                <div className="container">
                    <FadeIn>
                        <h2 className="title-large mb-6" style={{ textAlign: 'center' }}>
                            Get In Touch With <span className="text-accent">Rovex</span>.
                        </h2>
                    </FadeIn>

                    <div className="contact-grid mt-6">
                        <div className="contact-info">
                            <FadeIn>
                                <div className="contact-method">
                                    <h3 className="title-medium mb-4" style={{ fontSize: '2rem' }}>Direct Access</h3>
                                    <p className="text-body mb-6">
                                        For immediate response regarding new developments or existing infrastructure, connect directly with our engineers via WhatsApp. We ensure rapid, decisive communication.
                                    </p>
                                    <a href="https://wa.me/919995008007" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex', gap: '0.5rem', width: 'fit-content' }}>
                                        <MessageCircle size={20} />
                                        WhatsApp Business
                                    </a>
                                </div>

                                <div className="contact-address mt-4" style={{ marginTop: '5rem' }}>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: "var(--text-primary)" }}>
                                        <MapPin size={20} className="text-accent" /> Headquarters
                                    </h4>
                                    <p className="text-body">
                                        Rovex Automation LLP.<br />
                                        61/11564, Second Floor, Fathima Building<br />
                                        S K Pottekkat Road, Puthiyara Rd, Kasaba Village,<br />
                                        Kozhikode, Kerala 673004<br />
                                        <br />
                                        <strong>Phone:</strong> 099950 08007
                                    </p>
                                    <p className="text-body" style={{ marginTop: '1.5rem' }}>
                                        <a href="mailto:consulting@rovex.com" style={{ textDecoration: 'underline' }}>consulting@rovex.com</a>
                                    </p>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="contact-form-container">
                            <FadeIn delay={0.2}>
                                <form className="minimal-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <label htmlFor="name">Complete Name</label>
                                        <input type="text" id="name" placeholder="E.g., Jonathan Architect" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" placeholder="jonathan@firm.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="project">Project Details</label>
                                        <textarea id="project" rows={5} placeholder="Briefly describe your project requirements and timelines..." required></textarea>
                                    </div>
                                    <button type="submit" className="btn-secondary form-submit">Submit Inquiry</button>
                                </form>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section map-section grid-bg">
                <div className="container">
                    <FadeIn>
                        <h2 className="title-large mb-6" style={{ textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            Map View
                        </h2>
                        <div className="map-container">
                            <iframe
                                src="https://maps.google.com/maps?q=Rovex%20Automation%20LLP%20%7C%20Home%20Automation%20Company%2C%2061%2F%2011564%20%2C%20Second%20Floor%20%2C%20Fathima%20Building%20S%20K%20Pottekkat%20Road%2C%20Puthiyara%20Rd%2C%20Kasaba%20Village%2C%20Kozhikode%2C%20Kerala%20673004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Rovex HQ"
                            ></iframe>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
