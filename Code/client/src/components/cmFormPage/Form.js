import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Upload, Button as Btn } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import NProgress from "nprogress";
import "../authPage/nprogress.css";
import { showNotification } from '@mantine/notifications';


const FormPage = () => {
  const [teamName, setTeamName] = useState("");
  // const [userName, setUserName] = useState("");
  const [noMembers, setNoMembers] = useState(1);
  const [file, setFile] = useState({
    fileList: [],
  });
  const history = useNavigate();
  const params = useParams();

  const handleUpload = ({ fileList }) => {
    console.log("fileList", fileList);
    setFile({ fileList });
  };

  const teamNameChangeHandler = (event) => {
    setTeamName(event.target.value);
  };
  // const userNameChangeHandler = (event) => {
  //   setUserName(event.target.value);
  // };
  const noMembersChangeHandler = (event) => {
    setNoMembers(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    NProgress.start();

    let formdata = new FormData();
    const token = localStorage.getItem("auth-token");
    if (file.fileList.length > 0) {
      for (let i = 0; i < file.fileList.length; i++) {
        formdata.append("proposalLink", file.fileList[i].originFileObj);
      }
    }
    formdata.append("tname", teamName);
    formdata.append("size",noMembers);
    formdata.append("cdf_id", params.id);
    const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}team/teamProposal`, formdata, {
      headers: { "x-auth-token": token },
    })
    if (response.data.success) {
      console.log("Success");
      NProgress.done();
      showNotification({
        title: 'Response notification',
        message: 'Form Submitted Successfully!',
      })
      history('/')
    } else{
      console.log("Failed");
    }

  }

  return (
    <>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className="mb-3">
          {/* <Row>
            <Col> */}
              <Form.Label>Team Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=" Enter team name"
                value={teamName}
                onChange={teamNameChangeHandler}
              />
            {/* </Col> */}
            {/* <Col>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={userName}
                onChange={userNameChangeHandler}
              />
            </Col> */}
          {/* </Row> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>No. of Team Members: {noMembers}</Form.Label>
          <Form.Range
            step={1}
            min={1}
            max={10}
            value={noMembers}
            onChange={noMembersChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Proposal</Form.Label>
          <br />
          <Upload
            multiple={true}
            listType="pdf"
            fileList={file.fileList}
            onChange={handleUpload}
            beforeUpload={() => false}
          >
            <Btn icon={<UploadOutlined />}>Upload</Btn>
          </Upload>
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormPage;
