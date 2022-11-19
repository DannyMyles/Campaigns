import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
         <nav className="navbar">
          <div className="links">
            <Link to="/login">Login</Link>
            <Link to="/campaign">Campaigns</Link>
          </div>
        </nav>
        </>
      )
}

export default Navbar