import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Grow from "@mui/material/Grow";

const CardPage = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}cdf/view`
    );
    if (response.data.length !== 0) {
      setCaseStudies(response.data);
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      {!isLoading && (
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
                      <Card.Title>
                        <Tooltip placement="top" title={`~ ${form.username}`}>
                          {caseStudy.title}
                        </Tooltip>
                      </Card.Title>
                      <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{ fontSize: "0.8em" }}
                      >
                        <Pill
                          display="inline-flex"
                          margin={0}
                          color="green"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <CalendarOutlined style={{ marginRight: "3px" }} />{" "}
                          {`${caseStudy.application_end_date.slice(0, 10)}`}
                        </Pill>
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
                        <Pill
                          display="inline-flex"
                          margin={0}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "fit-content",
                          }}
                        >
                          <IdcardOutlined style={{ marginRight: "3px" }} />{" "}
                          {caseStudy._id}
                        </Pill>
                      </Card.Subtitle>
                      <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{ fontSize: "0.8em" }}
                      >
                        <Pill
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
                        </Pill>
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
                        <Pill
                          display="inline-flex"
                          margin={0}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "fit-content",
                          }}
                        >
                          <IdcardOutlined style={{ marginRight: "3px" }} />{" "}
                          {caseStudy.location}
                        </Pill>
                      </Card.Subtitle>
                      <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{ fontSize: "0.8em" }}
                      >
                        <Pill
                          display="inline-flex"
                          margin={0}
                          color="green"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <CalendarOutlined style={{ marginRight: "3px" }} />{" "}
                          {`${caseStudy.createdAt.slice(0, 10)}`}
                        </Pill>
                      </Card.Subtitle>
                    </div>
                    <Card.Text>{form.description}</Card.Text>
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
                        Fill Form
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Grow>
      )}
    </>
  );
};

export default CardPage;
