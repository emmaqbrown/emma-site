import React from "react"


export default function Layout({ children }) {
  return (
    <div style={{ margin: `5rem auto`, maxWidth: 1200, padding: `0 2rem`}}>
      {children}
    </div>
  )
}