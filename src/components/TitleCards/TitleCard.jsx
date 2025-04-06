import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import movies from '../../assets/Movies/Movies'
const TitleCard = ({ title, category }) => {

  const cardRef = useRef(null)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE0NjE5MjU3NjYzN2UzMzhiOTlkNjc2NzYyM2JmOSIsIm5iZiI6MTY4OTYwMDU3Mi41NzMsInN1YiI6IjY0YjU0MjNjNzg1NzBlMDExZGFhMmFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vGyy7sMM5KNuVeb3Ylj_cfCWHhe0KDf5EsPWUQDGh4M'
    }
  };


  const handleWheelScroll = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY
  }

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => {
        setData(res.results)
        setIsLoading(false)
      })
      .catch(err => {setIsLoading(false) 
      console.error(err)});

    cardRef.current.addEventListener('wheel', handleWheelScroll, { passive: false })

  }, [])

  if(isLoading) {
    return <div className='loading'>Loading...</div>
  }

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