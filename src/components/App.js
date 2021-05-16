import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videos: [], selectedVido: null };

  onSearchBarSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    console.log("From the App", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
