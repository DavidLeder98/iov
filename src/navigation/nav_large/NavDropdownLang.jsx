import './NavDropdowns.css';
import { Link } from 'react-router-dom';
import serbia from '../../assets/svgs/lang/serbia.svg';
import britain from '../../assets/svgs/lang/britain.svg';
import hungary from '../../assets/svgs/lang/hungary.svg';
import slovakia from '../../assets/svgs/lang/slovakia.svg';

const NavDorpdownLang = () => {
    return(
        <ul className="nl-dropdown">
            <li className="nl-dd-li"><img src={serbia} alt="language flag" className="nl-2-flag" />Srpski lat.</li>
            <li className="nl-dd-li"><img src={serbia} alt="language flag" className="nl-2-flag" />Српски ћир.</li>
            <li className="nl-dd-li"><img src={britain} alt="language flag" className="nl-2-flag" />English</li>
            <li className="nl-dd-li"><img src={hungary} alt="language flag" className="nl-2-flag" />Magyar</li>
            <li className="nl-dd-li"><img src={slovakia} alt="language flag" className="nl-2-flag" />Slovenský</li>
        </ul>
    );
};

export default NavDorpdownLang;