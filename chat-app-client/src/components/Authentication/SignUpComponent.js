import React from 'react'
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { signup } from '../../actions';

class SignUpComponent extends React.Component {

    onSubmit = formValues => {
        this.props.signup(formValues);
    }

    isSuccessful() {
        if (this.props.reg) {
            return this.props.reg.successful
        }
    }

    render() {
        return (
            <div className="ui container">
                {!this.isSuccessful() &&
                    <div>
                        <h3 className="ui center aligned huge header">Sign Up</h3>
                        <SignUpForm onSubmit={this.onSubmit} />
                    </div>
                }
                {this.props.reg && this.props.reg.message && (
                    <div className={this.props.reg.successful ? 'ui success message' : 'ui negative message'}>
                        <div className="header">
                            {this.props.reg.message}
                        </div>
                        <p></p>
                    </div>
                )}
            </div>
        );
    }
}

const mapsStateToProps = state => {
    return { reg: state.signup }
}

export default connect(mapsStateToProps, { signup })(SignUpComponent)