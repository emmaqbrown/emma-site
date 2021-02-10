import React from "react"
import Generate from "../components/generate"
import FlexContainer from "../components/container"
import Layout from "../components/layout"
import SidebarFlex from "../components/sidebarFlex"
import MainContent from "../components/mainContent"
import Reload from "../components/reload"
import GenerateFace from "../components/generateFace"

function getColor(){
  var colorList = ['#69B3F5','#F5BB6D','#EBDBBE','#C0CFFE','#F5BCEE']
  return colorList[Math.floor(Math.random() * colorList.length)];
}

export default function Paper(){
  return(
    <Layout>
    <FlexContainer>
      <SidebarFlex>
      <Reload/>
      </SidebarFlex>
       
      <MainContent>
        <div style={{height:'33rem',border:'1.5px solid '+getColor()}}>
        <Generate/>
        </div>
      </MainContent>

    </FlexContainer>
  </Layout>
  )
}