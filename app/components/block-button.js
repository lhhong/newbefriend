import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
export default class BlockButtonExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button block> Primary </Button>
                    <Button block success> Success </Button>
                    <Button block info> Info </Button>
                    <Button block warning> Warning </Button>
                    <Button block danger> Danger </Button>
                </Content>
            </Container>
        );
    }
}