import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <GitHubIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <TwitterIcon />
        <FacebookIcon />
      </div>
      <p> &copy; darwinraj | copyrighted</p>
    </div>
  )
}

export default Footer;
