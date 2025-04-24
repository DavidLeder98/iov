import './NavLarge.css';
import logo from '../../assets/structural/logo.webp';
import { Link, NavLink, useLocation, useNavigate  } from "react-router-dom";
import arrow2 from '../../assets/svgs/nav-arrow-red.svg';
import arrow1 from '../../assets/svgs/nav-arrow-blue.svg';
import { useState, useEffect } from "react";
import serbia from '../../assets/svgs/serbia.svg';
import britain from '../../assets/svgs/britain.svg';
import hungary from '../../assets/svgs/hungary.svg';
import slovakia from '../../assets/svgs/slovakia.svg';

const NavLarge = () => {
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
        <header className={`nav-large ${scrolled ? "scrolled" : ""}`}>
            <div className="nl-darker"></div>
            <div className="nl-darkest"></div>
            <div className="nl-essence">

                {/* Logo Section */}
                <div className="nl-logo-cont" onClick={redirectHome}>
                    <div className={`nll-img-cont ${scrolled ? "scrolled" : ""}`}>
                        <img
                            src={logo}
                            alt="Institut za onkologiju Vojvodine logo"
                            className="nl-logo"
                        />
                    </div>
                    <div className="nll-text">
                        <span className={`nllt-top ${scrolled ? "scrolled" : ""}`}>Institut za onkologiju vojvodine</span>
                        <span className={`nllt-bot ${scrolled ? "scrolled" : ""}`}>Sremska Kamenica</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav aria-label="Primary navigation" className="nl-bar">
                    <div className="nl-white-bar"></div>
                    <ul className="nl-ul">
                        <li className="nl-li">
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "nl-a active" : "nl-a"}
                                onClick={handleNavClick("/")}
                            >
                                Početna
                            </NavLink>
                            <div className={`nl-li-underline ${scrolled ? "scrolled" : ""}`}></div>
                        </li>
                        <li className="nl-li nl-dd-menu">
                            <NavLink
                                to="/onama"
                                className={({ isActive }) => isActive ? "nl-a active" : "nl-a"}
                                onClick={handleNavClick("/onama")}
                            >
                                O nama
                                <div className="nl-arrow-selector">
                                    <img className="nl-arrow-1" src={arrow1}></img>
                                    <img className="nl-arrow-2" src={arrow2}></img>
                                </div>
                            </NavLink>
                            <div className={`nl-li-underline ${scrolled ? "scrolled" : ""}`}></div>
                            <div className={`dd-menu-frame ${scrolled ? "scrolled" : ""}`}>
                                <ul className="dd-menu">
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >O Institutu</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Misija</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Vizija</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Kućni red</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Akreditacija</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Uprava</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Organizacija</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Istraživanja</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Projekti</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Obrazovanje</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Poslovne Informacija</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Studenička Akademija</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Kulturni događaji</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Donacije</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Logo i Foto</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nl-li nl-dd-menu">
                            <NavLink
                                to="/vodic"
                                className={({ isActive }) => isActive ? "nl-a active" : "nl-a"}
                                onClick={handleNavClick("/vodic")}
                            >
                                Vodič za pacijente
                                <div className="nl-arrow-selector">
                                    <img className="nl-arrow-1" src={arrow1}></img>
                                    <img className="nl-arrow-2" src={arrow2}></img>
                                </div>
                            </NavLink>
                            <div className={`nl-li-underline ${scrolled ? "scrolled" : ""}`}></div>
                            <div className={`dd-menu-frame ${scrolled ? "scrolled" : ""}`}>
                                <ul className="dd-menu">
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Obaveštenja</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Prijem pacijenata</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Zakazivanje</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Radno vreme</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Raspored</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Uputstva</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Zdr.usluge na lični zahtev</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Publikacije</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Informatori</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Savetovanje/podrška</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Pitajte lekara</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Prava pacijenata</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Programi MZRS</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Davanje informacija</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Anketa</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nl-li nl-dd-menu">
                            <NavLink
                                to="/javnost"
                                className={({ isActive }) => isActive ? "nl-a active" : "nl-a"}
                                onClick={handleNavClick("/javnost")}
                            >
                                Javnost
                                <div className="nl-arrow-selector">
                                    <img className="nl-arrow-1" src={arrow1}></img>
                                    <img className="nl-arrow-2" src={arrow2}></img>
                                </div>
                            </NavLink>
                            <div className={`nl-li-underline ${scrolled ? "scrolled" : ""}`}></div>
                            <div className={`dd-menu-frame ${scrolled ? "scrolled" : ""}`}>
                                <ul className="dd-menu">
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >DigPath projekat</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Onkologija</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Novosti</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Arhiva novosti</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >"Archive of Oncology"</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Informacioni sistem</Link>
                                    </li>
                                    <li className="ddm-li">
                                        <Link className="ddm-li-a" to="/" >Telemedicina</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nl-li">
                            <NavLink
                                href="/sadrzaj"
                                className="nl-a"
                                onClick={handleNavClick("/sadrzaj")}
                            >
                                Sadržaj
                            </NavLink>
                            <div className={`nl-li-underline ${scrolled ? "scrolled" : ""}`}></div>
                        </li>
                        <li className="nl-li">
                            <NavLink
                                to="/kontakt"
                                className={({ isActive }) => isActive ? "nl-a active" : "nl-a"}
                                onClick={handleNavClick("/kontakt")}
                            >
                                Kontakt
                            </NavLink>
                            <div className={`nl-li-underline ${scrolled ? "scrolled" : ""}`}></div>
                        </li>
                        <li className="nl-li">

                            {/* Language */}
                            <div className="nl-lang">
                                <div className="nl-lang-selected">
                                    <div className="nl-lang-img-cont">
                                        <img src={serbia} alt="language" className="nl-lang-img" />
                                    </div>
                                    <span className="nlls-span">SR</span>
                                </div>
                                <div className={`nl-languages-toggler ${scrolled ? "scrolled" : ""}`}>
                                    <ul className="dd-menu">
                                        <li className="nl-lang-li">
                                            <img src={serbia} alt="language" className="nl-lang-min-img" />
                                            <span className="nl-lang-name">Srpski lat.</span>
                                        </li>
                                        <li className="nl-lang-li">
                                            <img src={serbia} alt="language" className="nl-lang-min-img" />
                                            <span className="nl-lang-name">Српски ћир.</span>
                                        </li>
                                        <li className="nl-lang-li">
                                            <img src={britain} alt="language" className="nl-lang-min-img" />
                                            <span className="nl-lang-name">English</span>
                                        </li>
                                        <li className="nl-lang-li">
                                            <img src={hungary} alt="language" className="nl-lang-min-img" />
                                            <span className="nl-lang-name">Magyar</span>
                                        </li>
                                        <li className="nl-lang-li">
                                            <img src={slovakia} alt="language" className="nl-lang-min-img" />
                                            <span className="nl-lang-name">Slovenský</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavLarge;