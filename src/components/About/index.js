// Write your JS code here
import {Component} from 'react'
import LoginButton from '../LogoutButton/index'
import Header from '../Header/index'
import './index.css'

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="about-container">
          <h1 className="heading">About Route</h1>
        </div>
        <LoginButton />
      </>
    )
  }
}

export default About
