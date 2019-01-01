import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Container from './Container'
import Footer from './Footer'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subTitle
          }
        }
      }
    `}
    render={data => {
      const { subTitle, title } = data.site.siteMetadata

      return (
        <Fragment>
          <Header subTitle={subTitle} title={title} />
          <main>
            <Container>{children}</Container>
          </main>
          <Footer />
        </Fragment>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
