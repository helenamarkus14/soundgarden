import {NavLink} from 'react-router-dom';
import "./navbar.css"

const NavBar = () => {
    return(
        <header className='navbar'>
            <NavLink to="/" className='navbarhome'>Home</NavLink>
            <NavLink to="/concerts" className='navbarhome'>Concerts</NavLink>
            <NavLink to="/playlists" className='navbarhome'>Playlists</NavLink>
        </header>
    );
};

export default NavBar;