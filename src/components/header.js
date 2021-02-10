import React from "react"
import { Link } from "gatsby"

const linkStyle = {
  color: 'black',
  textDecoration: 'none'
}

export default function Header(props) {
  return (
      <div>
        <h1><Link to="/" style={linkStyle}>{props.headerText}</Link></h1>
        <p>{props.subText}</p>
      </div>
  )
}


