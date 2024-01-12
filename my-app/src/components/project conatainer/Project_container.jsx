import React from 'react'
import movie from '../../images/movie project.png'
import { Element } from 'react-scroll'
import Projects from '../projects/Projects'
import '../project conatainer/project_container.css'


const Project_container = (props) => {
  const my_project=[
    {
      title:'Movie booking app',
      img:movie,
      desc:'Designed and developed a dynamic content management system, allowing administrators to add, update, and manage movie listings, showtimes, and events. ',
      link:'www.google.com'

    },
  ]



  return (
   <Element className='project_container' id='projects'>
    <h1>Projects</h1>
    <div className="projectcontainer_project">
      {my_project.map((project,index)=>{
          
            return(
              <Projects key={index} 
               title={project.title}
               img={project.img}
                desc={project.desc} 
                link={project.link} />
              
            )
          
            })}
      
    </div>


   </Element>
  )
}

export default Project_container