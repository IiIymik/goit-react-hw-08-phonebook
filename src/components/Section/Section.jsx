import React from 'react';
import PropTypes from 'prop-types';
import { Title, Container } from './Section.styled.js';

function Section({title, children}) {
    return <Container>
            <Title>{title}</Title>
            {children}
        </Container>
           
    
}

export default Section

Section.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}