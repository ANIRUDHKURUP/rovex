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
            img: '/assets/smarthome.jpg'
        },
        {
            title: 'Ai Security & CCTV',
            desc: 'Invisible shields for absolute peace of mind. Military-grade encryption, AI-driven perimeter alerts, and high-definition surveillance seamlessly hidden within the architecture.',
            img: '/assets/ai camera.png'
        },
        {
            title: 'Multi-room Audio',
            desc: 'Acoustic perfection distributed elegantly. We engineer high-fidelity sound that fills every space flawlessly, utilizing flush-mount and invisible speaker technology.',
            img: '/assets/multiroomaudiosystem.png'
        },
        {
            title: 'Access Control',
            desc: 'Secure and frictionless entry management. Engineered for high-end residential and commercial estates, providing absolute control over every access point.',
            img: '/assets/access control.png'
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
                <div className="hero-bg-wrapper">
                    <img src="/assets/smarthome.jpg" alt="Luxury Automation" className="hero-bg-img" />
                    <div className="hero-bg-overlay"></div>
                </div>

                <div className="container hero-content glass-panel">
                    <FadeIn delay={0.2}>
                        <h1 className="hero-title">
                            Welcome to the <br />
                            <span className="text-accent">New Era of Automation</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className="hero-subtitle">
                            Automation systems designed for ultra-premium developments and modern architecture.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <div className="hero-actions">
                            <button onClick={() => scrollTo('contact')} className="btn-primary">Book Consultation</button>
                            <a href="https://wa.me/919995008007" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem' }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.012 2C6.483 2 2 6.485 2 12.015c0 1.765.46 3.486 1.336 5L2 22l5.12-1.34A9.957 9.957 0 0012.012 22c5.527 0 10-4.484 10-10.015S17.539 2 12.012 2zm0 18.33c-1.465 0-2.903-.393-4.162-1.138l-.3-.178-3.097.813.826-3.018-.195-.31A8.288 8.288 0 013.684 12c0-4.596 3.743-8.337 8.328-8.337 4.582 0 8.321 3.74 8.321 8.337S16.594 20.33 12.012 20.33zm4.577-6.248c-.25-.125-1.485-.733-1.716-.818-.23-.083-.398-.125-.565.125-.166.25-.65 .818-.795.986-.146.167-.293.187-.543.063-2.112-1.066-3.053-2.028-3.923-3.52-.09-.153-.01-.237.115-.36.113-.114.25-.292.375-.438.125-.145.166-.25.25-.415.084-.167.043-.31-.02-.437-.064-.125-.566-1.365-.776-1.868-.204-.492-.41-.424-.565-.43-.146-.008-.313-.01-.48-.01-.167 0-.44.062-.67.31-.23.25-.88 .86-.88 2.095 0 1.235.9 2.43 1.026 2.6.126.166 1.77 2.705 4.29 3.793 1.488.643 2.112.693 2.877.585.86-.12 1.485-.606 1.693-1.192.209-.586.209-1.087.146-1.192-.063-.105-.23-.166-.48-.292z" fill="#25D366" />
                                </svg>
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
                        <h2 className="title-large mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', textAlign: 'center' }}>Services Provided</h2>
                    </FadeIn>
                    <div className="services-list">
                        {servicesList.map((srv, idx) => (
                            <FadeIn delay={0.1} key={idx} className={`service-layer ${idx % 2 !== 0 ? 'reverse' : ''}`}>
                                <div className="service-text">
                                    <h3 className="title-medium text-white">{srv.title}</h3>
                                    <div className="accent-line"></div>
                                    <p className="text-body max-w-lg mt-4">{srv.desc}</p>

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

            {/* TRUSTED BY INDUSTRY LEADERS SECTION */}
            <section className="section bg-soft" style={{ paddingTop: '5rem', paddingBottom: '10rem' }}>
                <div className="container">
                    <FadeIn>
                        <h2 className="title-medium mb-6" style={{ textAlign: 'center' }}>
                            Trusted by <span className="text-accent">Industry Leaders</span>
                        </h2>
                    </FadeIn>
                </div>
                <div className="marquee-container mt-6">
                    <div className="marquee-track" style={{ animationDuration: '45s' }}>
                        {[
                            'Nayara Energy', 'HPCL', 'Adani Gas', 'SBI', 'Jio Digital Life', 'AJIO', 'Fincare Bank', 'AFMC', 'ICICI Bank', 'Asianet', 'TCONE', 'LuLu', 'KSEB', 'Emin', 'Minar', 'RG Foods', 'Kar Jaan', 'SAG Institute', 'Co-operative College', 'Farook College', 'The Address', 'Malabar Developers', 'Indus Towers', 'Xylem', '3K Qaly', 'Cabriot', 'APS', 'Preethi', 'KDGH', 'Mesauda', 'Kurikkal Ambiente', 'The Raviz', 'LIPI', 'Yabh', 'Kevabox', 'G-TEC'
                        ].map((client, idx) => (
                            <div key={idx} className="brand-logo-wrap">
                                <span className="client-text-name">{client}</span>
                            </div>
                        ))}
                        {/* Duplicate for infinite effect */}
                        {[
                            'Nayara Energy', 'HPCL', 'Adani Gas', 'SBI', 'Jio Digital Life', 'AJIO', 'Fincare Bank', 'AFMC', 'ICICI Bank', 'Asianet', 'TCONE', 'LuLu', 'KSEB', 'Emin', 'Minar', 'RG Foods', 'Kar Jaan', 'SAG Institute', 'Co-operative College', 'Farook College', 'The Address', 'Malabar Developers', 'Indus Towers', 'Xylem', '3K Qaly', 'Cabriot', 'APS', 'Preethi', 'KDGH', 'Mesauda', 'Kurikkal Ambiente', 'The Raviz', 'LIPI', 'Yabh', 'Kevabox', 'G-TEC'
                        ].map((client, idx) => (
                            <div key={`dup-${idx}`} className="brand-logo-wrap">
                                <span className="client-text-name">{client}</span>
                            </div>
                        ))}
                    </div>
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
                                src="https://maps.google.com/maps?q=61/11564,Second%20Floor,Fathima%20Building,S%20K%20Pottekkat%20Road,Puthiyara%20Rd,Kasaba%20Village,Kozhikode,Kerala%20673004&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
