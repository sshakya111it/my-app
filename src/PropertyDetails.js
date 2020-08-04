import React from "react";
import "./PropertyDetails.css";
import { Dropdown} from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Form} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default class PropertyDetails extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <p className="P">
          <h4>Property Details</h4>
        </p>
        <form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Street Address</Form.Label>
        <Form.Control type="text" placeholder="e.g. 123 Example Street" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
      <Form.Label>Suburb and Postcode</Form.Label>
      <Form.Control type="text" placeholder="City, Suburb, Postcode" />
      </Form.Group>
      <br></br>
      <container>

      <Row>
        <Col>
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Bedrooms
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>0</Dropdown.Item>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>2</Dropdown.Item>
              <Dropdown.Item>3</Dropdown.Item>
              <Dropdown.Item>4</Dropdown.Item>
              <Dropdown.Item>5+</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Bathroom
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>0</Dropdown.Item>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>2</Dropdown.Item>
              <Dropdown.Item>3</Dropdown.Item>
              <Dropdown.Item>4</Dropdown.Item>
              <Dropdown.Item>5+</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Car Space
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>0</Dropdown.Item>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>2</Dropdown.Item>
              <Dropdown.Item>3</Dropdown.Item>
              <Dropdown.Item>4</Dropdown.Item>
              <Dropdown.Item>5+</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      </container>

          <br></br>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Additional Details</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>
          <br>
          </br>
          <div className="mb-2">
          <Button variant="primary" size="lg">
            BOOK AN APPRAISAL
          </Button>
    
  </div>
        </form>
      </div>
    );
  }
}
