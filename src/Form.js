import React from "react";
import {Form} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';



export default class Forms extends React.Component {
  render() {
    return (
      <form>
        <container>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control type="text" placeholder="e.g. John Doe" />
          </Form.Group>
          <Row>
             <Col>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Phone Number</Form.Label>
            <Form.Control type="email" placeholder="e.g. 04xxxxxxx" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="e.e. j.doe@gmail.com" />
            </Form.Group>
            </Col>
          </Row>
      {/* <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Additional Message</Form.Label>
      <Form.Control as="textarea" rows="5" />
      </Form.Group> */}
      </container>
      </form>
    );
  }
}
