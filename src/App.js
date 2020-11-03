import './App.css';
import Row from './Row'
import request from './request'

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} potrait/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action" fetchUrl={request.fetchActionMovies}/>
      <Row title="Horror" fetchUrl={request.fetchHororMovies}/>
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
