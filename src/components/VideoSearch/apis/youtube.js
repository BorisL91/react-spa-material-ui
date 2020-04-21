import axios from "axios"

const KEY = "AIzaSyCg2BmMN4h_YOujGxJwZF6yDe_1GgDsl8Y"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
})
