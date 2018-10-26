import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
// Imports releted to Appbar & Drawer
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
// Imports releted to Constants
import { info } from '../constants/content';
import { appbar_styles } from '../constants/material';
// Import related to Routing
import { mailFolderListItems } from '../data/mat_data';
// Import related to Theme Toggel
import ThemeToggle from './themer/toggle';
// Import related to Youtube Search
import YTSearch from 'youtube-api-search'
import SearchBar from './search/search_bar';
import VideoList from './video/video_list'
import VideoDetail from './video/video_detail';

const API_KEY = 'AIzaSyDY5yVkRoQYC1TkfGgLC_at5kYQcwn_JHo';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            theme: 1,
            app_theme: {
                wrapper: "light_theme",
                drawer: "light_drawer_theme",
            },
            videos: [],
            selectedVideo: null
        };
        this.themeChange = this.themeChange.bind(this);
        this.videoSearch('React Redux');
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    themeChange = () => {
        if (this.state.theme) {
            this.setState({
                theme: 0,
                app_theme: {
                    wrapper: "dark_theme",
                    drawer: "dark_drawer_theme",
                }
            });
        } else {
            this.setState({
                theme: 1,
                app_theme: {
                    wrapper: "light_theme",
                    drawer: "light_drawer_theme",
                }
            });
        }
    };

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

        const { classes, theme } = this.props;
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (

            <Fragment>

                <CssBaseline />

                <div>

                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>

                        <Toolbar disableGutters={!this.state.open}>

                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open && classes.hide)}>
                                <MenuIcon />
                            </IconButton>

                            <Typography variant="title" color="inherit" noWrap>
                                {info.APPLICATION_NAME}
                            </Typography>

                            <Hidden /*smDown*/>
                                <section className={classes.toolbarRight} >

                                    <ThemeToggle
                                        theme={this.state.theme}
                                        app_theme={this.state.app_theme}
                                        toggle={this.themeChange}>
                                    </ThemeToggle>

                                </section>
                            </Hidden>

                        </Toolbar>

                    </AppBar>

                    <Drawer
                        variant="temporary"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}

                        open={this.state.open}>
                        <div className={this.state.app_theme.drawer}>
                            <div className={classes.toolbar} >

                                <span className="version">
                                    {info.APPLICATION_VERSION}
                                </span>

                                <span className="parent-span">
                                    <IconButton onClick={this.handleDrawerClose}>
                                        {theme.direction === 'rtl' ?
                                            <ChevronRightIcon className="arrow" /> :
                                            <ChevronLeftIcon className="arrow" />}
                                    </IconButton>
                                </span>
                            </div>

                            <Divider />

                            <List>
                                {mailFolderListItems}
                            </List>

                        </div>
                    </Drawer>

                    <main className={classNames( this.state.app_theme.wrapper, this.state.open )}>
                        
                        <SearchBar
                            onSearchTermChange={videoSearch} />
                            
                        <VideoDetail
                            video={this.state.selectedVideo} />

                        <VideoList
                            videos={this.state.videos}
                            onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />

                    </main>

                </div>

            </Fragment>

        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(appbar_styles, { withTheme: true })(App);