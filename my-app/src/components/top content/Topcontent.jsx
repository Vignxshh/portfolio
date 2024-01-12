import React from 'react'
import { Link } from 'react-scroll'
import '../top content/topcontent.css'

const Topcontent = () => {
  return (
    <div className='top_content'>
        <div className="topcontent_container">
            <h1>Vignesh</h1>
            <p>Web Developer</p>

            <a href='CV.pdf' download='CV.pdf'>
                <button className='topcontent_downloadbutton'>download CV</button></a>

            <Link to='project_container' smooth={true} duration={500}><button className='topcontent_workbutton'>my work</button></Link>

        </div>
    </div>
  )
}
export default Topcontent
