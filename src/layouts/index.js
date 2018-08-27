import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../styles/reset.css'
import '../styles/base.css'
import './index.css'
import ContactForm from '../components/ContactForm'

const Layout = ({ children, data }) => (
  <div className="container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            "I'm a freelance copywriter and I also I write a blog about AI in pop culture.",
        },
        { name: 'keywords', content: 'malcom voygt, freelance, copywrite' },
      ]}
    />
    <div className="container">{children()}</div>
    <section className="contact" id="contact">
      <div className="copy">
        <h1>You have a project in mind?</h1>
        <p>
          Drop me a line and I’ll be happy to talk about it over a cup of coffee
        </p>
        <ContactForm />
      </div>
    </section>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
