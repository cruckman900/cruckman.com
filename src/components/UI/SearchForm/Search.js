import React from 'react';
import Form from 'react-bootstrap/Form';

const Form = () => {
    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
        </Form>
    );
};