import React from "react"
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
import youtube from "../apis/youtube"
import "semantic-ui-css/semantic.min.css"

class VideoMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = { videos: [], selectedVideo: null }
  }

  componentDidMount() {
    this.onSearchSubmit("blues compilation")
  }

  onSearchSubmit = async (search) => {
    const response = await youtube.get("/search", {
      params: {
        q: search,
      },
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail
                video={this.state.selectedVideo}
                className='four wide column'
              />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default VideoMain
