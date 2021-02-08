import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Blurb from "../components/text"
import Sidebar from "../components/sidebar"
import Content from "../components/content"
import Nav from "../components/nav"



export default function Home() {
  return (
    <Layout>
      <Sidebar>
        <Header headerText="Emma Q. Brown" subText="What do I like to do? Lots of course but definitely enjoy building
          websites."/>
        <Nav/>

      </Sidebar>
      <Content>
       
          <Blurb />

      </Content>
    </Layout>
  );
}

