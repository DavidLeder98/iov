import './NavDropdowns.css';
import { Link } from 'react-router-dom';

const NavDorpdownJavnost = () => {
    return(
        <ul className="nl-dropdown">
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >DigPath projekat</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Onkologija</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Novosti</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Arhiva novosti</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >"Archive of Oncology"</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Informacioni sistem</Link></li>
            <li className="nl-dd-li"><Link className="nl-dd-a" to="/" >Telemedicina</Link></li>
        </ul>
    );
};

export default NavDorpdownJavnost;