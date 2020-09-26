import React, {Component} from "react";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search-bar";
import VideoDetail from "./components/video-detail";
import VideoList from "./components/video-list";

const API_KEY = "AIzaSyB8a5bLlHWWkKIGdtBogZz7UVQMGMnQb38";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch = this.videoSearch.bind(this);
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term, 'maxResults': 25}, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        return (
            <div className="container">
                <SearchBar videoSearch={this.videoSearch} />
                <div className="row">
                    <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
                    <VideoDetail video={this.state.selectedVideo} />                    
                </div>
            </div>
        );
    }
}
