import React from 'react'
import './Detail.css'
import Youtube from 'react-youtube'

function Detail({ sendDetail, setDetail }) {
  // data
  const opts = {
    height: '540',
    width: '100%',
    borderRadius: '10px',
    playerVars: {
      autoplay: 1
    }
  }

  return (
    <div className="detail-box">
      <div className="detail-content">
        <Youtube opts={opts}/>
        <button className="button-back" onClick={() => setDetail([])}>Back</button>
        <div className="detail-etc">
          <h1>{sendDetail?.name || sendDetail?.original_name || sendDetail?.title }</h1>
          <div className="description-data">
            <p>{sendDetail.overview}</p>
            <div className="description-detail">
              <h4>Release date: {sendDetail?.first_air_date || sendDetail?.release_date}</h4>
              <h4>rating: <span>{sendDetail.vote_average}</span></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
