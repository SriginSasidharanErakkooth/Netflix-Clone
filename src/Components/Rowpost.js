import React,{useState,useEffect}  from 'react'
import axios from './axios';
import YouTube from 'react-youtube';
import './Rowpost.css'

const API_KEY ='e88b3a4f1d05a49eb9d0665af258dec8'

const imageUrl = 'https://image.tmdb.org/t/p/original';

function Rowpost(props) {
    
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setUrlid] = useState('')

    useEffect(()=>{
        async function getData(){
            const request = await axios.get(props.url)
           
            setMovies(request.data.results);
            console.log(request.data.results)
            return request;

        }
        getData()
    },[props.url]);

   

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,

        },
    };

    const handleMovieTrailer=(id)=>{
        console.log(id)
        if (trailerUrl){
            setUrlid('')
        }else{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US'`).then(response=>{
              if (response.data.results.length!==0){
                  setUrlid(response.data.results[0])
                 

              }
              else{
                  console.log('trailer not available')
              }
        })
    }
  }

    return (
        <div className='row'>
            <h2 className='head'>{props.title}</h2>
            <div className="rowpst">
                 
             {movies.map(obj=>
             <img  key={obj.id} onClick={()=>handleMovieTrailer(obj.id)} className={props.isBig?'pstBig':'pst'} src={`${imageUrl+obj.backdrop_path}`} alt="poster"/>
                

             )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl.key} opts={opts}/>}
            
           
        </div>
    )
}

export default Rowpost
