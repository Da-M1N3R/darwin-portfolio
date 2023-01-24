import React from 'react';
// import { Link } from "react-router-dom";
import BannerImage from "../assets/RedandBlackBanner.png";
import '../styles/Home.css';
import DownloadIcon from '@mui/icons-material/Download';
import Resume from '../assets/darwin_resume.pdf';

function Home() {

  const handleClick = async () => {
    try {
      // create a link element and trigger a download
      const link =  document.createElement('a');
      link.href = Resume;
      link.download = 'darwin_resume.pdf';
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1> Darwin Raj </h1>
        <p> 
            Freelancing programmer seeking to dive into the world of Software and Technology. Interested in Blockchain, Data Science, Cryptography and Cybersecurity. Still searhing for the right field. 
        </p>
        {/* <p className='resumetext'> Download a copy </p> */}
        {/* <button><a href={ Resume } download>  <DownloadIcon /> RESUME </a></button> */}
        <button onClick={ handleClick }> <DownloadIcon /> RESUME </button>
      </div>
    </div>
  )
}

export default Home
