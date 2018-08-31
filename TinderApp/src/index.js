import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MatAppBar from './components/layout/mat_appbar'

class App extends Component {
    render() {
        return (
            <div>
                <MatAppBar />

            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));