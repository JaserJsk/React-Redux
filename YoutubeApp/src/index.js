import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import AppNavigation from './components/common/app_navigation'
import SearchBar from './components/search/search_bar';
import VideoList from './components/video/video_list'
import VideoDetail from './components/video/video_detail';

const API_KEY = 'AIzaSyDY5yVkRoQYC1TkfGgLC_at5kYQcwn_JHo';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('Stephen Colbert');
    }

    videoSearch(term) {

        // "(videos) => {} " - is the same as - "function(videos) {} " 
        YTSearch({ key: API_KEY, term: term }, (videos) => {

            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
            
        });

    }

    render() {

        const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300 )

        return (
            <div>
                <AppNavigation />
                <SearchBar 
                    onSearchTermChange = { videoSearch } />
                <VideoDetail 
                    video = { this.state.selectedVideo } />
                <VideoList 
                    videos = { this.state.videos }
                    onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) } />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

