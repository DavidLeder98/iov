import './Contact.css';
import location from '../../assets/svgs/footer/location.svg';
import phone from '../../assets/svgs/footer/phone.svg';
import fax from '../../assets/svgs/footer/fax2.svg';
import email from '../../assets/svgs/footer/email.svg';
import Questions from './Questions';

const Contact = () => {
    return(
        <section className="contact">
            <h2 className="c-h2">Kontakt</h2>
            <div className="contact-essence">
                <address className="contact-left">
                    <h3 className="c-h3">Opšte informacije</h3>
                    <ul className="c-ul">
                        <li className="c-li">
                            <a target="_blank" href="https://maps.app.goo.gl/ArB2h5kLWAMUmjVS9" className="c-a" rel="noopener noreferrer">
                                <div className="c-img-cont">
                                    <img src={location} alt="Lokacija" className="c-location" />
                                </div>
                                <div className="c-address">
                                    <p className="c-span">Put doktora Goldmana 4.</p>
                                    <p className="c-span">21204 Sremska Kamenica, Republika Srbija</p>
                                </div>
                            </a>
                        </li>
                        <li className="c-li">
                            <a href="tel:+381601518552" className="c-a">
                                <div className="c-img-cont">
                                    <img src={phone} alt="Telefon" className="c-phone" />
                                </div>
                                <span className="c-span">Tel: +381 (0)21 480 5500</span>
                            </a>
                        </li>
                        <li className="c-li">
                            <a href="mailto:info@onk.ns.ac.rs" className="c-a">
                                <div className="c-img-cont">
                                    <img src={email} alt="Email" className="c-email" />
                                </div>
                                <span className="c-span">info@onk.ns.ac.rs</span>
                            </a>
                        </li>
                        <li className="c-li">
                            <a href="mailto:fax@yourfaxservice.com?subject=Fax+Request&body=Please+send+fax+to:+381216613741" className="c-a">
                                <div className="c-img-cont">
                                    <img src={fax} alt="Faks" className="c-fax" />
                                </div>
                                <span className="c-span">Fax: +381 (0)21 661 3741</span>
                            </a>
                        </li>
                    </ul>
                </address>
                <div className="contact-right">
                    <Questions />
                </div>
            </div>
        </section>
    )
}

export default Contact;