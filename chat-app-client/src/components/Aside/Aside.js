import React from 'react';
import { TextField, List, ListItem, Avatar, ListItemText, ListItemSecondaryAction, Tooltip, IconButton } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import './Aside.css'

import userImage from '../userImage.png';
import PrivateMessageBoxx from '../PrivateMessageBox';

export default class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            openPrivateBox: false,
            roomNotification: this.props.roomNotification,
            yousername: this.props.username,
            otherUser: ''

        };
    }

    handleClosePrivateBox = () => {
        this.setState({
            openPrivateBox: false
        })
    }

    handleOpenPrivateBox = (e) => {
        let otherUser = e.currentTarget.dataset.value;

        this.setState({
            openPrivateBox: true,
            otherUser: otherUser
        })
    }

    handleSearch = (e) => {

        let currentList = [];

        let newList = [];

        if (e.target.value !== "") {

            currentList = this.props.roomNotification;

            newList = currentList.filter(notification => {

                const lc = notification.sender.split('~')[0].toLowerCase();

                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = this.props.roomNotification;
        }

        this.setState({
            roomNotification: newList
        });
    }

    render() {
        return (
            <aside>
                {/* <div className="vr"></div> */}
                <TextField
                    id="search full-width"
                    label="Search members"
                    type="search"
                    onChange={this.handleSearch}
                    margin="normal"
                />
                <ul >
                    <List component="nav">
                        {this.state.roomNotification.map((notification, i) =>
                            this.state.yousername.toLowerCase().trim() === notification.sender.split('~')[0].toLowerCase().trim()
                                ? ""
                                : <li key={i} onClick={this.handleOpenPrivateBox} data-value={notification.sender.split('~')[0].toLowerCase().trim()}>
                                    <div>
                                        <div>
                                            <ListItem
                                                key={i}
                                                role={undefined}
                                                dense
                                                button >
                                                <Avatar alt="User Image" src={userImage} />

                                                <ListItemText primary={notification.sender.split('~')[0]}
                                                    secondary={notification.status === 'online' ||
                                                        notification.status === 'typing...' ?
                                                        <span className="status green"></span> : <span className="status orange"></span>} />
                                                <ListItemSecondaryAction>
                                                    <Tooltip title="Send private message">
                                                        <IconButton aria-label="Private Message">
                                                            <CommentIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        </div>
                                        <br />

                                    </div>
                                </li>
                        )} </List></ul>

                {this.state.openPrivateBox ?
                    <PrivateMessageBoxx open={this.state.openPrivateBox} handleClose={this.handleClosePrivateBox}
                        notifications={this.props.roomNotification} youser={this.state.yousername} otherUser={this.state.otherUser} />
                    : ""}

            </aside>
        )
    }
}
