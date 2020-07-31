import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './CircularProgressIcon.css';

export default class CircularProgressIcon extends React.Component {

    render() {
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <CircularProgress size={100} />
            </div>
        )
    }
}