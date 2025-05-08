import './Nav.css';
import NavLarge2 from '../nav_large/NavLarge2';
import NavSmall from '../nav_small/NavSmall';

const Nav = () => {
    return(
        <div className="nav">
            <div className="nl-selector">
                <NavLarge2 />
            </div>
            <div className="ns-selector">
                <NavSmall />
            </div>
        </div>
    )
}

export default Nav;