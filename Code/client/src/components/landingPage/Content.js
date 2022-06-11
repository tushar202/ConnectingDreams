import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import classes from "./Content.module.css";
import { Divider } from "antd";
import Lottie from "react-lottie-player";
import lottiejson from "../../assets/LandingPage.json";

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
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "120px",
          }}
        >
          <Tabs
            onChange={(activeKey) => {
              setActiveTabkey(activeKey);
            }}
            tabPosition={dimensions.width < 500 ? "top" : "left"}
          >
            <TabPane tab={<Avatar name="1" color="green" size={40} />} key="1">
              <div
                style={{
                  width: dimensions.width < 500 ? dimensions.width : "600px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  style={{
                    width: 280,
                    height: 280,
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <h4 style={{ textAlign: "center", marginTop: "-30px" }}>
                  Build &#38; Manage Forms
                </h4>
              </div>
            </TabPane>
            <TabPane tab={<Avatar name="2" color="green" size={40} />} key="2">
              <div
                style={{
                  width: dimensions.width < 500 ? dimensions.width : "600px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Lottie
                  loop
                  animationData={lottieJson2}
                  play
                  style={{
                    width: 250,
                    height: 250,
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <h4 style={{ textAlign: "center", marginTop: "0px" }}>
                  Upload Form Reference
                </h4>
              </div>
            </TabPane>
            <TabPane tab={<Avatar name="3" color="green" size={40} />} key="3">
              <div
                style={{
                  width: dimensions.width < 500 ? dimensions.width : "600px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Lottie
                  loop
                  animationData={lottieJson3}
                  play
                  style={{
                    width: 300,
                    height: 300,
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <h4 style={{ textAlign: "center", marginTop: "-50px" }}>
                  Collect &#38; Download Responses
                </h4>
              </div>
            </TabPane>
          </Tabs>
        </div> */}
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
