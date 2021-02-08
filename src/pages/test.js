import React from "react"
import FlexContainer from "../components/container"
import Layout from "../components/layout"
import SidebarFlex from "../components/sidebarFlex"
import MainContent from "../components/mainContent"

export default function Test({}) {
  return (
    <Layout>
      <FlexContainer>
        <SidebarFlex />

        <MainContent>
            <p>hello</p>
        </MainContent>
        
      </FlexContainer>
    </Layout>
  );
}

