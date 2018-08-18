import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { search_term: '' };
    }

    render() {
        return (
            <div>
                <input 
                    value = { this.state.search_term } 
                    onChange = { (event) => this.setState({ search_term: event.target.value }) } >
                </input>
            </div> 
        );
    }
}

export default SearchBar;