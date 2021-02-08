import React from "react"
import Layout from "../components/layout"
import SlideUpBlurb from "../components/text"
import Sidebar from "../components/sidebar"
import MainContent from "../components/content"
import { graphql } from "gatsby"


export default function Home({data}) {
  console.log(data)
  return (
    <Layout>
      <Sidebar/>    
      <MainContent>
        
          {data.allMarkdownRemark.edges.map(
            ({ node }) => (
            <SlideUpBlurb  key={node.id}>
                <h4>{node.frontmatter.title}</h4>
                <p>{node.rawMarkdownBody}</p>
            </SlideUpBlurb>
          ))}
       
      </MainContent>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
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

