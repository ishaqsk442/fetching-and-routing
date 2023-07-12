// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogListItem} = props

  const {id, author, imageUrl, title, topic, avatarUrl} = blogListItem

  return (
    <Link to={`/blogs/${id}`}>
      <div className="each-list">
        <img src={imageUrl} alt={`item${id}`} className="img" />
        <div className="details-cont">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="profile-name">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
