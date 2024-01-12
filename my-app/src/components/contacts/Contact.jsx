import React from "react";
import { Element } from "react-scroll";
import '../contacts/contact.css'
import { IconButton } from "@material-ui/core";
import {Instagram,LinkedIn, Twitter} from "@material-ui/icons"
 

const Contact =()=>{
    return(
        <Element className="contact" id="contact">
            <h1>Cont<span>act</span></h1>
            <div className="contact_container">
                <p>
                    Email: <span>vigneshhx5@gmail.com</span>
                </p>
                <p>
                    Git: <span>Vignxshh</span>
                </p>
                <div className="contact_icon">
                    <a href="https://www.instagram.com/vignxs_h/">
                        <IconButton>
                            <Instagram />
                        </IconButton>
                    </a>

                    <a href="https://twitter.com/Vignesh30433066">
                        <IconButton>
                            <Twitter />
                        </IconButton>
                    </a>

                    <a href="#">
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                </div>
            
            </div>
        </Element>
        
        
    )
}
export default Contact;