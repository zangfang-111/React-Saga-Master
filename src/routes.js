import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import Auth from './auth'
import SignUp from './auth/signup'
import Home from './components/home'
import { getToken } from './services/user/actions'

/**
 * Root routers define component.
 *
 * @param {Function} getToken
 * @returns {*} routers
 *
 */
function Routes ({ token, getToken }) {
  const [auth, setAuth] = useState(false)

  /**
   * useEffect lifecycle for token status check.
   */
  useEffect(() => {
    /**
     * Check local storage token status for reload.
     */
    const dmToken = window.localStorage.getItem('dmToken')
    if (dmToken !== 'null' && !!dmToken) {
      getToken({ token: dmToken })
      setAuth(true)
    } else setAuth(false)

    /**
     * Redux store token capture for redirect to HOME.
     */
    if (token) {
      getToken({ token })
      setAuth(true)
    }
  }, [token])

  /**
   * Login route for authentication check.
   *
   * @param {*} props
   * @returns {*} Routers
   *
   */
  const LoginRoute = ({ component: Component }) => (
    !auth
      ? <Route component={Component} />
      : <Redirect to={{ pathname: '/' }} />
  )

  /**
   * Private route for authentication check.
   *
   * @param {*} props
   * @returns {*} Routers
   *
   */
  const PrivateRoute = (props) => {
    return auth
      ? <Route {...props} component={props.component} />
      : <Redirect to={{ pathname: '/auth' }} />
  }

  return (
    <Router>
      <Switch>
        <LoginRoute exact path='/auth' component={() => <Auth />} />
        <Route path='/auth/signup' component={() => <SignUp />} />
        <PrivateRoute
          path='/'
          component={() => (
            <Switch>
              <Route path='/admin/:slug/' component={() => <Home />} />
              <Route
                path='/'
                component={() => (
                  <Redirect to={{ pathname: '/admin/dashboard/' }} />
                )}
              />
            </Switch>
          )}
        />
      </Switch>
    </Router>
  )
}

/**
 * The function for get state of props.
 *
 * @param {*} state
 * @returns {*}
 *
 */
const mapStateToProps = state => ({
  token: state.getIn(['userReducer', 'token'])
})

/**
 * The function for actions dispatch.
 *
 * @param {*} dispatch
 * @returns {*}
 *
 */
const mapDispatchToProps = dispatch => ({
  getToken: params => {
    dispatch(getToken(params))
  }
})

/**
 * Export with wrap of compose and connect of redux features.
 */
export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Routes)
