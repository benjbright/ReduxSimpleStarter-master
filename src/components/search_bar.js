import React, { Component } from "react"

class SearchBar extends Component {
  // State is a plain Javascript object that is used to record and react to user events
  // Whenever a component's state is changed, the component immediately re-renders - also forces all of it's children to re-render

  constructor(props) {
    // All Javascript classes have a special function called the constructor
    // the first and only function called automatically whenever a new instance of the class is created (e.g. whenever a new instance of SearchBar is created)
    // reserved for set up inside of the class
    // Component has its own constructor function - can access it by calling 'super'
    super(props)

    this.state = { term: "" }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }

  // Add an event handler to the input element
  // on or handle - name of element - name of the event itself
  // use event object to access the value property of the input

  // Controlled input / form element - value is set by the 'state'
  // When tell the input that value is provided by state - controlled component
  // Value set by state - value only changes when the state changes
  // When the component re-renders, value of controlled component = state
}

export default SearchBar
