import React from 'react'
import './Footer.css'
import insta from '../../assets/instagram.png'
import fb from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-icons">
        <img src={insta} alt="" />
        <img src={fb} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />

      </div>
      <ul>
        <li>
          <a href="#">Audio and Subtitles</a>
        </li>
        <li>
          <a href="#">Media Center</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>

        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Corporate Information</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">Copyright</a></li>
        <li><a href="#">Security</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Netflix Originals</a></li>
        <li><a href="#">Jobs</a></li>

      </ul>
      <p className='copyright-text'>@ 1997-2023 Netflix, Inc.</p>
    </footer>

  )
}

export default Footer