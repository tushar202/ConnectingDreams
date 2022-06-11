import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap";

const FormPage = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Label>CDF Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Problem Statement Name"
                // value={fname}
                // onChange={fnameChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Form Field</Form.Label>
              <Form.Control
                type="text"
                placeholder="Field of the form"
                // value={lname}
                // onChange={lnameChangeHandler}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Case Study</Form.Label>
          <Form.Control type="text" placeholder="Upload Case Study" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Starting Date of Application" />
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Ending Date of application" />
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>End Date of Selection</Form.Label>
          <Form.Control type="date" placeholder="Enter Ending Date of Selection" />
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Start Date of Implementation</Form.Label>
          <Form.Control type="date" placeholder="Enter Starting Date of Implementation" />
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>End Date of Implementation</Form.Label>
          <Form.Control type="date" placeholder="Enter Ending Date of Implementation" />
        </Form.Group>


        <Form.Select aria-label="Default select example">
            <option>Domains</option>
            <option value="1">Education</option>
            <option value="2">Hunger</option>
            <option value="3">Athletic</option>
            <option value="3">Environment</option>
            <option value="3">Other</option>
        </Form.Select>
        
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter Current Location" />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormPage;