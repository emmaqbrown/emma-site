import React from "react"
import PaperExample from "../components/papertest"
import Layout from "../components/layout"
import SidebarFlex from "../components/sidebarFlex"
import MainContent from "../components/mainContent"
import FlexContainer from "../components/container"
import Reload from "../components/reload"

export default function Paper(){
  return(
    <Layout>
      <FlexContainer>
        <SidebarFlex>
          <Reload/>
        </SidebarFlex>

        <MainContent>
          <PaperExample style={{height:'100%'}}></PaperExample>
        </MainContent>
        
      </FlexContainer>
    </Layout>
  )
}
