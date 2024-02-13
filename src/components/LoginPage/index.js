import {Component} from 'react'

import Header from '../Header'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class LoginPage extends Component {
  state = {userName: '', activeOptionId: topicsList[0].id, showError: false}

  onChangeName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeOption = event => {
    this.setState({activeOptionId: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {userName} = this.state
    if (userName === '') {
      this.setState({showError: true})
    } else {
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {userName, activeOptionId, showError} = this.state
    return (
      <>
        <Header />
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />

          <form className="form-container" onSubmit={this.onSubmitForm}>
            <h1 className="login-heading">Let us join</h1>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="select-form"
              value={userName}
              onChange={this.onChangeName}
            />
            <label className="label" htmlFor="topic">
              TOPICS
            </label>
            <select
              className="input"
              value={activeOptionId}
              onChange={this.onChangeOption}
              id="topic"
            >
              {topicsList.map(eachTopic => (
                <option key={eachTopic.id} value={eachTopic.id}>
                  {eachTopic.displayText}
                </option>
              ))}
            </select>

            <button type="submit" className="button-submit">
              Register Now
            </button>
            {showError ? <p>Please enter your name</p> : null}
          </form>
        </div>
      </>
    )
  }
}
export default LoginPage
