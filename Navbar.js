import {Link} from 'react-router-dom';
import './Navbar.css';
function Navbar(){
    return(
        <div className='navbar'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;