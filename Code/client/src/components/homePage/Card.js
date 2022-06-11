import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import { CalendarOutlined, IdcardOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { Badge } from "@mantine/core";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";
import Grow from "@mui/material/Grow";

const CardPage = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    const fetchFunction = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}cdf/view`
      );
      console.log(response.data);
      if (response.data.length !== 0) {
        setCaseStudies(response.data);
      }
      setIsLoading(false);
    };
    fetchFunction();
  }, []);

  return (
    <>
      <h1>Problem Statements</h1>
      <br />
      {!isLoading ? (
        <Grow
          in={!isLoading}
          style={{ transformOrigin: "50 50 50 50" }}
          {...(!isLoading ? { timeout: 1000 } : {})}
        >
          <Row
            className="g-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {caseStudies.map((caseStudy) => {
              return (
                <Col
                  xs={12}
                  md={6}
                  lg={4}
                  xl={3}
                  style={{ display: "flex", justifyContent: "center" }}
                  key={caseStudy._id}
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Card.Title>{caseStudy.title}</Card.Title>
                        <Card.Subtitle
                          className="mb-2 text-muted"
                          style={{ fontSize: "0.8em" }}
                        >
                          <Badge
                            display="inline-flex"
                            margin={0}
                            color="orange"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "fit-content",
                            }}
                          >
                            <IdcardOutlined style={{ marginRight: "3px" }} />{" "}
                            {caseStudy._id}
                          </Badge>
                        </Card.Subtitle>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Card.Subtitle
                          className="mb-2 text-muted"
                          style={{ fontSize: "0.8em" }}
                        >
                        <Tooltip placement="top" title={"Application Deadline"}>
                          <Badge
                            display="inline-flex"
                            margin={0}
                            color="lime"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <CalendarOutlined style={{ marginRight: "3px" }} />{" "}
                            {`${caseStudy.application_end_date.slice(0, 10)}`}
                          </Badge>
                        </Tooltip>
                        </Card.Subtitle>
                        <Card.Subtitle
                          className="mb-2 text-muted"
                          style={{ fontSize: "0.8em" }}
                        >
                          <Badge
                            display="inline-flex"
                            margin={0}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "fit-content",
                            }}
                            color="red"
                          >
                            {caseStudy.tags[0]}
                          </Badge>
                        </Card.Subtitle>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "3px 0px"
                        }}
                      >
                        <Card.Subtitle
                          className="mb-2 text-muted"
                          style={{ fontSize: "0.8em" }}
                        >
                          <Tooltip placement="top" title={"location"}>
                            <Badge
                              display="inline-flex"
                              margin={0}
                              color="orange"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                width: "fit-content",
                              }}
                            >
                              <IdcardOutlined style={{ marginRight: "3px" }} />{" "}
                              {caseStudy.location}
                            </Badge>
                          </Tooltip>
                        </Card.Subtitle>
                        <Card.Subtitle
                          className="mb-2 text-muted"
                          style={{ fontSize: "0.8em" }}
                        >
                        <Tooltip placement="top" title={"Event Created On"}> 
                          <Badge
                            display="inline-flex"
                            margin={0}
                            color="lime"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <CalendarOutlined style={{ marginRight: "3px" }} />{" "}
                            {`${caseStudy.createdAt.slice(0, 10)}`}
                          </Badge>
                        </Tooltip>

                        </Card.Subtitle>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant={"dark"}
                          onClick={() => {
                            history(`/caseStudy/${caseStudy._id}`);
                          }}
                          size="sm"
                        >
                          Participate
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Grow>
      ) : (
        <div style={{display: "flex", justidyContent: "center"}}> 
          <CircularProgress style={{ color: "#B4C71E" }} />
        </div>
      )}
    </>
  );
};

export default CardPage;
