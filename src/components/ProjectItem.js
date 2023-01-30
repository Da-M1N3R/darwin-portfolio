import React from 'react';

function ProjectItem({ image, name, web_url, description }) {
  return (
    <div className='projectItems'>
        <div className='projectImg' style={{ backgroundImage: `url(${image})` }}></div>
        <h1> {name} </h1>
        <p> Link: {description} </p>
        <button className='projectUrl'>
          <a href={ web_url }>
            Link
          </a>
        </button>
    </div>
  )
}

export default ProjectItem;
