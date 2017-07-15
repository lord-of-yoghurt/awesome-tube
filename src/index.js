import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const KEY = 'AIzaSyC7NfBtNQBvxCtvzd1LxLFZgz4Wf7gsngc'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] }

    YTSearch({key: KEY, term: 'bullshittery'}, (videos) => {
      // this.setState({ videos: videos })
      this.setState({ videos })
    })
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos }/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
