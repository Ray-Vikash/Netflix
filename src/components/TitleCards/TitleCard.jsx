import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import movies from '../../assets/Movies/Movies'
const TitleCard = ({title, category}) => {

  const cardRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)

  const handleWheelScroll = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY
  }

  useEffect(() => {
    cardRef.current.addEventListener('wheel', handleWheelScroll, { passive: false })
      , [cardRef]
  })


  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"} </h2>
      <div className="card-list" ref={cardRef}>
        {movies.map((movie, index) => (
          <div className="card" key={index}>
            <img src={movie.image} alt={movie.name} />
            <p>{movie.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCard