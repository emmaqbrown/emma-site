import React from "react"
import Generate from "../components/generate"
import FlexContainer from "../components/container"
import Layout from "../components/layout"
import SidebarFlex from "../components/sidebarFlex"
import MainContent from "../components/mainContent"
import Reload from "../components/reload"

export default function Paper(){
  return(
    <Layout>
    <FlexContainer>
      <SidebarFlex>
      <Reload/>
      </SidebarFlex>
       
      <MainContent>
        <div style={{height:'33rem',border: '1.5px solid #707070'}}>
        <Generate></Generate>
        </div>
      </MainContent>

    </FlexContainer>
  </Layout>
  )
}