import React, { Component } from 'react';

// Import components
import MatAppBar from './layout/mat_appbar'

// Import Containers
import BookList from '../containers/book_list'

export default class App extends Component {
    render() {
        return (
            <div>
                <MatAppBar />
                <BookList />
            </div>
        );
    }
}