import React, {useState} from "react";
import { Modal, Tabs, Tab } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

const AuthModal = (props) => {
  const [key, setKey] = useState("login");

  const tabSelectHandler = (keyValue) => {
    setKey(keyValue);
  }  
  
  return (
    <>
      <style type="text/css">
        {`
          .nav-link {
            color: #B4C71E;
          }
          .nav-link:hover {
            color: #B4C71E;
          }
        `}
      </style>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Connecting Dreams</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={tabSelectHandler}
            className="mb-3"
          >
            <Tab eventKey="login" title="Login">
              <Login />
            </Tab>
            <Tab eventKey="register" title="Register">
              <Register />
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthModal;
