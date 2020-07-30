import React from 'react';
import { TextField, Button, Card, CircularProgress } from '@material-ui/core';
import './Login.css';

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