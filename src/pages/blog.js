import React from "react"
import FlexContainer from "../components/container"
import Layout from "../components/layout"
import SidebarFlex from "../components/sidebarFlex"
import MainContent from "../components/mainContent"
import SlideUpBlurb from "../components/text"
import NextArrow from "../components/nextArrow"
import { graphql } from "gatsby"

export default function Test({data}) {
  return (
    <Layout>
      <FlexContainer>
        <SidebarFlex />

        <MainContent>
        {data.allMarkdownRemark.edges.map(
          edge => (
          <SlideUpBlurb  key={edge.node.id}>
              <h3  style={{textAlign: 'left'}}>{edge.node.frontmatter.title}</h3>
              <div  style={{textAlign: 'left'}} dangerouslySetInnerHTML={{ __html: edge.node.html }}/>
              <p  style={{opacity: 0.3, textAlign: 'left'}}>{edge.node.frontmatter.date}</p>
              {edge.next ? <NextArrow/> : <div style={{marginBottom: '12rem'}}></div>}

        </SlideUpBlurb>
          ))}
        </MainContent>
        
      </FlexContainer>
    </Layout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {tag: {regex: "/blog/"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date
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