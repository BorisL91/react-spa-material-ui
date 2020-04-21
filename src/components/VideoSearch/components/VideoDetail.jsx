import React from "react"
import "semantic-ui-css/semantic.min.css"

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Search for videos...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <>
      <div>
        <div className='ui embed'>
          <iframe title='video-player' src={videoSrc} />
        </div>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </>
  )
}

export default VideoDetail