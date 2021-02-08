import React from "react"
import FlexContainer from "../components/container"
import Layout from "../components/layout"
import SidebarFlex from "../components/sidebarFlex"
import MainContent from "../components/mainContent"
import SlideUpBlurb from "../components/text"
import { graphql } from "gatsby"


export default function Home({data}) {
  console.log(data)
  return (
    <Layout>
      <FlexContainer>
        <SidebarFlex />

        <MainContent>
        {data.allMarkdownRemark.edges.map(
            ({ node }) => (
            <SlideUpBlurb  key={node.id}>
                <h4>{node.frontmatter.title}</h4>
                <p>{node.rawMarkdownBody}</p>
            </SlideUpBlurb>
          ))}
        </MainContent>
        
      </FlexContainer>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {tag: {regex: "/project/"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          rawMarkdownBody
          excerpt
        }
      }
    }
  }
`

