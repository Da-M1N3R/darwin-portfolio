import React from 'react';
import { ProjectList } from '../helpers/ProjectList';
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css';
import BannerImage from "../assets/RedandBlackBanner.png";

function Projects() {
  return (
    <div className='projects' style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1 className='projectTitle'> Projects </h1>
        <div className='projectList'>
            {ProjectList.map((projectItem, key) => {
                return (
                    <ProjectItem 
                        key={key}
                        image={projectItem.image} 
                        name={projectItem.name} 
                        description={projectItem.description} 
                    />
                );
            })}
        </div>
      
    </div>
  )
}

export default Projects;
