import './Nav.css';
import NavLarge from '../nav_large/NavLarge';
import NavSmall from '../nav_small/NavSmall';

const Nav = () => {
    return(
        <div className="nav">
            <div className="nl-selector">
                <NavLarge />
            </div>
            <div className="ns-selector">
                <NavSmall />
            </div>
        </div>
    )
}

export default Nav;