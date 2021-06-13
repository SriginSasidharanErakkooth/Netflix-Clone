
import React, { useEffect, useState } from 'react'
import requests from '../requests';
import axios from './axios';
import './Banner.css'

const imageUrl = 'https://image.tmdb.org/t/p/original';

function Banner() {
    
    const [movie, setMovies] = useState()

    useEffect(() => {
        async function getData(){
            const request = await axios.get(requests.ActionMovies)
            setMovies(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ])

        }
        getData()
        
    }, [])
    return (
        <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
        className='banner'>
           <div className='content'>
               <h1 className='title'>{movie? movie.title:""}</h1>
               <div className='banner_button'>
                   <button className='button'>Play</button>
                   <button className='button'>My list</button>                    
               </div>
               <div>
                   <h1 className='description'>{movie?movie.overview.slice(0,150)+'...':''}</h1>


               </div>
               
           </div>
           <div className='fade_bottom'>

               
           </div>
           
       </div>
    )
}

export default Banner
