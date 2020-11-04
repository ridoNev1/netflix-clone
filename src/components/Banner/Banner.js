import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import requestUrl from '../../request'
import './Banner.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Banner() {
  const [bannerData, setBannerData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requestUrl.fetchNetflixOriginals)
      setBannerData(request.data.results[Math.floor(Math.random() * request.data.results.length)])
    }
    fetchData()
  }, [])

  // styling
  const bannerStyle = {
    backgroundImage: `url(${baseUrl}${bannerData?.backdrop_path})`
  }

  return (
    <div className="banner-box" style={bannerStyle} >
      <div className="banner-content">
        <h1>{ bannerData?.original_name || bannerData?.name || bannerData?.title }</h1>
        <div className="banner-button">
          <button>Play</button>
          <button>MyList</button>
        </div>
        <h4>{ bannerData.overview }</h4>
      </div>
      <div className="fade-bottom"/>
    </div>
  )
}

export default Banner
