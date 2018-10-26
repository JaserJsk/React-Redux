import React, { Component, Fragment } from 'react'

class ThemeToggle extends Component {
    
    constructor() {

        super();

        themeChange = () => {
            if (state.theme) {
                setState({ theme: 0 });
            }
            else {
                setState({ theme: 1 });
            }
        };

    }

}

export default ThemeToggle;