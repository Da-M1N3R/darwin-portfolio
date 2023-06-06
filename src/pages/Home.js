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
            Self taught Full-Stack Developer with a Mechanical Engineering Degree keen on diving into the world of Science and Technology. Driven to make an impact for the betterment of mankind. 
        </p>
        {/* <p className='resumetext'> Download a copy </p> */}
        {/* <button><a href={ Resume } download>  <DownloadIcon /> RESUME </a></button> */}
        <button onClick={ handleClick }> <DownloadIcon /> RESUME </button>
      </div>
    </div>
  )
}

export default Home
