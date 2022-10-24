// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitData = async event => {
    event.preventDefault()
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    }
  }

  render() {
    const cookies = Cookies.get('jwt_token')
    if (cookies !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Please Login</h1>
        <button type="submit" onClick={this.submitData}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
