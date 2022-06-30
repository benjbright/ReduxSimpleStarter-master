import React from "react"
import ReactDOM from "react-dom"

import SearchBar from "./components/search_bar"

const API_KEY = process.env.REACT_APP_YOUTUBE_TOKEN

// Create a new component - this should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and put it on the page (in the DOM)
// Pass an instance of the App component
// Add a target DOM node
ReactDOM.render(<App />, document.querySelector(".container"))
