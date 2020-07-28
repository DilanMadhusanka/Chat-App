import React from 'react'
import { getCurrentUser } from '../actions';
import { connect } from 'react-redux';

class Profile extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser();
    }

    getUserDetails(user) {
        return (
            <div className="ui huge container">
                <ul className="ui huge center aligned list">
                    <li>{user.id}</li>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>{user.type}</li>
                    <li>Roles
                    <ul>
                        {user.roles.map((role, index) => <li key={index}>{role}</li>)}
                    </ul>
                    </li>
                    <li>{user.token}</li>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className="ui container">
                {this.props.user && this.getUserDetails(this.props.user)}
            </div>
        );
    }
}

const mapsStateToProps = state => {
    return { user: state.user }
}

export default connect(mapsStateToProps, { getCurrentUser })(Profile);