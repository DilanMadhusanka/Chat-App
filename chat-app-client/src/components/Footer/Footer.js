import React from 'react';
import { TextField } from '@material-ui/core';
import './Footer.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            chatMessage: '',
        };
    }

    handleSendMessage = () => {

        this.props.sendMessage('CHAT', this.state.chatMessage)

        this.setState({
            chatMessage: ''
        })
    }

    handleTyping = (event) => {

        this.setState({
            chatMessage: event.target.value,
        });
        this.props.sendMessage('TYPING', event.target.value);

    };

    render() {
        return (
            <div>
                {this.props.privateMessage ?
                    <div className="footerComponent-private">
                        <TextField
                            id="msg"
                            label="Type your message here..."
                            placeholder="Press enter to send message"
                            onChange={this.handleTyping}
                            margin="normal"
                            value={this.state.chatMessage}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.handleSendMessage();
                                }
                            }}
                        />
                    </div> : <div className="footerComponent">
                        <TextField
                            id="msg"
                            label="Type your message here..."
                            placeholder="Press enter to send message"
                            onChange={this.handleTyping}
                            margin="normal"
                            value={this.state.chatMessage}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.handleSendMessage();
                                }
                            }}
                        />
                    </div>}
            </div>
        )
    }
}