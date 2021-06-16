import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import gravatar from '../utils/gravatar'
import {LogoutRequest} from '../actions'
import {connect} from 'react-redux'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const Header = (props) => {

  const {user, isLogin, isRegister} = props

  const hasUser = Object.keys(user).length > 0 //para captar los elementos tiene un objeto: Object.keys
  
  const handleLogout = () => {
    props.LogoutRequest({})
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  })

  return (
      <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video"/>
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser?
            <img src ={gravatar(user.email)} alt = {user.email} /> :
            <img src={userIcon} alt=""/> 
          }  
          <p>Perfil</p>
        </div>
        <ul>

          {hasUser ?
            <li><a href="/">{user.name}</a></li> :
            null
          }

          {hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Cerrar sesión</a></li> :
            <li><Link to="Login">Iniciar Sesión</Link></li>
          }

          
          
        </ul>
      </div>
    </header>

  )
}

const mapStateToprops =  state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
  LogoutRequest,
}

//export default Header
export default connect(mapStateToprops,mapDispatchToProps)(Header)
// La función connect recibe dos parámetros mapStateToProps y mapDispatchToProps

// En palabras resumidas, la primera solicita datos del store(la base de datos) y el segundo envía datos.