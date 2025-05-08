import './NavDropdowns.css';
import { Link } from 'react-router-dom';

const NavDorpdownOnama = () => {
    return(
        <ul className="nl-dropdown">
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >O Institutu</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Misija i Vizija</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Kućni red</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Akreditacija</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Uprava</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Organizacija</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Istraživanja</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Projekti</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Obrazovanje</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Poslovne Informacija</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Studenička Akademija</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Kulturni događaji</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Donacije</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Logo i Foto</Link></li>
        </ul>
    );
};

export default NavDorpdownOnama;