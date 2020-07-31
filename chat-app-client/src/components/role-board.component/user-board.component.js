import React from 'react'
import { connect } from 'react-redux';
import { getUserBoard } from '../../actions';

class BoardUser extends React.Component {

    componentDidMount() {
        this.props.getUserBoard()
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <h3>{this.props.user}</h3>
                </div>
            </div>
        );
    }
}

const mapsStateProps = state => {
    return { user: state.userBoard }
}

export default connect(mapsStateProps, { getUserBoard })(BoardUser)