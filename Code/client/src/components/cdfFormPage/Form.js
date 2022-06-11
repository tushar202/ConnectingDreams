import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Upload, Button as Btn } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const FormPage = () => {
  const [psName, setPsName] = useState("");
  const [startDateApplication, setStartDateApplication] = useState("");
  const [endDateApplication, setEndDateApplication] = useState("");
  const [endDateSelection, setEndDateSelection] = useState("");
  const [startDateImplementation, setStartDate] = useState("");
  const [endDateImplementation, setEndDateImplementation] = useState("");
  const [tag, setTag] = useState("");
  const [location, setLocation] = useState("");

  const [file, setFile] = useState({
    fileList: [],
  });

  const handleUpload = ({ fileList }) => {
    console.log("fileList", fileList);
    setFile({ fileList });
  };

  const psNameChangeHandler = (event) => {
    setPsName(event.target.value);
  };
  const startDateAppChangeHandler = (event) => {
    setStartDateApplication(event.target.value);
  };
  const endDateAppChangeHandler = (event) => {
    setEndDateApplication(event.target.value);
  };
  const endDateSelectChangeHandler = (event) => {
    setEndDateSelection(event.target.value);
  };
  const startDateImplementChangeHandler = (event) => {
    setStartDate(event.target.value);
  };
  const endDateImplementChangeHandler = (event) => {
    setEndDateImplementation(event.target.value);
  };
  const tagChangeHandler = (event) => {
    setTag(event.target.value);
  };
  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    let formdata = new FormData();
    if (file.fileList.length > 0) {
      for (let i = 0; i < file.fileList.length; i++) {
        formdata.append("file", file.fileList[i].originFileObj);
      }
    }
    formdata.append("",);
    // const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}`);
  };

  return (
    <>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group>
          <Form.Label>Problem Statement</Form.Label>
          <Form.Control
            type="text"
            placeholder="Problem Statement Name"
            value={psName}
            onChange={psNameChangeHandler}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Case Study</Form.Label>
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
        <Form.Group className="mb-3" controlId="DateApplication">
          <Row>
            <Col>
              <Form.Label>Start Date of Application</Form.Label>
              <Form.Control
                type="date"
                placeholder="Start Date of Application"
                value={startDateApplication}
                onChange={startDateAppChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>End Date of Application</Form.Label>
              <Form.Control
                type="date"
                placeholder="End Date of Application"
                value={endDateApplication}
                onChange={endDateAppChangeHandler}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="endDateSelection">
          <Form.Label>End Date of Selection</Form.Label>
          <Form.Control
            type="date"
            placeholder="End Date of Selection"
            value={endDateSelection}
            onChange={endDateSelectChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="DateImplementation">
          <Row>
            <Col>
              <Form.Label>Start Date of Implementation</Form.Label>
              <Form.Control
                type="date"
                placeholder="Start Date of Implementation"
                value={startDateImplementation}
                onChange={startDateImplementChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>End Date of Implementation</Form.Label>
              <Form.Control
                type="date"
                placeholder="End Date of Implementation"
                value={endDateImplementation}
                onChange={endDateImplementChangeHandler}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="tags">
          <Row>
            <Col>
              <Form.Label>Tag / Domain</Form.Label>
              <Form.Select
                aria-label="Tag select"
                value={tag}
                onChange={tagChangeHandler}
                placeholder={"Tags"}
              >
                <option value="Education">Education</option>
                <option value="Hunger">Hunger</option>
                <option value="Athletics">Athletics</option>
                <option value="Environment">Environment</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={locationChangeHandler}
              />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormPage;
