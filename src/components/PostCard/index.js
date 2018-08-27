import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import './index.css'

const PostCard = ({ slug, title, punchLine }) => (
  <Link to={`/${slug}`} className="post">
    <h2>{title}</h2>
    <p>{punchLine}</p>
  </Link>
)

PostCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  punchLine: PropTypes.string,
}

export default PostCard
