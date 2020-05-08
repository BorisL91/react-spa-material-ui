import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
import youtube from "../apis/youtube"
import "semantic-ui-css/semantic.min.css"

const VideoMainHooks = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [query, setQuery] = useState("")

  const onSearchSubmit = async (search) => {
    const response = await youtube.get("/search", {
      params: {
        q: search,
      },
    })
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
    setQuery(query)
  }

  const onVideoSelect = (video) => setSelectedVideo(video)

  useEffect(() => {
    onSearchSubmit("Blues compilation")
  }, [query])

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onSearchSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} className='four wide column' />
          </div>
          <div className='five wide column'>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoMainHooks
