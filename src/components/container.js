import React from "react";
import styles from "../components/container.module.css"


export default function FlexContainer({children}){
    return(
        <div className={styles.containerStyle}>
            {children}
        </div>
    )
}

// export default function FlexContainer(){
//     return(
//         <div className={styles.containerStyle}>
//             <div className={styles.sidebarStyle}>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra risus sit amet ipsum convallis ullamcorper. Donec pellentesque leo et neque porta blandit. Suspendisse eleifend tortor a ante porta accumsan. 
// </p>
//             </div>
//             <div className ={styles.mainContentStyle}>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra risus sit amet ipsum convallis ullamcorper. Donec pellentesque leo et neque porta blandit. Suspendisse eleifend tortor a ante porta accumsan. 
// </p>
//             </div>
//         </div>
//     )
// }