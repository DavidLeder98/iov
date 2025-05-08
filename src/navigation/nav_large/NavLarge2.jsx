import './NavLarge2.css';
import logo from '../../assets/structural/logo.webp';
import arrow1 from '../../assets/svgs/nav-arrow-white.svg';
import { Link, NavLink, useLocation, useNavigate  } from "react-router-dom";
import { useState, useEffect } from "react";
import NavDorpdownOnama from './NavDropdownOnama';
import NavDorpdownVodic from './NavDropdownVodic';
import NavDorpdownJavnost from './NavDropdownJavnost';
import NavDorpdownLang from './NavDropdownLang';
import serbia from '../../assets/svgs/lang/serbia.svg';
import britain from '../../assets/svgs/lang/britain.svg';
import hungary from '../../assets/svgs/lang/hungary.svg';
import slovakia from '../../assets/svgs/lang/slovakia.svg';
import locicon from '../../assets/svgs/footer/location.svg';
import phone from '../../assets/svgs/footer/phone.svg';
import email from '../../assets/svgs/footer/email.svg';

const NavLarge2 = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    const handleNavClick = (path) => (e) => {
        if (location.pathname === path) {
            e.preventDefault();
            window.location.reload();
        }
    };

    const redirectHome = () => {
        if (location.pathname === "/") {
            window.location.reload();
        }
        else{
            navigate("/");
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <header className="nl-2">
            <div className={`nl-2-top ${scrolled ? "scrolled" : ""}`}>
                <div className="nl-2-top-essence">
                    <div className="nl-2-top-left"  onClick={redirectHome}>
                        <div className="nl-2-logo-cont">
                            <img src={logo} alt="iov logo" className="nl-2-logo" />
                        </div>
                        <div className="nl-2-logo-text">
                            <h1 className="nl-2-iov">Institut za Onkologiju Vojvodine</h1>
                            <h3 className="nl-2-kamenica">Sremska Kamenica</h3>
                        </div>
                    </div>
                    <div className="nl-2-top-right">
                        <a href="mailto:info@onk.ns.ac.rs" className="nl-2-tr-a">
                            <img src={email} alt="Email" className="nl-2-tr-email" />
                            <span className="nl-2-tr-span">info@onk.ns.ac.rs</span>
                        </a>
                        <a href="tel:+381601518552" className="nl-2-tr-a">
                            <img src={phone} alt="Telefon" className="nl-2-tr-phone" />
                            <span className="nl-2-tr-span">Tel: +381 (0)21 480 5500</span>
                        </a>
                        <a target="_blank" href="https://maps.app.goo.gl/ArB2h5kLWAMUmjVS9" className="nl-2-tr-a" rel="noopener noreferrer">
                            <img src={locicon} alt="Lokacija" className="nl-2-tr-location" />
                            <span className="nl-2-tr-span">Put doktora Goldmana 4, 21204 Sremska Kamenica</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="nl-2-bot">
                <nav className="nl-2-nav">
                    <ul className="nl-2-ul">
                        <div className={`nl-2-logo-small ${scrolled ? "scrolled" : ""}`}>
                            <div className="nl-2-img-small-cont">
                                <img src={logo} alt="iov logo" className="nl-2-img-small" />
                            </div>
                            IOV
                        </div>
                        <li className="nl-2-li nl-2-li-first"><Link className="nl-2-a" to="/" onClick={handleNavClick("/")}>Početna</Link></li>
                        <li className="nl-2-li nl-2-onama-li">
                            <Link className="nl-2-a" to="/" onClick={handleNavClick("/onama")}>O nama
                                <img src={arrow1} alt="iov arrow" className="nl-2-arrow" />
                            </Link>
                            <div className="dd-menu-cont ddmc-l">
                                <div className="nl-2-onama-cont">
                                    <NavDorpdownOnama />
                                </div>
                            </div>
                        </li>
                        <li className="nl-2-li nl-2-vodic-li">
                            <Link className="nl-2-a" to="/" onClick={handleNavClick("/vodic")}>Vodič za pacijente
                                <img src={arrow1} alt="iov arrow" className="nl-2-arrow" />
                            </Link>
                            <div className="dd-menu-cont ddmc-l">
                                <div className="nl-2-vodic-cont">
                                    <NavDorpdownVodic />
                                </div>
                            </div>
                        </li>
                        <li className="nl-2-li nl-2-javnost-li">
                            <Link className="nl-2-a" to="/" onClick={handleNavClick("/javnost")}>Javnost
                                <img src={arrow1} alt="iov arrow" className="nl-2-arrow" />
                            </Link>
                            <div className="dd-menu-cont ddmc-l">
                                <div className="nl-2-javnost-cont">
                                    <NavDorpdownJavnost />
                                </div>
                            </div>
                        </li>
                        <li className="nl-2-li"><Link className="nl-2-a" to="/" onClick={handleNavClick("/sadrzaj")}>Sadržaj</Link></li>
                        <li className="nl-2-li"><Link className="nl-2-a" to="/" onClick={handleNavClick("/kontakt")}>Kontakt</Link></li>
                    </ul>
                    <div className="nl-2-lang-btn nl-2-lang-li">
                        <div className="nl-2-a">
                            <img src={serbia} alt="language flag" className="nl-2-flag" />
                            Latinica
                        </div>
                        <div className="dd-menu-cont ddmc-s">
                            <div className="nl-2-lang-cont">
                                <NavDorpdownLang />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavLarge2;