import React from "react"
import arrow from "../img/down-arrow-grey.png" // Tell webpack this JS file uses this image

export default function NextArrow(){
    return(
        <img src={arrow} alt="Logo" style={{width:'3%', marginTop: '2rem',
        marginBottom: '100px',opacity:'.3'}}/>
    )
}

