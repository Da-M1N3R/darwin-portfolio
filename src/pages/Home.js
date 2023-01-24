import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/RedandBlackBanner.png";
import '../styles/Home.css';
import DownloadIcon from '@mui/icons-material/Download';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1> Darwin Raj </h1>
        <p> 
            Freelancing programmer seeking to dive into the world of Software and Technology. Interested in Blockchain, Data Science, Cryptography and Cybersecurity. Still searhing for the right field. 
        </p>
        {/* <p className='resumetext'> Download a copy </p> */}
        <Link>
            <button> <DownloadIcon /> RESUME </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
