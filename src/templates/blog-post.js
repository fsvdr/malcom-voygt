import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import './blog-post.css'

const BlogPage = ({
  pathContext: { title, punchLine, category, releaseDate, cover, content },
}) => (
  <div className="blog-post">
    <Link to="/" className="anchor-home">
      Malcom Voygt
    </Link>
    <div className="blog-post__details">
      <div className="blog-post__info">
        <h1>{title}</h1>
        <p>{`${category.join(', ')} — ${releaseDate}`}</p>
      </div>
      <div className="blog-post__cover">
        <img src={cover.file.url} alt="" />
      </div>
    </div>
    <div className="blog-post__content">
      <h2>{punchLine}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
      />
    </div>
  </div>
)

export default BlogPage
