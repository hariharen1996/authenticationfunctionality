// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-items">
          <Link to="/" className="nav-lists">
            Home
          </Link>
          <Link to="/about" className="nav-lists">
            About
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Header
