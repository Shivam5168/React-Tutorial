import '../components/WorkCardStyles.css'
import pro1 from "../assets/project1.png";
import React from 'react'
import { NavLink } from 'react-router-dom';

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        <div className='project-card'>
          <img src={pro1} alt="img" />
          <h2 className='project-title'>Project Title</h2>
          <div className='pro-details'>
            <p>This is a paragraph</p>
            <div className='pro-btns'>
              <NavLink go="" className="btn">Source</NavLink>
              <NavLink go="" className="btn">View</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
