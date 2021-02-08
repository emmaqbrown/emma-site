import React from "react"

export default function SlideUpBlurb({children}){
    return(
        <div style={{margin:'auto', height: '500px', width:'75%', padding: `0 2rem`,textAlign: 'center', display:'in-block'}}>
            <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease" data-sal-threshhold="0.2">
                {children}
            </div>
        </div>    
        
    )
}

