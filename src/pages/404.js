import React from "react"
import { Link } from "gatsby"


const containerStyle = {
    background: '#367858',
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const headingStyle={
    color: 'white',
    textAlign:'center',
    fontSize: '12rem',
    lineHeight: '15rem',
}

const linkStyle = {
    color: 'white',
    textAlign:'center',
    fontSize: '1rem',
}

const subtextStyle = {
    color: 'white',
    textAlign:'center',
    fontSize: '1rem',
    fontStyle: 'italic'
}

export default function About({data}) {
  return (
        <div style={containerStyle}>
            <div>
                <h1 style={headingStyle}>404</h1>
                <p style={subtextStyle}>There's nothing for you <Link to="/" style={linkStyle}>here</Link>.</p>
            </div>
        </div>

  );
}

