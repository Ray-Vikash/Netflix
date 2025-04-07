import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import movies from '../../assets/Movies/Movies'
import { Link } from 'react-router-dom'
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
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => (setData(res.results))

      )
      .catch(err =>

        console.error(err)
      );
    

    cardRef.current.addEventListener('wheel', handleWheelScroll)

  }, [])



  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"} </h2>
      <div className="card-list" ref={cardRef}>
        {data.map((movie, index) => (
          <Link to={`/player/${movie.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt={movie.original_title} />
            <p>{movie.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCard