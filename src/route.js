import React from 'react'
import {Router,Route} from 'react-router'
import {Link} from 'react-router-dom'

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/other">other</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class About extends React.Component{
  render() {
    return <h3>About</h3>
  }
}

class Other extends React.Component{
  render() {
    return (
      <div>
        <h2>other</h2>
        {this.props.children || "Welcome to your other"}
      </div>
    )
  }
}

class Message extends React.Component{
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
}

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="other" component={Other}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)

export default Router;