import React from "react"
import FlexContainer from "../components/container"
import Layout from "../components/layout"
import SidebarFlex from "../components/sidebarFlex"
import MainContent from "../components/mainContent"
import SlideUpBlurb from "../components/text"
import NextArrow from "../components/nextArrow"
import { graphql } from "gatsby"
import Img from "gatsby-image"


export default function Home({data}) {
  console.log(data)
  return (
    <Layout>
      <FlexContainer>
        <SidebarFlex />

        <MainContent>
       
            {data.allFile.edges.map(edge => {
            return (
              <SlideUpBlurb>
            <Img fluid={edge.node.childImageSharp.fluid} style={{alignItem:'center'}}/>
            {edge.next ? <NextArrow/> : <div style={{marginBottom: '20rem'}}></div>}
            </SlideUpBlurb>
            )
          })}
        
        </MainContent>
        
      </FlexContainer>
    </Layout>
  );
}



export const query = graphql`
  {
    allFile(filter: {relativeDirectory: {eq: "imgs"}, extension: {eq: "jpg"}}, sort: {fields: ctime, order: DESC}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxHeight: 700, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize

            }
          }
        }
        next {
          absolutePath
        }
      }
    }
  }
`