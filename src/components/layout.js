import React from "react"
import styles from "../components/layout.module.css"


export default function Layout({ children }) {
  return (
    
    <div className={styles.layoutStyle}>
      {children}
    </div>
  )
}