// Write your JS code here
import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LogoutButton extends Component {
  render() {
    const onLogOut = () => {
      const {history} = this.props
      Cookies.remove('jwt_token')
      history.replace('/login')
    }

    return (
      <>
        <div className="btn-container">
          <button type="button" onClick={onLogOut}>
            Logout
          </button>
        </div>
      </>
    )
  }
}

export default withRouter(LogoutButton)
