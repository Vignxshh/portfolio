import React, { useState } from 'react'
import '../projects/projects.css'

const Projects = (props) => {
    const[show,setshow]=useState(false)
  return (
   <a href={props.link}>
    <div className='project_collections' onMouseEnter={()=>setshow(true)} onMouseLeave={()=>setshow(false)}>
      {
        show ?
        (
          <div className='project_content'>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>

          </div>
        ):
        (<img src={props.img} alt=''/>)
      }
    </div>
   </a>
  )
}

export default Projects