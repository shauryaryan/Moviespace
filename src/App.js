import React, { useState } from 'react';
import './App.css';
import Row from './components/MovieRow';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Search from './components/Search';

function App() {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div className="app">
            <Nav />
            <Banner />
            <Search setSearchResults={setSearchResults} />
            {searchResults.length > 0 ? (
                <Row title="Search Results" movies={searchResults} isLargeRow />
            ) : (
                <>
                    <Row
                        title="NETFLIX ORIGINALS"
                        fetchUrl={requests.fetchNetflixOriginals}
                        isLargeRow
                    />
                    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
                    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
                </>
            )}
        </div>
    );
}

export default App;


