import './NavDropdowns.css';
import { Link } from 'react-router-dom';

const NavDorpdownVodic = () => {
    return(
        <ul className="nl-dropdown">
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Obaveštenja</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Prijem pacijenata</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Zakazivanje</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Radno vreme</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Raspored</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Uputstva</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Zdr.usluge na lični zahtev</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Publikacije</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Informatori</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Savetovanje/podrška</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Pitajte lekara</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Prava pacijenata</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Programi MZRS</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Davanje informacija</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Anketa</Link></li>
        </ul>
    );
};

export default NavDorpdownVodic;