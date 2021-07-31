import React from 'react';
import Banner from '../Banner';
import './Homescreen.css';
import Nav from '../Nav';
import requests from '../Request';
import Row from '../Row';

function Homescreen() {
    return (
        <div className='homeScreen'>
            {/*NAVBAR FOR THE NETFLIX CLONE*/}
            <Nav />

             {/*BANNER FOR THE NETFLIX CLONE*/}
            <Banner />
            
            {/*ROW FOR THE NETFLIX CLONE*/}
            <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchAactionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default Homescreen;
