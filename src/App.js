import './App.css';
import Row from './Row'
import request from './request'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Detail from './components/Detail/Detail'
import React, { useState } from 'react'

function App() {

  // data
  const [detailBox, detailToggle] = useState(false)
  const [detailData, setDetail] = useState([])

  // detailBox setup
  let detailRender = null
  if (detailBox) {
    detailRender = <Detail className="detail-toggle" sendDetail={detailData} setDetail={(value) => showDetail(value)}/>
  }

  const showDetail = (value) => {
    if (detailBox) {
      detailToggle(false)
    } else {
      detailToggle(true)
    }
    setDetail(value)
  }

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} potrait setDetail={(value) => showDetail(value)} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} setDetail={(value) => showDetail(value)} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} setDetail={(value) => showDetail(value)} />
      <Row title="Action" fetchUrl={request.fetchActionMovies} setDetail={(value) => showDetail(value)} />
      <Row title="Horror" fetchUrl={request.fetchHororMovies} setDetail={(value) => showDetail(value)} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} setDetail={(value) => showDetail(value)} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} setDetail={(value) => showDetail(value)} />
      {detailRender}

    </div>
  );
}

export default App;
