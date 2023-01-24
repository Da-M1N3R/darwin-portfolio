import React from 'react';

function ProjectItem({ image, name, description }) {
  return (
    <div className='projectItems'>
        <div className='projectImg' style={{ backgroundImage: `url(${image})` }}></div>
        <h1> {name} </h1>
        <p> Link: {description} </p>
    </div>
  )
}

export default ProjectItem;
