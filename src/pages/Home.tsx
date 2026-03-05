import { FadeIn } from '../components/FadeIn';
import ParallaxImage from '../components/ParallaxImage';
import { MessageCircle, MapPin, Home as HomeIcon, Cctv, Laptop, BellRing, Fingerprint } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import PremiumCarousel from '../components/PremiumCarousel';
import './Home.css';

export default function Home() {

    const servicesList = [
        {
            title: 'Home Automation',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Make life easier, one smart upgrade at a time.</span>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', opacity: 0.9 }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Wireless Automation – Flexible, Smart, and Effortless:</strong> Manage everything through a central control panel or your smartphone– perfect for existing homes and easy upgrades without rewiring.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Wired Automation – Stable, Reliable, and Seamless:</strong> Connects all appliances through a dedicated network, ensuring seamless operation with minimal interference– ideal for new constructions or high-end automation needs.</li>
                        <li><strong>Presence Sensors – Intelligent, Adaptive, and Energy-Efficient:</strong> These intelligent sensors add another layer of convenience, detecting movement to automatically adjust lighting, climate, and security settings.</li>
                    </ul>
                </>
            ),
            img: '/assets/smarthome.jpg'
        },
        {
            title: 'Ai-CCTV System',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Smarter &nbsp; Faster &nbsp; Reliable</span>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', opacity: 0.9 }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>24/7 Security, No Blind Spots:</strong> Our AI-powered CCTV keeps an unblinking eye on critical areas, ensuring round-the-clock protection.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Instant Intrusion & Parking Alerts:</strong> Unwanted visitors? The system triggers an alarm in case of unauthorized entry attempts and activates a flashlight for unauthorized parking.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>AI That Never Blinks:</strong> Manual CCTV monitoring can lose focus, but not AI. It analyzes multiple video streams at once, catching every movement, pattern, and anomaly.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Smart Recognition & Tracking:</strong> From counting people and identifying genders to tracking vehicles and capturing license plates, our AI system does it all—automatically logging movements for better security.</li>
                        <li><strong>See More, Know More:</strong> Want insights into visitor traffic? Our people-counting system helps you optimize visitor management and offers real-time insights into foot traffic patterns.</li>
                    </ul>
                </>
            ),
            img: '/assets/ai camera.png'
        },
        {
            title: 'Intrusion Alarms',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Security That Thinks for You</span>
                    Imagine a security system that not only detects threats but thinks before it reacts. Our AXHub AI-powered intrusion alarm analyzes threats before sending real-time alerts. It uses advanced AI to distinguish real dangers from harmless threats, thereby minimizing false alarms. With IVaaS (Intrusion Verification as a Service), you can remotely view live footage and take action instantly. More than just an alarm—you get a security system that's always thinking ahead.
                </>
            ),
            img: '/assets/intrusion alarm.png'
        },
        {
            title: 'Multi-room Audio',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Music That Moves With You</span>
                    Let your entire home echo with music, vibrant and clear. Play different music in every room, or sync them all together with just a tap—control it all from your phone. Experience music like never before, no matter where you are in your home.
                </>
            ),
            img: '/assets/multiroomaudiosystem.png'
        },
        {
            title: 'Access Control',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Secure, Fast & Contactless</span>
                    No more keycards or PIN codes. Experience the next level of security with Face Recognized Access Control, offering fast, touchless, and highly accurate authentication. It uses advanced AI to instantly identify users with high security and precision. For added protection, the system offers optional multilayer security with RFID, PIN and biometric verification, and allows you to keep record of entry and exit. Ideal for offices, residences, and high-security areas.
                </>
            ),
            img: '/assets/access control.png'
        },
        {
            title: 'Digital Door Locks',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Security Meets Innovation</span>
                    Say good bye to keys and step into the future of home security with our AI-powered Digital Smart Door Lock. Unlock your door with Fast Fingerprint Sensor, RFID Card, PIN Code, or Face Lock. View your visitors directly through the built-in camera and display screen inside your home. Experience enhanced security with an auto-locking system and optional VDP integration for easy visitor management. The system also offers low battery indication, emergency power backup, and tracks your access history, while the fine-touch keypad and doorbell ensure convenient interaction.
                </>
            ),
            img: '/assets/doorlock.jpg'
        },
        {
            title: 'Gate Automation',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Secure &nbsp; Convenient &nbsp; Intelligent</span>
                    Imagine pulling up to your home and your gate opens automatically—no buttons, no waiting. Whether it's a sliding or swing gate, our advanced Gate Automation System ensures smooth, automated operation with smart access controls.<br /><br />
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', opacity: 0.9 }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Multiple Access Options:</strong> Supports Face Recognition, Fingerprint, RFID, QR Code, and Password.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>IoT & GSM Connectivity:</strong> Lets you control and monitor your gate remotely.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Enhanced Safety Features:</strong> Prevents accidents and ensures secure operation.</li>
                        <li><strong>Reliable Power Backup:</strong> Keeps your gate functional even during power outages.</li>
                    </ul>
                </>
            ),
            img: '/assets/gate automation.jpg'
        },
        {
            title: 'Video Door Phone',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Instant Verification, Enhanced Security</span>
                    See who's at your door from anywhere. With remote access, real-time monitoring, and two-way communication, you can greet visitors, grant access, or secure your premises effortlessly—whether you're at home, in the office, or on the go.<br /><br />
                    Our Video Door System (VDP) is built on SIP technology, which means you get to experience crystal-clear video and audio over IP networks, enabling smooth integration with intercoms, smartphones, and security systems.
                </>
            ),
            img: '/assets/video door phone system.png'
        },
        {
            title: 'Networking and Wi-Fi',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Data Network & Server Room Setup</span>
                    No downtime. No connectivity issues. Our infrastructure is expertly designed to keep your business running at peak efficiency, with high-speed connectivity, robust security, and seamless scalability for uninterrupted operations.<br /><br />
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Wi-Fi System</span>
                    Our ultra-fast, secure Wi-Fi solutions keep you connected without interruptions, offering an intelligent mesh-enabled system and Wi-Fi 6 AP for high-density environments. With centralized cloud management and intelligent monitoring, you gain complete control and real-time insights into your network.
                </>
            ),
            img: '/assets/networking and wifi.png'
        },
        {
            title: 'Curtain Automation',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Smart, Convenient, and Effortless</span>
                    Effortlessly adjust your curtains and blinds with the touch of a button. Our Curtain and Blinds Automation system is designed for smooth, stable operation in both manual and remote modes. With overload protection and an automatic stroke design, the system further provides safety and durability.
                </>
            ),
            img: '/assets/curtain and blinds automation.png'
        },
        {
            title: 'Shutter Automation',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Secure, Efficient, and Easy to Control</span>
                    No more struggling with manual locks or keys. Upgrade your shutters with intelligent automation and control it remotely with a key switch, Wi-Fi module, or GSM module— anytime, anywhere. Our Smart Shutter Automation is also equipped with a safety brake to prevent sudden drops and an alarm flash lamp for immediate alerts in case of unauthorized access. Smart, secure, and stress-free—that’s the future of shutter automation!
                </>
            ),
            img: '/assets/smart shutter automation.png'
        },
        {
            title: 'Boom Barrier',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Smart, Secure, and Efficient Parking Control</span>
                    Our Automatic Boom Barrier ensures smooth, efficient, and secure access for vehicles.<br /><br />
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', opacity: 0.9 }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Multiple Access Options:</strong> Automates entry and exit, reducing congestion and improving security.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Loop Detector & Signal Light:</strong> Detects vehicles accurately and provides clear visual guidance.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Flash Lamp & Safety Alerts:</strong> Enhances visibility and alerts users during barrier operation.</li>
                        <li><strong>Multiple Control Options:</strong> Operate effortlessly using a key switch, push button, or remote access.</li>
                    </ul><br />
                    Ideal for residential complexes, commercial buildings, toll booths, and gated communities.
                </>
            ),
            img: '/assets/automatic boom barrier.png'
        },
        {
            title: 'Sprinkler Automation',
            desc: (
                <>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Smart & Efficient Irrigation</span>
                    No more over-watering or under-watering. Set watering timings, optimize water usage based on soil moisture and real-time weather, and control everything remotely through your mobile. Keep your landscape lush and healthy year round, all while saving water, time and effort.
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
                            <span className="text-accent">New Era of Automation</span>
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
                        {servicesList.map((srv, idx) => (
                            <FadeIn delay={0.1} key={idx} className={`service-layer ${idx % 2 !== 0 ? 'reverse' : ''}`}>
                                <div className="service-text">
                                    <h3 className={`title-medium text-white ${srv.title === 'Networking and Wi-Fi' ? 'networking-title' : ''}`}>{srv.title}</h3>
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
                        <h2 className="title-large mb-8" style={{ textAlign: 'center', fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>Brands Provided</h2>
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
