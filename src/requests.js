const API_KEY ='e88b3a4f1d05a49eb9d0665af258dec8'

const requests={
    Trending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    Originals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    TopRated:`/movie/toprated/?api_key=${API_KEY}&language=en-US`,
    ActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    HorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`
}

export default requests;