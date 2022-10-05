import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      <Banner />
      <Row 
      title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow 
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchTopHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchTopDocumentaries}/>
    </div>
  );
}

export default App;
