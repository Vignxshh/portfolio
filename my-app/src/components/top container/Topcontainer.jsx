import React from "react";
import '../top container/topcontainer.css'
import { Element } from "react-scroll";
import Topcontent from "../top content/Topcontent";


const Topcontainer=()=>{
    return(
        <div>
            <Element name="about" className="top_container">
              <Topcontent />
            </Element>
        </div>
    )
};
export default Topcontainer