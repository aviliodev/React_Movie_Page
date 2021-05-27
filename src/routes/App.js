import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'

const App  = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                {/* Si no se pone una ruta, entonces el componente se muestra por defecto: */}
                <Route component={NotFound} /> 
            </Switch>        
        </Layout>

    </BrowserRouter>
)

// NOTA: La diferencia entre poner el switch y no ponerlo es que cuando tienes el mismo path para todos solamente toma el primero y lo renderiza.

export default App