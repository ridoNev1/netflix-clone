import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'
//rfce -> snippets
const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, potrait }) {
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
      console.log(request.data.results)
    }
    fetchData()
  }, [fetchUrl, potrait]);

  return (
    <div className='row-container'>
      <h2> {title} </h2>
      <div className="trending-poster">
        {movies.map(elMovies => (
          <img src={`${baseUrl}${potrait ? elMovies.poster_path : elMovies.backdrop_path}`} alt="posterImage" key={elMovies.id} style={stylePoster}/>
        ))}
      </div>
    </div>
  )
}

export default Row
