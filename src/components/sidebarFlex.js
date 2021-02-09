import React from "react";
import Header from "../components/header"
import Nav from "../components/nav"
import { StaticQuery, graphql } from "gatsby"
import styles from "../components/container.module.css"
import Helmet from "react-helmet"

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
              <Helmet>
                <meta charSet="utf-8" />
                <title>{data.site.siteMetadata.title}</title>
              </Helmet>
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

