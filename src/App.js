import Rowpost from './Components/Rowpost';
import './App.css';
import requests from './requests';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost title='NETFLIX ORIGINALS' isBig url={requests.Originals} />
      <Rowpost title='Trending'  url={requests.Trending}/>
      <Rowpost title='Action Movies'  url={requests.ActionMovies}/>
      <Rowpost title='HorrorMovies'  url={requests.HorrorMovies}/>
      <Rowpost title='RomanceMovies'  url={requests.RomanceMovies}/>

    </div>
  );
}

export default App;
