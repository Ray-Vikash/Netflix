import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/movie-hero.avif'
import movie_title from '../../assets/thor.jpg'
import play from '../../assets/play-button.png'
import info from '../../assets/info.png'
import TitleCard from '../../components/TitleCards/TitleCard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero} alt="hero-image" className='banner-img' />
        <div className="hero-caption">
          <img src={movie_title} alt="" className='caption-img' />
          <p className='caption-text'>
            hi therer
          </p>
          <div className="hero-btn">
            <button className='play-btn'><img src={play} alt="" className='btn-img' /> Play</button>
            <button className='info-btn'><img src={info} alt="" className='btn-img' /> More Info</button>
          </div>
          <TitleCard />
        </div>

      </div>
      <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"}/>
        <TitleCard title={"Only on Netflix"} />
        <TitleCard title={"Upcoming"} />
        <TitleCard title={"Top picks for You"} />
      </div>
      < Footer />
    </div>
  )
}

export default Home