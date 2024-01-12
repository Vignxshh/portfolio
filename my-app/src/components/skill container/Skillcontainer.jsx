import React from 'react'
import '../skill container/skillcontainer.css'
import { Element } from 'react-scroll'
import skilling from '../../images/skill.jpg'
import LinearProgress from '@material-ui/core/LinearProgress'

const Skillcontainer = () => {
  return (
   <Element className='skillcontainer' name='skills'>

    <div className="skillcontainer_image">
    <img src={skilling} />
    </div>

    <div className="skillcontainer_text">
      <h2>SKILL<span>SET</span></h2>

      <div className="skillcontainer_skillset">
        <h4>React</h4>
        <div className="skillcontainer_slider1">
          <LinearProgress variant='determinate' value={90}/>
          </div>
        </div>

        <div className="skillcontainer_skillset">
        <h4>BootStrap</h4>
        <div className="skillcontainer_slider2">
          <LinearProgress variant='determinate' value={60}/>
          </div>
        </div>

        <div className="skillcontainer_skillset">
        <h4>Python</h4>
        <div className="skillcontainer_slider3">
          <LinearProgress variant='determinate' value={80}/>
          </div>
        </div>

        
        <div className="skillcontainer_skillset">
        <h4>Web development</h4>
        <div className="skillcontainer_slider4">
          <LinearProgress variant='determinate' value={75}/>
          </div>
        </div>



    </div>
   </Element>
  )
}

export default Skillcontainer