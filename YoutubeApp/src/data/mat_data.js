import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { drawer_items } from '../constants/content';

import ListItemText from '@material-ui/core/ListItemText';
import Youtube from 'mdi-material-ui/Youtube';
import Docs from 'mdi-material-ui/FileDocument';

export const mailFolderListItems = (
    <div>
        <ListItem button component="a"
                href="https://www.youtube.com/">
            <ListItemIcon>
                <Youtube />
            </ListItemIcon>
            <ListItemText primary={ drawer_items.YOUTUBE } />
        </ListItem>

        <ListItem button component="a"
                href="https://docs.senseidev.com/dokumentation/javascript-library/react/react-redux/youtube-app">
            <ListItemIcon>
                <Docs />
            </ListItemIcon>
            <ListItemText primary={ drawer_items.DOCUMENTATION } />
        </ListItem>
    </div>
);