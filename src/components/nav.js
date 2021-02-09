import React from "react"
import { Link } from "gatsby"


const linkStyle = {
  color: '#707070',
  textDecoration: 'none',
  backgroundImage: 'none'
}

const activeStyle = {
  color: 'purple', 
  textDecoration: 'none'
}

// if (props.to === ("/about/")){
//   const activeStyle = {
//     color: '#7587fa', 
//     textDecoration: 'none'
//   }
// }
// else{
//   const activeStyle = {
//     color: '#7522fa', 
//     textDecoration: 'none'
//   }
// }



const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`,float:'left',}}>
    <Link to={props.to} style={linkStyle} activeStyle={activeStyle}>
      {props.children}
    </Link>
  </li>
)


export default function Nav() {
  return (
    <div>
        <ul style={{ listStyle: `none`, float: `left` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/musings/">Musings</ListLink>
        </ul>
    </div>
  )
}