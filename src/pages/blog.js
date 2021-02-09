import React from "react"
import FlexContainer from "../components/container"
import Layout from "../components/layout"
import SidebarFlex from "../components/sidebarFlex"
import MainContent from "../components/mainContent"
import SlideUpBlurb from "../components/text"
import { graphql } from "gatsby"

export default function Test({data}) {
  return (
    <Layout>
      <FlexContainer>
        <SidebarFlex />

        <MainContent>
        {data.allMarkdownRemark.edges.map(
          ({ node }) => (
          <SlideUpBlurb  key={node.id}>
              <h4>{node.frontmatter.title}</h4>
              <p>{node.frontmatter.date}</p>
              <div dangerouslySetInnerHTML={{ __html: node.html }}
        />          
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
      }
    }
  }
`