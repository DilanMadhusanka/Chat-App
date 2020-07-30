import React from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUser, logOut } from '../actions';
import { connect } from 'react-redux';

class NavBar extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    isModerator() {
        if (this.props.currentUser) {
            return this.props.currentUser.roles.includes('ROLE_MODERATOR')
        }
    }

    isAdmin() {
        if (this.props.currentUser) {
            return this.props.currentUser.roles.includes('ROLE_ADMIN')
        }
    }

    isUser() {
        if (this.props.currentUser) {
            return this.props.currentUser.roles.includes('ROLE_USER')
        }
    }

    render() {
        return (
            <div>
                <div className="ui mini menu">
                    <div className="header item">
                        <div className="ui header">
                            <Link to="/" className="ui header">
                                ReactRedSpring
                            </Link>
                        </div>
                    </div>
                    <Link to="/home" className="ui item">
                        Home
                    </Link>
                    {this.isModerator() &&
                        <Link to={"/moderator"} className="ui item">
                            Moderator Board
                        </Link>
                    }
                    {this.isAdmin() &&
                        <Link to={"/admin"} className="ui item">
                            Admin Board
                        </Link>
                    }
                    {this.isUser() &&
                        <Link to={"/chat"} className="ui item">
                            Chat Room
                        </Link>
                    }
                    <div className="right menu">
                        {this.props.currentUser ? (
                            <div className="ui item">
                                <Link to={"/profile"} className="ui item">
                                    {this.props.currentUser.username}
                                </Link>
                                <a href="/login" className="ui item" onClick={this.props.logOut}>Log Out</a>
                            </div>
                        ) : (
                                <div className="ui item">
                                    <Link to="/login" className="ui item">
                                        Login
                                    </Link>
                                    <Link to={"/signup"} className="ui item">
                                        Sign Up
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

const mapsStateToProps = state => {
    return {
        currentUser: state.user
    }
}

export default connect(mapsStateToProps, { getCurrentUser, logOut })(NavBar);