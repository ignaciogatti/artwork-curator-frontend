import React from 'react';
import UploardForm from './UploadForm';
import ArtworkList from './ArtworkList';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ArtworkListContainer = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto" lg="auto">
                    <UploardForm />
                </Col>
                <Col md="auto" lg="auto">
                    <ArtworkList />
                </Col>
            </Row>
        </Container>
    );
}

export default ArtworkListContainer;