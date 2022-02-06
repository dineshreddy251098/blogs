import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogDetailsData = await response.json()
    const updatedBlogDetailsData = {
      id: blogDetailsData.id,
      title: blogDetailsData.title,
      imageUrl: blogDetailsData.image_url,
      avatarUrl: blogDetailsData.avatar_url,
      author: blogDetailsData.author,
      content: blogDetailsData.content,
      topic: blogDetailsData.topic,
    }
    this.setState({blogDetails: updatedBlogDetailsData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogDetails

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" width={50} height={50} color="#00Bfff" />
          </div>
        ) : (
          <div className="blog-item-details-container">
            <h1>{title}</h1>
            <div className="blog-author-container">
              <img className="avatar-image" src={avatarUrl} alt="avatar" />
              <p className="author-name">{author}</p>
            </div>
            <img className="image" src={imageUrl} alt={title} />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
