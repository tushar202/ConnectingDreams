import React,{useState} from "react";
import {Form, Row, Col, Button} from "react-bootstrap";


const FormPage = () => {
  const [teamName, setTeamName] = useState("");
  const [userName, setUserName] = useState("");
  const [noMembers, setNoMembers] = useState(1);

  const teamNameChangeHandler = (event) => {
    setTeamName(event.target.value);
  }
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  }
  const noMembersChangeHandler = (event) => {
    setNoMembers(event.target.value);
  }

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
                value={teamName}
                onChange={teamNameChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={userName}
                onChange={userNameChangeHandler}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>No. of Team Members: {noMembers}</Form.Label>
          <Form.Range step={1} min={1} max={10} value={noMembers} onChange={noMembersChangeHandler}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Proposal</Form.Label>
          <Form.Control type="text" placeholder="Proposal" />
        </Form.Group>
       
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormPage;