import React from 'react'
import './index.css'
import ClientCard from '../components/ClientCard'
import PostCard from '../components/PostCard'

const IndexPage = ({ data }) => (
  <div>
    <section className="portfolio">
      <div className="copy">
        <h1>Hi! My name is Malcom Voygt and I do copywrite</h1>
        <p>
          ...by day. By night however, I write about Artificial Intelligence in
          pop culture
        </p>
        <a className="anchor" href="#contact">
          Drop me a line
        </a>
      </div>
      <div className="portfolio__featured">
        {data.allContentfulClient.edges.map((e, i) => (
          <ClientCard
            name={e.node.name}
            work={e.node.workDesctiption}
            key={i}
          />
        ))}
      </div>
    </section>

    <section className="blog">
      <div className="copy">
        <h1>Not everything in life is work...</h1>
        <p>
          Here’s some blogging I do on AI to practice my words, just a silly
          thing I like to do!
        </p>
      </div>
      <div className="blog__posts">
        {data.allContentfulBlogPost.edges.map((e, i) => (
          <PostCard
            slug={e.node.slug}
            title={e.node.title}
            punchLine={e.node.punchLine}
            key={i}
          />
        ))}
      </div>
    </section>
  </div>
)

export default IndexPage

export const query = graphql`
  query data {
    allContentfulClient {
      edges {
        node {
          name
          workDesctiption
        }
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          punchLine
          slug
        }
      }
    }
  }
`
