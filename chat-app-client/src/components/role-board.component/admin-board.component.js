import React from 'react'
import { connect } from 'react-redux';
import { getAdminBoard } from '../../actions';

class BoardAdmin extends React.Component {

    componentDidMount() {
        this.props.getAdminBoard()
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <h3>{this.props.admin}</h3>
                </div>
            </div>
        );
    }
}

const mapsStateToProps = state => {
    return { admin: state.adminBoard }
}

export default connect(mapsStateToProps, { getAdminBoard })(BoardAdmin)