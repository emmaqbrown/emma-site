import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Blurb from "../components/text"
import Sidebar from "../components/sidebar"
import Content from "../components/content"
import Nav from "../components/nav"
import { graphql } from "gatsby"



export default function About({data}) {
  return (
    <Layout>
      <Sidebar>
        <Header headerText="Emma Q. Brown" subText="What do I like to do? Lots of course but definitely enjoy building
          websites."/>
        <Nav/>


      </Sidebar>
      <Content>
        <Blurb />
        <h1>About {data.site.siteMetadata.title}</h1>

      </Content>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`