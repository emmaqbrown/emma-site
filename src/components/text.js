import React from "react"
// import arrow from "../img/down-arrow-grey.png" // Tell webpack this JS file uses this image
import styles from "../components/container.module.css"

export default function SlideUpBlurb({children}){
    return(
        <div className={styles.slideUpBlurb}>
            <div data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" style={{display:'block'}}>
                {children}
            </div>
        </div>    
        
    )
}

