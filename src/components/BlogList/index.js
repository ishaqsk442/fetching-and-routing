// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')

    const data = await response.json()

    const updateData = data.map(each => ({
      id: each.id,
      avatarUrl: each.avatar_url,
      author: each.author,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))

    console.log(updateData)
    this.setState({blogsList: updateData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <div className="blogs-list">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(each => <BlogItem key={each.id} blogListItem={each} />)
        )}
      </div>
    )
  }
}

export default BlogList
