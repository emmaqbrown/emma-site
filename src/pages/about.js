import React from "react"
import FlexContainer from "../components/container"
import Layout from "../components/layout"
import SidebarFlex from "../components/sidebarFlex"
import MainContent from "../components/mainContent"
import SlideUpBlurb from "../components/text"
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
                <h3 style={{textAlign: 'left'}}>{edge.node.frontmatter.title}</h3>
                <div  style={{textAlign: 'left'}} dangerouslySetInnerHTML={{ __html: edge.node.html }}/>
            </SlideUpBlurb>
          ))} 
        </MainContent>
        
      </FlexContainer>
    </Layout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {tag: {regex: "/about/"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`