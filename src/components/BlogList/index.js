import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsListData()
  }

  getBlogsListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const BlogsData = await response.json()
    const updatedBlogsData = BlogsData.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: updatedBlogsData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" width={50} height={50} />
          </div>
        ) : (
          <ul className="blogs-list-container">
            {blogsList.map(eachBlog => (
              <BlogItem key={eachBlog.id} eachBlog={eachBlog} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
