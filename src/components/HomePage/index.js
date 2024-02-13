import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

class HomePage extends Component {
  render() {
    return (
      <div className="bg-container">
        <Header />
        <div className="home-container">
          <h1 className="heading">Welcome to Meetup</h1>
          <p className="description">Please register for the topic</p>
          <Link to="/register">
            <button type="button" className="button">
              Register
            </button>
          </Link>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      </div>
    )
  }
}
export default HomePage
