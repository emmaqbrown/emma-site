import React from "react"


export default function Layout({ children }) {
  return (
    <div style={{ margin: `5rem auto`, padding: `0 3rem`}}>
      {children}
    </div>
  )
}