import _ from "lodash"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import YTSearch from "youtube-api-search"
import SearchBar from "./components/search_bar"
import VideoList from "./components/video_list"
import VideoDetail from "./components/video_detail"

// const API_KEY = process.env.REACT_APP_YOUTUBE_TOKEN
const API_KEY = "AIzaSyCiaZx_5ONkWkR3fMPd2o9NHlGh3Gq0acs"

// Before writing a new component - ask if that component will be required to maintain any kind of state?

class App extends Component {
  constructor(props) {
    // Whenever the App component boots up / renders, will get an instance of App on screen and the constructor function will run
    // key and value are same string - condense to just name of variable
    //  { videos: videos}
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
    }

    // Will run on boot up as in the constructor function - callback function will run
    this.videoSearch("surfboards")
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

// Downwards data flow - only most parent component in the application should be responsible for fetching data

// Take this component's generated HTML and put it on the page (in the DOM)
// Pass an instance of the App component
// Add a target DOM node
ReactDOM.render(<App />, document.querySelector(".container"))
