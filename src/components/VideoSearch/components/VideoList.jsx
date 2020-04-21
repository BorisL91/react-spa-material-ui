import React from "react"
import VideoItem from "./VideoItem"
import "semantic-ui-css/semantic.min.css"

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        className='item'
        video={video}
        onVideoSelect={onVideoSelect}
        key={video.etag}
      />
    )
  })

  return (
    <div>
      <div className='ui relaxed divided list'>{renderedVideos}</div>
    </div>
  )
}

export default VideoList
