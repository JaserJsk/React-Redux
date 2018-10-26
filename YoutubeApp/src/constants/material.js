import { drawer, colors, margins } from './variables';

/* This Style applies for Material Appbar */
export const drawerWidth = drawer.DRAWER_WIDTH;
export const appbar_styles = theme => ({

    root: {
        flexGrow: 1,
        height: 440,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },

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

export const progress_styles = {
    root: {
        flexGrow: 1,
    },
};