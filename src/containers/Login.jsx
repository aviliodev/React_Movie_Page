import React, { useState } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {loginRequest} from '../actions' //*No hace falta escribir el index porque ya se entiende que se quiere ese archivo al tener ese nombre
import Header from '../components/Header'
import '../assets/styles/components/Login.scss'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'

const Login = (props) => {
    const [form, setValues] = useState({
        email: '',
    })

    //event.target :
    // Debes tener en cuenta que no siempre lo vas a encontrar así, hay ocaciones que lo veras de la siguiente forma:
    // handleInput={(e) => e.target}
    // La e es una variable y la puedes nombrar a tu gusto, solo que habitualmente se maneja con event o e
    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault() //*Para que no se haga la acción de enviar formulario
        props.loginRequest(form)
        props.history.push('/') //*Redirigimos al usuario al home
    }

    return (
        <>
            <Header isLogin />
            <section className="login">
                <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input
                        name="email" 
                        className="input" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input
                        name="password"
                        className="input" 
                        type="password" 
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                    <label>
                        <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
                    </label>
                    <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon}/> Inicia sesión con Google</div>
                    <div><img src={twitterIcon}/> Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta <Link to="/Register">Regístrate</Link></p>
                </section>
            </section>
        </>

    )
}

const mapDispatchToProps = {
    loginRequest,
}

// export default Login
export default connect(null, mapDispatchToProps)(Login)