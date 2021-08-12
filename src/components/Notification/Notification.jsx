import React from 'react';
import PropTypes from 'prop-types';
import {Container, Title} from './Notification.styled.js'

function Notification({message}) {
    return (
        <Container>
            <Title>{message}</Title>
        </Container>
    )
}

export default Notification

Notification.prototype = {
    massage: PropTypes.string.isRequired,
}