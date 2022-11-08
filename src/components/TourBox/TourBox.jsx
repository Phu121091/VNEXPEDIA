import React from 'react'

const TourBox = ({data}) => {
  return (
    <div className='tour-box'>
        <h1>{data.title}</h1>
        <button>Buy!</button>
    </div>
  )
}

export default TourBox