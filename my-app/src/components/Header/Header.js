import './Header.css'
import { Link } from 'react-router-dom'
export default function Header () {
    return (
        <div className="header-container">
            <ul className='header-list-container'>
                <li className='header-list-element'><Link to="/">Home</Link></li>
                <li className='header-list-element'><Link to="/product">Product</Link></li>
                <li className='header-list-element'><Link to="/aboutUs">About Us</Link></li>
                <li className='header-list-element'><Link to="/excel">Excel</Link></li>
            </ul>
        </div>
    )
}