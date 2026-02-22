import { FadeIn } from '../components/FadeIn';
import ParallaxImage from '../components/ParallaxImage';
import { MessageCircle, MapPin } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import './Home.css';

export default function Home() {

    const servicesList = [
        {
            title: 'Home Automation',
            desc: 'Complete synergistic control over your entire estate. We unify disparate systems into one seamless, elegant interface that anticipates your routine.',
            img: '/assets/smarthome.jpg',
            highlight: 'The Beverly Hills Estate Integration'
        },
        {
            title: 'AI Security & CCTV',
            desc: 'Invisible shields for absolute peace of mind. Military-grade encryption, AI-driven perimeter alerts, and high-definition surveillance seamlessly hidden within the architecture.',
            img: '/assets/ai camera.png',
            highlight: 'Malibu Cliff House Security Deploy'
        },
        {
            title: 'Intelligent Lighting',
            desc: 'Sculpt your environment with precision. Automated circadian sequences, dynamic scene orchestration, and architectural highlighting that feels entirely natural.',
            img: '/assets/replace.png',
            highlight: 'Manhattan Penthouse Lighting Design'
        },
        {
            title: 'Multi-room Audio',
            desc: 'Acoustic perfection distributed elegantly. We engineer high-fidelity sound that fills every space flawlessly, utilizing flush-mount and invisible speaker technology.',
            img: '/assets/multiroomaudiosystem.png',
            highlight: 'Luxury Estate Audio Matrix'
        },
        {
            title: 'Access Control',
            desc: 'Secure and frictionless entry management. Engineered for high-end residential and commercial estates, providing absolute control over every access point.',
            img: '/assets/access control.jpg'
        },
        {
            title: 'Digital Door Locks',
            desc: 'State-of-the-art keyless entry systems. Seamlessly designed digital locking mechanisms with biometric and encrypted remote access capabilities.',
            img: '/assets/doorlock.jpg'
        },
        {
            title: 'Gate Automation',
            desc: 'Flawless motorized gate integrations. Silent, rapid-response automation designed to integrate seamlessly into custom architectural perimeters.',
            img: '/assets/gate automation.jpg'
        },
        {
            title: 'Video Door Phone System',
            desc: 'High-definition visual intercoms. Secure two-way communication with wide-angle optics and crystal-clear audio, embedded flush into the architecture.',
            img: '/assets/video door phone system.png'
        },
        {
            title: 'Intrusion Alarms',
            desc: 'Proactive, multi-tiered perimeter defense. Sophisticated sensors and instantaneous alerts engineered to neutralize threats before they materialize.',
            img: '/assets/intrusion alarm.png'
        },
        {
            title: 'Networking & Wi-Fi',
            desc: 'Enterprise-grade connectivity networks. Invisible, ultra-high-speed data backbones designed to support intense automation architectures without lag.',
            img: '/assets/networking and wifi.png'
        },
        {
            title: 'Curtain & Blinds Automation',
            desc: 'Motorized window treatments. Silent and synchronized shading systems that adjust perfectly to circadian rhythms and structural lighting needs.',
            img: '/assets/curtain and blinds automation.png'
        },
        {
            title: 'Smart Shutter Automation',
            desc: 'Industrial strength motorized security shutters. Elegant deployment with total structural integration, controlled via centralized secured systems.',
            img: '/assets/smart shutter automation.png'
        },
        {
            title: 'Automatic Boom Barrier',
            desc: 'High-speed vehicular access control. Rugged, relentless performance for premium development entryways, integrating with automatic plate recognition.',
            img: '/assets/automatic boom barrier.png'
        },
        {
            title: 'Sprinkler Automation',
            desc: 'Intelligent landscape hydration. Weather-integrated, precise irrigation systems that maintain lush aesthetics while optimizing water consumption.',
            img: '/assets/sprinkler automation.png'
        }
    ];

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="home">
            {/* 1. HERO SECTION */}
            <section id="home" className="hero">
                <div className="container hero-content">
                    <FadeIn delay={0.2}>
                        <h1 className="hero-title">
                            Welcome to the <br />
                            <span className="text-accent">New Era of Automation</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className="hero-subtitle">
                            Automation systems designed for modern architecture and premium developments.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <div className="hero-actions">
                            <button onClick={() => scrollTo('contact')} className="btn-primary">Book Consultation</button>
                            <a href="https://wa.me/919995008007" target="_blank" rel="noreferrer" className="btn-secondary">
                                WhatsApp
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>


            {/* 3. SERVICES SECTION */}
            <section id="services" className="section services-section grid-bg">
                <div className="container">
                    <FadeIn>
                        <h2 className="title-large mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>Services Provided</h2>
                    </FadeIn>
                    <div className="services-list">
                        {servicesList.map((srv, idx) => (
                            <FadeIn delay={0.1} key={idx} className={`service-layer ${idx % 2 !== 0 ? 'reverse' : ''}`}>
                                <div className="service-text">
                                    <h3 className="title-medium text-white">{srv.title}</h3>
                                    <div className="accent-line"></div>
                                    <p className="text-body max-w-lg mt-4">{srv.desc}</p>

                                    {srv.highlight && (
                                        <div className="project-highlight mt-4">
                                            <span className="highlight-label">Project Highlight</span>
                                            <p>{srv.highlight}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="service-image-wrap">
                                    <ParallaxImage src={srv.img} alt={srv.title} parallaxOffset={8} />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BRANDS SECTION */}
            <section id="brands" className="section brands-section">
                <div className="container">
                    <FadeIn>
                        <h2 className="title-medium mb-6" style={{ textAlign: 'center' }}>BRANDS PROVIDED</h2>
                    </FadeIn>
                </div>
                <div className="marquee-container mt-6">
                    <div className="marquee-track">
                        {[
                            'abb.png', 'ajax.png', 'bosch.png', 'cisco.png', 'dlink.png', 'eglu.png', 'ezviz.png', 'fibaro.png',
                            'fortinet.png', 'hikvision.png', 'hogar.png', 'knx.png', 'legrand.png', 'netgear.png', 'panasonic.png',
                            'samsung.png', 'schneiderelectric.png', 'somfy.png', 'sophos.png', 'tenda.png', 'tplink.png', 'tuya.png',
                            'tyco.png', 'yale.png'
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
                            'tyco.png', 'yale.png'
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

            {/* 5. CONTACT SECTION */}
            <section id="contact" className="section contact-page pb-0">
                <div className="container">
                    <FadeIn>
                        <h2 className="title-large mb-6" style={{ textAlign: 'center' }}>
                            Partner With <span className="text-accent">Rovex</span>.
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
                        <div className="map-container">
                            <iframe
                                src="https://maps.google.com/maps?q=61/11564,Second%20Floor,Fathima%20Building,S%20K%20Pottekkat%20Road,Puthiyara%20Rd,Kasaba%20Village,Kozhikode,Kerala%20673004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
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
