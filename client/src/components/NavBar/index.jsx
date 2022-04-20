import {NavLink} from 'react-router-dom';
import "./navbar.css"

const NavBar = () => {
    return(
        <header className='navbar'>
            <NavLink to="/" className='navbarhome'>Home</NavLink>
        </header>
    );
};

export default NavBar;