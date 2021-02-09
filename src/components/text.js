import React from "react"
import arrow from "../../static/imgs/down-arrow-grey.png" // Tell webpack this JS file uses this image
import styles from "../components/container.module.css"

export default function SlideUpBlurb({children}){
    return(
        <div className={styles.slideUpBlurb}>
            <div data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" >
                <span style={{textAlign:'left'}}>{children}</span>

                <img src={arrow} alt="Logo" style={{width:'5%', marginTop: '3rem',
                marginBottom: '100px',opacity:'.4',textAlign:'center',display:'block'}}/>
            </div>
        </div>    
        
    )
}

