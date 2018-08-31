import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import { info, } from '../../constants/content';
import { drawer, colors, margins } from '../../constants/variables';

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

// Imports releted to Icons
import GithubMDI from 'mdi-material-ui/GithubCircle';
import TwitterMDI from 'mdi-material-ui/Twitter'
import HeadPhoneMDI from 'mdi-material-ui/Headphones'

import { mailFolderListItems, otherMailFolderListItems } from './mat_data';

const drawerWidth = drawer.DRAWER_WIDTH;

const styles = theme => ({

    /**
     * Application Bar
     */
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: colors.APPBAR_COLOR
    },

    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    menuButton: {
        marginLeft: margins.MENU_BUTTON_LEFT,
        marginRight: margins.MENU_BUTTON_RIGHT,
    },

    toolbarRight: {
        marginLeft: 'auto',
        marginRight: margins.TOOLBAR_RIGHT,
    },

    hide: {
        display: 'none',
    },

    /**
     * Drawer Header
     */
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        backgroundColor: colors.DRAWER_HEADER_COLOR
    },

    /**
     * Drawer & Items
     */
    drawerPaper: {
        /*position: 'relative',*/
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },

    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },

});

class MatAppBar extends Component {

    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;

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
                                { info.APPLICATION_NAME }
                            </Typography>

                            <Hidden smDown>
                                <section className={classes.toolbarRight} >
                                    <IconButton color="inherit" aria-label="git">
                                        <GithubMDI />
                                    </IconButton>

                                    <IconButton color="inherit" aria-label="git">
                                        <TwitterMDI />
                                    </IconButton>

                                    <IconButton color="inherit" aria-label="git">
                                        <HeadPhoneMDI />
                                    </IconButton>
                                </section>
                            </Hidden>
                        </Toolbar>
                    </AppBar>

                    <Drawer
                        variant="permanent"
                        classes = {{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}

                        open={this.state.open}>

                        <div className={classes.toolbar}>

                            <span className="version">
                                { info.APPLICATION_VERSION }
                            </span>

                            <span className="parent-span">
                                <IconButton onClick={this.handleDrawerClose}>
                                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                </IconButton>
                            </span>
                        </div>

                        <Divider />

                        <List>
                            {mailFolderListItems}
                        </List>

                        <Divider />

                        <List>
                            {otherMailFolderListItems}
                        </List>

                    </Drawer>

                </div>
            </Fragment>

        );
    }
}

MatAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MatAppBar);