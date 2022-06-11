import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap";


const FormPage = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Label>Team Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=" Enter team name"
                // value={fname}
                // onChange={fnameChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                // value={lname}
                // onChange={lnameChangeHandler}
              />
            </Col>
          </Row>
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>File upload</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormPage;