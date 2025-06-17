import './Navbar.css'
import { NavLink} from 'react-router-dom';
import tel from '../../assets/tel.png'

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
                  <NavLink to = '/autosell' className='nav-li'>
                  Explore
                  </NavLink>
                  </li>
                <li>
                  <NavLink  to = '/details' className='nav-li'>
                    About
                    </NavLink>
                  </li>
                <li className="nav-contact tooltip">
                <NavLink to="/contact">
                  <img className="nav-icon" src={tel} alt="Телефон" />
                  <span className="tooltip-text">
                    +380664239374
                    +380880002222
                  </span>
                </NavLink>
              </li>
             </ul>
        </div>
    )
}

export default Navbar