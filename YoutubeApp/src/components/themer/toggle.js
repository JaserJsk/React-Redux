import React, { Component, Fragment } from 'react'

import IconButton from '@material-ui/core/IconButton';

// Imports releted to Icons
import LightOn from 'mdi-material-ui/LightbulbOn';
import LightOff from 'mdi-material-ui/Lightbulb';

class ThemeToggle extends Component {

    render() {

        return (
            <IconButton 
                color = "inherit" 
                aria-label = "git"
                theme = { this.props.theme }
                app_theme = { this.props.app_theme }
                onClick = { this.props.toggle.bind(this) }>
                    {this.props.theme == 1 ?
                        (<LightOn style={{ width: "30px", height: "30px" }} />) :
                        (<LightOff style={{ marginTop: "5px", height: "25px", width: "25px", }} />)
                    }
            </IconButton>
        );

    }

}

export default ThemeToggle;