import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import '../assets/styles/App.scss'
import { useEffect, useState } from 'react'

const App = () => {
    const [videos, setVideos] = useState([]) /*creación de dos constantes que van a ser utilizadas por las funciones de abajo*/

    useEffect( () => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
    }, [])

    return (
            <div className="App">
                <Header />
                <Search />
                <Categories>
                    <Carousel>
                        <CarouselItem /> 
                        <CarouselItem />    
                        <CarouselItem /> 
                        <CarouselItem />             
                    </Carousel>
                </Categories>

                <Categories>
                    <Carousel>
                        <CarouselItem /> 
                        <CarouselItem />               
                    </Carousel>
                </Categories>

                <Categories>
                    <Carousel>
                        <CarouselItem />             
                    </Carousel>
                </Categories>
                <Footer/>

            </div>
        )
}

export default App