import React from 'react'
import { connect } from 'react-redux';
import { getModeratorBoard } from '../actions';

class BoardModerator extends React.Component {

    componentDidMount() {
        this.props.getModeratorBoard()
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <h3>{this.props.moderator}</h3>
                </div>
            </div>
        );
    }
}

const mapsStateToProps = state => {
    return { moderator: state.modBoard }
}

export default connect(mapsStateToProps, { getModeratorBoard })(BoardModerator)