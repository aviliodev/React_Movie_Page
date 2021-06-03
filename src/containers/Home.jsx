import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
// import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
// import Footer from '../components/Footer'
// import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

// const API = 'http://localhost:3000/initialState/'

// Gracias a connect y mapStateToProps que están más abajo, los elementos mylist, trends y originals estan disponibles para ser recibidos como parámetros en Home
const Home = ({mylist, trends, originals}) => {

    // const initialState = useInitialState(API)

    // return initialState.length === 0 ? <h1>Loading...</h1> : (
    return (
            <>
                <Search />

                {mylist?.length > 0 && 
                    <Categories title="Mi Lista"> 
                        <Carousel>
                            {mylist.map(item =>
                                <CarouselItem 
                                    key={item.id} 
                                    {...item} 
                                    isList={true}
                                />
                            )}          
                        </Carousel>
                    </Categories>
                }


                <Categories title="Tendencias">
                    <Carousel>
                        {trends?.map(item =>
                            <CarouselItem key={item.id} {...item}/>
                        )}
                                    
                    </Carousel>
                </Categories>

                <Categories title="Originales de Platfix">
                    <Carousel>
                    {originals?.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                    </Carousel>
                </Categories>
            </>
        )
}

// Se crea la funcion mapStateToProps para tomar solo los elementos que necesito del state
const mapStateToProps = (state) => {
    return {
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
    }
}

// export default Home

// Mediante connect, nos conectamos al state disponible para toda la aplicación que se envia mediante el provider (ver src/index.js)
export default connect(mapStateToProps,null)(Home)
// La función connect recibe dos parámetros mapStateToProps y mapDispatchToProps

// En palabras resumidas, la primera solicita datos del store(la base de datos) y el segundo envía datos.