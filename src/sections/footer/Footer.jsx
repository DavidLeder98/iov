import './Footer.css';
import location from '../../assets/svgs/footer/location.svg';
import phone from '../../assets/svgs/footer/phone.svg';
import fax from '../../assets/svgs/footer/fax2.svg';
import email from '../../assets/svgs/footer/email.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-essence">
                {/* Javno */}
                <nav className="f-pages" aria-label="Stručna javnost">
                    <h4 className="f-h4"><Link className="f-link" to="/">Stručna javnost</Link></h4>
                    <ul className="fp-ul">
                        <li className="f-li"><Link className="f-link" to="/">DigPath projekat</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Onkologija</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Novosti</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Arhiva novosti</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">"Archive of Oncology"</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Informacioni sistem</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Telemedicina</Link></li>
                    </ul>
                </nav>

                {/* O nama */}
                <nav className="f-pages" aria-label="O nama">
                    <h4 className="f-h4"><Link className="f-link" to="/">O nama</Link></h4>
                    <ul className="fp-ul">
                        <li className="f-li"><Link className="f-link" to="/">O Institutu</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Misija i Vizija</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Kućni red</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Akreditacija</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Uprava</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Organizacija</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Istraživanja</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Projekti</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Obrazovanje</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Poslovne Informacija</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Studenička Akademija</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Kulturni događaji</Link></li>
                        <li className="f-li"><Link className="f-linka" to="/">Donacije</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Logo i Foto</Link></li>
                    </ul>
                </nav>

                {/* Vodič za pacijente */}
                <nav className="f-pages" aria-label="Vodič za pacijente">
                    <h4 className="f-h4"><Link className="f-link" to="/">Vodič za pacijente</Link></h4>
                    <ul className="fp-ul">
                        <li className="f-li"><Link className="f-link" to="/">Obaveštenja</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Prijem pacijenata</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Zakazivanje</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Radno vreme</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Raspored</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Uputstva</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Zdr.usluge na lični zahtev</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Publikacije</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Informatori</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Savetovanje/podrška</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Pitajte lekara</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Prava pacijenata</Link></li>
                        <li className="f-li"><Link className="f-linka" to="/">Programi MZRS</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Davanje informacija</Link></li>
                        <li className="f-li"><Link className="f-link" to="/">Anketa</Link></li>
                    </ul>
                </nav>

                {/* Contact */}
                <address className="f-contact">
                    <h4 className="f-h4"><Link className="f-link" to="/">Institut za onkologiju Vojvodine</Link></h4>
                    <ul className="f-ul">
                        <li className="f-li">
                            <a target="_blank" href="https://maps.app.goo.gl/ArB2h5kLWAMUmjVS9" className="f-a" rel="noopener noreferrer">
                                <div className="f-img-cont">
                                    <img src={location} alt="Lokacija" className="f-location" />
                                </div>
                                <div className="f-address">
                                    <p className="f-span">Put doktora Goldmana 4.</p>
                                    <p className="f-span">21204 Sremska Kamenica, Republika Srbija</p>
                                </div>
                            </a>
                        </li>
                        <li className="f-li">
                            <a href="tel:+381601518552" className="f-a">
                                <div className="f-img-cont">
                                    <img src={phone} alt="Telefon" className="f-phone" />
                                </div>
                                <span className="f-span">Tel: +381 (0)21 480 5500</span>
                            </a>
                        </li>
                        <li className="f-li">
                            <a href="mailto:info@onk.ns.ac.rs" className="f-a">
                                <div className="f-img-cont">
                                    <img src={email} alt="Email" className="f-email" />
                                </div>
                                <span className="f-span">info@onk.ns.ac.rs</span>
                            </a>
                        </li>
                        <li className="f-li">
                            <a href="mailto:fax@yourfaxservice.com?subject=Fax+Request&body=Please+send+fax+to:+381216613741" className="f-a">
                                <div className="f-img-cont">
                                    <img src={fax} alt="Faks" className="f-fax" />
                                </div>
                                <span className="f-span">Fax: +381 (0)21 661 3741</span>
                            </a>
                        </li>
                    </ul>
                </address>
            </div>
        </footer>
    );
};

export default Footer;
