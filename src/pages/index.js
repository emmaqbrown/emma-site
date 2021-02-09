import React from "react"
import FlexContainer from "../components/container"
import Layout from "../components/layout"
import SidebarFlex from "../components/sidebarFlex"
import MainContent from "../components/mainContent"
import SlideUpBlurb from "../components/text"
import { graphql } from "gatsby"
import Img from "gatsby-image"


export default function Home({data}) {
  console.log(data)
  return (
    <Layout>
      <FlexContainer>
        <SidebarFlex />

        <MainContent>
       
            <SlideUpBlurb>
                <Img fluid={data.fileName.childImageSharp.fluid} alt="" />

            </SlideUpBlurb>
        
        </MainContent>
        
      </FlexContainer>
    </Layout>
  );
}



export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "img/3822-15.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`