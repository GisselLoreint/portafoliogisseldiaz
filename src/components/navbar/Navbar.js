import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';


function Navbar() {
    return (
        <nav>
            <Link to="/home" className="item">
                <i className="fa-solid fa-house-chimney"></i> Home
            </Link>
            <Link to="/about-me" className="item">
            <i class="fa-solid fa-face-smile-beam"></i>  About me
            </Link>
            <Link to="/jobs" className="item">
            <i class="fa-solid fa-laptop-file"></i>  Jobs
            </Link>
            <Link to="/studies" className="item">
            <i class="fa-solid fa-user-graduate"></i>  Studies
            </Link>
            <Link to="/skills" className="item">
            <i class="fa-solid fa-icons"></i>  Skills
            </Link>
        </nav>
    );
}

export default Navbar;