import React from "react"
import arrow from "../imgs/down-arrow-grey.png" // Tell webpack this JS file uses this image

export default function NextArrow(){
    return(
        <img src={arrow} alt="Logo" style={{width:'3%', marginTop: '2rem',
        marginBottom: '3rem',opacity:'.3'}}/>
    )
}

