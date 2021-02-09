import React from "react"
import arrow from "../../static/imgs/down-arrow-grey.png" // Tell webpack this JS file uses this image

export default function SlideUpBlurb({children}){
    return(
        <div style={{margin:'auto', width:'75%', padding: `0 1rem`, marginBottom: '20px'}}>
            <div data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" >
                <span style={{textAlign:'left'}}>{children}</span>

                <img src={arrow} alt="Logo" style={{width:'5%', marginTop: '75x',
                marginBottom: '100px',opacity:'.4',textAlign:'center',display:'block'}}/>
            </div>
        </div>    
        
    )
}

