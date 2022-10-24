// Write your JS code here
import {Component} from 'react'
import Header from '../Header/index'
import LogoutButton from '../LogoutButton/index'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <h1 className="heading">Home Route</h1>
        </div>
        <LogoutButton />
      </>
    )
  }
}

export default Home
