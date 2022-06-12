import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import axios from 'axios';
import NProgress from "nprogress";
import {useNavigate} from "react-router-dom";
import "../authPage/nprogress.css";
import { showNotification } from '@mantine/notifications';

const FormPage = () => {
    const [sioName, setSioName] = useState("");
    // const [userName, setUserName] = useState("");
    const [dreamName, setDreamName] = useState("");
    const [dreamLink, setDreamLink] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    // const [email, setEmail] = useState("");
    const history = useNavigate();
    const sioNameChangeHandler = (event) => {
        setSioName(event.target.value);
    }
    // const userNameChangeHandler = (event) => {
    //     setUserName(event.target.value);
    // }
    const phoneNoChangeHandler = (event) => {
        setPhoneNo(event.target.value);
    }
    // const emailChangeHandler = (event) => {
    //     setEmail(event.target.value);
    // }
    const dreamNameChangeHandler = (event) => {
        setDreamName(event.target.value);
    }
    const dreamLinkChangeHandler = (event) => {
        setDreamLink(event.target.value);
    }

    const formSubmitHandler = async(event) => {
        event.preventDefault();
        NProgress.start();
        const token = localStorage.getItem("auth-token");
        const reqBody = {
            name: sioName,
            titleOfDream: dreamName,
            link:dreamLink,
            contact: phoneNo,
        }
        const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}sio/uploadDream`, reqBody,{
            headers: { "x-auth-token": token },
          });
        if(response.data.message === "submitted successfuly"){
            NProgress.done();
            console.log("Success");
            showNotification({
                title: 'Upload Status',
                message: 'Dream Uploaded Successfully!',
              })
              history('/');
        }else{
            console.log("failed");
        }
    }

  return (
    <>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className="mb-3">
          {/* <Row>
            <Col> */}
              <Form.Label>SIO Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="sio name"
                value={sioName}
                onChange={sioNameChangeHandler}
              />
            {/* </Col>
            <Col>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="user name"
                value={userName}
                onChange={userNameChangeHandler}
              />
            </Col>
          </Row> */}
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Row>
            <Col> */}
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="sio name"
                maxLength={10}
                value={phoneNo}
                onChange={phoneNoChangeHandler}
              />
            {/* </Col>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="user name"
                value={email}
                onChange={emailChangeHandler}
              />
            </Col>
          </Row> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="dreamName">
          <Form.Label>Dream Name</Form.Label>
          <Form.Control type="text" placeholder="dream name" value={dreamName} onChange={dreamNameChangeHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="dreamLink">
          <Form.Label>Dream Link</Form.Label>
          <Form.Control type="text" placeholder="dream link" value={dreamLink} onChange={dreamLinkChangeHandler}/>
        </Form.Group>
        
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormPage;
