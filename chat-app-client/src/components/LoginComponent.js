import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import LoginForm from './LoginForm';

class LoginComponent extends React.Component {

    onSubmit = formValues => {
        this.props.login(formValues);
    }

    isAuthenticated(state) {
        if (!state.id) {
            return (
                <div className="ui container">
                    <div className="ui red floating message">
                        <p>{this.props.isSignIn}</p>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="ui container">
                <h3 className="ui center aligned huge header">Login</h3>
                <LoginForm onSubmit={this.onSubmit} />
                <br />
                {this.props.isSignIn && this.isAuthenticated(this.props.isSignIn)}
            </div>
        );
    }
}

const mapsStateToProps = state => {
    return { isSignIn: state.auth }
}

export default connect(mapsStateToProps, { login })(LoginComponent)