import React from "react"
import FlexContainer from "../components/container"
import Layout from "../components/layout"
import SidebarFlex from "../components/sidebarFlex"
import MainContent from "../components/mainContent"
import SlideUpBlurb from "../components/text"
import NextArrow from "../components/nextArrow"

import { graphql } from "gatsby"



export default function About({data}) {
  return (
    <Layout>
      <FlexContainer>
        <SidebarFlex />

        <MainContent>
        {data.allMarkdownRemark.edges.map(
            edge => (
            <SlideUpBlurb  key={edge.node.id}>
                <h2 style={{textAlign: 'left'}}>{edge.node.frontmatter.title}</h2>
                <div  style={{textAlign: 'left'}} dangerouslySetInnerHTML={{ __html: edge.node.html }}/>
                {edge.next ? <NextArrow/> : <div style={{marginBottom: '25rem'}}></div>}

            </SlideUpBlurb>
          ))} 
        </MainContent>
        
      </FlexContainer>
    </Layout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {tag: {regex: "/about/"}}}, sort: {order: ASC, fields: frontmatter___order}) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
        }
        next {
          id
        }
      }
    }
  }
`