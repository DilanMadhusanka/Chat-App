import React from 'react';
import { TextField, Button, Card } from '@material-ui/core';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            username: ''
        };
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    handleConnectPublicly = () => {
        this.props.connect(this.state.username, false)
    }
    render() {
        return (
            <div className="ui center aligned container">
                <br /><br /><br />
                <Card className="ui segment" variant="outlined">
                    <TextField
                        id="user"
                        label="Type your username"
                        placeholder="Username"
                        onChange={this.handleUserNameChange}
                        margin="normal"
                    />
                    <br />
                    <Button variant="contained" color="primary" onClick={this.handleConnectPublicly} >
                        Start Chatting
                    </Button>
                </Card>

            </div>
        )
    }
}