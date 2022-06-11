import React, { useEffect, useState } from "react";
import { Layout, Breadcrumb, Tabs } from "antd";
import "./Content.css";
import CardPage from "./Card";

const { Content, Footer } = Layout;
const { TabPane } = Tabs;

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
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [activeTabKey, setActiveTabkey] = useState("1");
  const [category, setCategory] = useState("");

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


  return (
    <>
      <style type="text/css">
        {`
          .ant-layout{
            min-height: 90vh;
          }
          .ant-tabs-ink-bar {
            background-color: #B4C71E;
          }
          .ant-tabs-ink-bar-animated {
            background-color: #B4C71E;
          }
          .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn, .ant-tabs-tab:hover  {
            color: #B4C71E;
          }
          .ant-breadcrumb-link:hover {
            cursor: pointer;
            color: black;
          }
        `}
      </style>

      <Layout className="layout">
        <Content
          style={
            dimensions.width < 500
              ? { padding: "0 10px" }
              : { padding: "0 30px" }
          }
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {activeTabKey === "1" && (
              <Breadcrumb.Item>ProblemStatements</Breadcrumb.Item>
            )}
          </Breadcrumb>
          <div className="site-layout-content">
            {activeTabKey === "1" && category === "" && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                {/* <SearchBar /> */}
              </div>
            )}
            <Tabs
              onChange={(activeKey) => {
                setActiveTabkey(activeKey);
              }}
              tabPosition={dimensions.width < 500 ? "top" : "left"}
            >
              <TabPane tab="Categories" key="1">
                <CardPage />
              </TabPane>
            </Tabs>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </>
  );
};

export default ContentPage;
