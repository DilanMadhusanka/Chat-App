import React from 'react';
import { getPublicContent } from '../actions';
import { connect } from 'react-redux';

class Home extends React.Component {
    
    componentDidMount() {
        this.props.getPublicContent()
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui sizer vertical segment">
                    <div className="ui huge header">{this.props.content}</div>
                    <p></p>
                </div>
            </div>
        );
    }
}

const mapsStateToProps = state => {
    return { content: state.publicContent }
}

export default connect(mapsStateToProps, { getPublicContent })(Home);