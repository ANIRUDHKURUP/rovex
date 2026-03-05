import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src="/assets/whitelogo.png" alt="Rovex Automation" className="footer-logo-img" loading="lazy" />
                        <p>Engineering Intelligent Living. <br />Designed for modern architecture.</p>
                    </div>
                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h4>Navigation</h4>
                            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a>
                            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
                            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
                            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
                        </div>
                        <div className="footer-col" style={{ maxWidth: '280px' }}>
                            <h4>Contact</h4>
                            <a href="mailto:consulting@rovex.com">consulting@rovex.com</a>
                            <a href="tel:+919995008007">099950 08007</a>
                            <a href="https://wa.me/919995008007" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} /></a>
                            <p style={{ marginTop: '1.5rem', color: '#a0a0a0', fontSize: '0.85rem', lineHeight: '1.6' }}>
                                61/11564, Second Floor, Fathima Building<br />
                                S K Pottekkat Road, Puthiyara Rd, Kasaba Village,<br />
                                Kozhikode, Kerala 673004
                            </p>
                        </div>
                        <div className="footer-col">
                            <h4>Legal</h4>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Rovex Automation Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
