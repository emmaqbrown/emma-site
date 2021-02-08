import React from "react";
import Header from "../components/header"
import Nav from "../components/nav"


export default function Sidebar()  {
  return (
    <div style={{position:'relative'}}>
        <div style={{ width: '25%', float: 'left', height:'1400px', position: 'fixed',display:'block'}}>
            <Header headerText="Emma Q. Brown" subText="What do I like to do? Lots of course but definitely enjoy building
            websites."/>
            <Nav/>
        </div>
    </div>
  );
};

