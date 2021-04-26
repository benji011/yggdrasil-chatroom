import firebase from 'firebase/app'
import React from 'react'
import { Link } from 'react-router-dom'

import '~/assets/css/navbar/navbar.css'
import logo from '~/assets/img/logo.png'
import { Signout } from '~/components/Signout'
import { Threads } from '~/components/header/Threads'

export const NavBar = (props: {
  firestore: firebase.firestore.Firestore
  user: firebase.User | null | undefined
  auth: firebase.auth.Auth
  setThreadData: Function
}) => {
  const { firestore, user, auth, setThreadData } = props
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="buttons header-buttons">
          {user && (
            <Threads firestore={firestore} setThreadData={setThreadData} />
          )}
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/">
              <h4>
                <i className="fas fa-home" /> Home
              </h4>
            </Link>
          </div>
          <div className="navbar-item">
            {user && (
              <h4>
                Welcome back, <strong>{user.displayName}!</strong>
              </h4>
            )}
          </div>
          <div className="navbar-item">{user && <Signout auth={auth} />}</div>
        </div>
      </div>
    </nav>
  )
}
