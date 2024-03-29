import {NavLink, useNavigate} from 'react-router-dom';
import {useState} from 'react'
import "./navbar.css"

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const logOut = () => {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("id");
      navigate('/logout');
  }

    return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-red"
              href="/dashboard"
            >
             <div className="flex hover:text-turquoise"> 
             <img src="/images/SGLogo.jpeg" className="mr-1 h-6 w-6 rounded-full hover:text-turquoise" alt="" /> Sound Garden
             </div>  
            </a>
            <button
              className="text-red cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 hover:text-turquoise flex items-center text-xs uppercase font-bold leading-snug text-red hover:opacity-75"
                  href="/dashboard"
                >
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">

                <NavLink
                  className="px-3 py-2 flex hover:text-turquoise items-center text-xs uppercase font-bold leading-snug text-red hover:opacity-75"
                  to={`/concerts/${id}`} >

                 <span className="ml-2">Concerts</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex hover:text-turquoise items-center text-xs uppercase font-bold leading-snug text-red hover:opacity-75"
                  href="/playlists"
                >
                 <span className="ml-2">Playlists</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex hover:text-turquoise items-center text-xs uppercase font-bold leading-snug text-red hover:opacity-75"
                  href="/users"
                >
                 <span className="ml-2">Users</span>
                </a>
              </li>
              <li className="nav-item">
                {token ? 
                <button
                  className="px-3 py-2 flex hover:text-turquoise items-center text-xs uppercase font-bold leading-snug text-red hover:opacity-75"
                  onClick={logOut} >
                 <span className="ml-2">Log Out</span>
                </button> : 
                <NavLink
                className="px-3 py-2 flex hover:text-turquoise items-center text-xs uppercase font-bold leading-snug text-red hover:opacity-75"
                to={`/signin`} >
                <span className="ml-2">Log In</span>
                </NavLink>
                  }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


export default NavBar;