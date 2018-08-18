import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search/search_bar';
import VideoList from './components/video/video_list'

const API_KEY = 'AIzaSyDY5yVkRoQYC1TkfGgLC_at5kYQcwn_JHo';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        // "(videos) => {} " - is the same as - "function(videos) {} " 
        YTSearch({ key: API_KEY, search_term: 'Surfboards' }, (videos) => {

            //The line below is the same as "this.setState({ videos: videos });"
            this.setState({ videos }); 

        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos = { this.state.videos } />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

