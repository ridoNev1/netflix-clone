import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'
//rfce -> snippets
const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, potrait, setDetail }) {
  const [movies, setMovies] = useState([])
  const stylePoster = {
    width: ''
  }
  if (potrait) {
    stylePoster.width = '180px'
  } else {
    stylePoster.width = '350px'
  }

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchUrl, potrait]);

  return (
    <div className='row-container' >
      <h2> {title} </h2>
      <div className="trending-poster">
        {movies.map((elMovies, index) => (
          <img src={`${baseUrl}${potrait ? elMovies.poster_path : elMovies.backdrop_path}`} alt="posterImage" key={index} style={stylePoster} onClick={() => setDetail(elMovies)}/>
        ))}
      </div>
    </div>
  )
}

export default Row
