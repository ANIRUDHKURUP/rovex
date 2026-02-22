import { Menu } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="nav-logo">
                    <img src="/assets/whitelogo.png" alt="Rovex Automation" className="nav-logo-img" />
                </a>

                <div className="nav-links">
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="nav-link">About</a>
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} className="nav-link">Services</a>
                    <a href="#brands" onClick={(e) => { e.preventDefault(); scrollTo('brands'); }} className="nav-link">Brands</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="nav-link">Contact</a>
                </div>

                <button className="nav-mobile-btn">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
}
