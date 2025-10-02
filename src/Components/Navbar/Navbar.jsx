import './Navbar.css'
import { NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>
            </div>
             <ul className='nav-menu'>
                <li>
                  <NavLink to ='/' className='nav-li'>
                  Home
                  </NavLink>
                  </li>
                <li>
                  <NavLink to = '/models' className='nav-li'>
                  Explore
                  </NavLink>
                  </li>
                <li>
                  <NavLink  to = '/details' className='nav-li'>
                    About
                    </NavLink>
                  </li>
                <li className="nav-contact tooltip">
              </li>
             </ul>
        </div>
    )
}

export default Navbar