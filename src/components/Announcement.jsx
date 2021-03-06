import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 55px;
    background-color: #DBB3B1;
    color: #2C1A1D;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    text-align: center;
    font-weight: 500;
`;


class Announcement extends Component {
    render() {
        return (
            <div>
                <Container>
                    Grand Cyber Opening! Buy Two or More Cupcakes, Get One Free
                </Container>
            </div>
        );
    }
}

export default Announcement;