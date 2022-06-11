import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import classes from "./Content.module.css";
import { Divider } from "antd";
import Lottie from "react-lottie-player";
import lottiejson from "../../assets/LandingPage.json";
import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Dreams Received", "Dreams Fulfilled"],
  ["2018", 8175000, 8008000],
  ["2019", 3792000, 3694000],
  ["2020", 3695000, 2896000],
  ["2021", 2099000, 1953000],
  ["2022", 1526000, 1517000],
];

export const data2 = [
  ["Roles", "Numbers"],
  ["Social Organization", 11],
  ["Changemakeres", 20],
  ["Mentors", 30],
];

export const options2 = {
  title: "My Daily Activities",
};

export const options = {
  chartArea: { width: "50%" },
  hAxis: {
    title: "Dreams Connected",
    minValue: 0,
  },
  vAxis: {
    title: "Year",
  },
};


const Content = () => {
  const history = useNavigate();
  const onGetStartedClick = () => {
    history('/home')
  }
  return (
    <>
      <Container style={{ paddingTop: "2.5em" }}>
        <Row>
          <Col lg={true} style={{ paddingTop: "0.7em" }}>
            <div className={classes["bannerTitle"]}>
              Connecting Dreams,
              <br />
              Changing Lives.
            </div>
            <p className={classes["bannerDescp"]}>
            We provide the youth with an opportunity to empower people through entrepreneurial action to improve their livelihoods in an {" "}
              <span style={{ color: "#B4C71E", fontWeight: "bold" }}>
              economically, socially and environmentally sustainable way.
              </span>{" "}
            </p>
            <Button onClick={onGetStartedClick} size="lg" variant="dark">
              Get started
            </Button>
          </Col>
          <Col
            lg={true}
            style={{
              height: "500px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Lottie
              loop
              animationData={lottiejson}
              play
              style={{
                width: 280,
                height: 280,
                display: "flex",
                justifyContent: "center",
              }}
            />
          </Col>
        </Row>
        <Divider style={{ fontSize: "2em", fontWeight: "bold" }}>
        </Divider>
        <div>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      <Chart
        chartType="PieChart"
        data={data2}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
        
      </Container>
      {/* <SimpleReactFooter
        description={description}
        title={title}
        columns={columns}
        iconColor="black"
        backgroundColor="#212529"
        fontColor="white"
      /> */}
    </>
  );
};
    
export default Content;
