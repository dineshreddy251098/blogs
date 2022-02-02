import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachBlog

  return (
    <li className="blog-item-container">
      <Link to={`/blogs/${id}`}>
        <img className="blog-image" src={imageUrl} alt="title" />
        <div className="blog-details-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img className="avatar-image" src={avatarUrl} alt="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
