import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Layout, Breadcrumb } from "antd";
import { Accordion } from "@mantine/core";
import { CalendarOutlined, IdcardOutlined } from "@ant-design/icons";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Badge } from "@mantine/core";
import { Timeline, Text } from '@mantine/core';
import "./Content.css";
import CMFormPage from "../cmFormPage";
const { Content, Footer } = Layout;

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const ContentPage = () => {
  const [isLoading, setIsloading] = useState(true);
  const [caseStudy, setCaseStudy] = useState({});
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const params = useParams();

  const history = useNavigate();

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}cdf/${params.id}`
      );
      if (response.data !== {}) {
        setCaseStudy(response.data);
      } else {
        console.log("Something Went Wrong!");
      }
      setIsloading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <style type="text/css">
        {`
          .ant-layout{
            min-height: 90vh;
          }
          .ant-breadcrumb-link:hover {
            cursor: pointer;
            color: black;
          }
          .site-layout-content{
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .mantine-1avyp1d{
            width: 100%;
          }
        `}
      </style>
      <Layout className="layout">
        <Content
          style={
            dimensions.width < 600
              ? { padding: "0 10px" }
              : { padding: "0 30px" }
          }
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>CaseStudy</Breadcrumb.Item>
            <Breadcrumb.Item>{caseStudy.title}</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col sm={12} md={5} lg={4}>
              <div
                className="site-layout-content"
                style={
                  dimensions.width < 768
                    ? { marginBottom: "20px" }
                    : { marginBottom: "0px" }
                }
              >
                <h3>{caseStudy.title}</h3>
                {isLoading && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress style={{ color: "#03ef62" }} />
                  </div>
                )}
                {!isLoading && (
                  <>
                    <Badge
                      display="inline-flex"
                      color="orange"
                      margin={8}
                      style={{ marginBottom: "10px" }}
                    >
                      <IdcardOutlined style={{ marginRight: "3px" }} /> ID:{" "}
                      {caseStudy._id}
                    </Badge>

                    <Badge
                      display="inline-flex"
                      color="orange"
                      margin={8}
                      style={{ marginBottom: "10px" }}
                    >
                      TAG: {caseStudy.tags[0]}
                    </Badge>

                    <Badge
                      display="inline-flex"
                      color="red"
                      margin={8}
                      style={{ marginBottom: "10px" }}
                    >
                      LOCATION:{caseStudy.location}
                    </Badge>

                    <Badge
                      display="inline-flex"
                      color="red"
                      margin={8}
                      style={{ marginBottom: "10px" }}
                    >
                      <CalendarOutlined style={{ marginRight: "3px" }} />{" "}
                      CREATED ON: {caseStudy.createdAt.slice(0, 10)}
                    </Badge>

                    <Accordion>
                      <Accordion.Item label="TimeLine" opened={true}>
                        <Timeline active={1} bulletSize={24} lineWidth={2}>
                          <Timeline.Item
                            title="Application Start Date"
                          >
                            <Text color="dimmed" size="sm">
                              {caseStudy.application_start_date.slice(0, 10)}
                            </Text>
                          </Timeline.Item>
                          <Timeline.Item
                            title="Application End Date"
                          >
                            <Text color="dimmed" size="sm">
                              {caseStudy.application_end_date.slice(0, 10)}
                            </Text>
                          </Timeline.Item>
                          <Timeline.Item
                            title="Selection Result Date"
                          >
                            <Text color="dimmed" size="sm">
                              {caseStudy.selection_process_result.slice(0, 10)}
                            </Text>
                          </Timeline.Item>
                          <Timeline.Item
                            title="Implementation Start Date"
                          >
                            <Text color="dimmed" size="sm">
                              {caseStudy.implementation_start?.slice(0, 10)}
                            </Text>
                          </Timeline.Item>
                          <Timeline.Item
                            title="Implementation End Date"
                          >
                            <Text color="dimmed" size="sm">
                              {caseStudy.implementation_end?.slice(0, 10)}
                            </Text>
                          </Timeline.Item>

                        </Timeline>
                      </Accordion.Item>

                      <Accordion.Item label="CaseStudy Link">
                        <a href={`${caseStudy.pdf_link[0].proposalLink}`}>Link to Case Study</a>
                      </Accordion.Item>

                    </Accordion>
                  </>
                )}
              </div>
            </Col>
            <Col sm={12} md={7} lg={8}>
              <div className="site-layout-content">
                <h3>Application Form</h3>
                <CMFormPage />
              </div>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </>
  );
};

export default ContentPage;
