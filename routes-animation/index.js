console.log(React)
// import React from 'react';
// import { render } from 'react-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
// import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()
    console.log('HOME Will mount', this.props.match.isExact)
  }
  componentWillUnmount() {
    console.log('HOME will unmount', this.props.match.isExact)
  }
  render() {
    return (
      <CSSTransition
        key={location.key}
        classNames='fade'
        timeout={1000}
      >
        <div className='home'>
          You are on the home page
        </div>
      </CSSTransition>
    )
  }
}

class Other extends React.Component {
  constructor() {
    super()
    console.log('Other Will mount', this.props.match.isExact)
  }
  componentWillUnmount() {
    console.log('Other will unmount', this.props.match.isExact)
  }
  render() {
    return (
      <CSSTransition
        key={location.key}
        classNames='fade'
        timeout={1000}
      >
        <div className='other'>
          You are on the other page
        </div>
      </CSSTransition>
    )
  }
}

class App extends React.Component {
    render() {
        console.log(1, this.props)
        return (
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/other'>Other</Link>
                  </li>
                </ul>
              </nav>
              <TransitionGroup>
                <Switch location={location}>
                  <Route exact path='/' component={withRouter(Home)} />
                  <Route exact path='/other' component={withRouter(Other)} />
                </Switch>
              </TransitionGroup>
            </div>
          )
    }
}

render((
  <BrowserRouter>
    {withRouter(<App />)}
  </BrowserRouter>
), document.getElementById('root'));
