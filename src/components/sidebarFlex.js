import React from "react";
import Header from "../components/header"
import Nav from "../components/nav"
import { StaticQuery, graphql } from "gatsby"
import styles from "../components/container.module.css"

export default function SidebarFlex()  {
    return (
        <StaticQuery
          query={graphql`
            query HeadingQuery {
              site {
                siteMetadata {
                  title,
                  description
                }
              }
            }
          `}
          render={data => (
            <div className={styles.sidebarStyle}>
              <div className={styles.innerDiv} >
                  <Header 
                  headerText={data.site.siteMetadata.title}
                  subText={data.site.siteMetadata.description}/>
                  <Nav/>
              </div>
          </div>
          )}
        />
        
      );
};

