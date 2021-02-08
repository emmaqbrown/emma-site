import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`,float:'left' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Nav() {
  return (
    <div>
        <ul style={{ listStyle: `none`, float: `left` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/resume/">Contact</ListLink>
        </ul>
    </div>
  )
}