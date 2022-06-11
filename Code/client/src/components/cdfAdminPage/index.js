import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import NavbarPage from "../navbarPage";
import "./index.css";
import axios from "axios";
import { Table } from "antd";
const { Content, Footer, Sider } = Layout;

const CDFAdminPage = () => {
  const [dreamData, setDreamData] = useState([]);
  const [isVerifying, setIsVerifying] = useState(false);
  const history = useNavigate();

  const onClickHandler = (key) => {
    console.log(key);
    history('/createCaseStudy',{state:{id:key}});
  };

  const columns = [
    {
      title: "SIOName",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Title",
      dataIndex: "titleOfDream",
      key: "titleOfDream",
    },
    {
      title: "Link",
      dataIndex: "drive",
      key: "drive",
      render: (drive) => <Link to={`${drive}`}>link</Link>,
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Verify & Create CaseStudy",
      key: "_id",
      dataIndex: "_id",
      render: (_id, record) => (
          <Button
            type="primary"
            disabled={isVerifying}
            onClick={() => onClickHandler(_id)}
          >
            Verify and Create CaseStudy
          </Button>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("auth-token");

      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}cdf/getUnverifiedDreams`,
        {
          headers: { "x-auth-token": token },
        }
      );
      if (response.data.success) {
        console.log(response.data)
        setDreamData(response.data.dreams);
      }
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
    <NavbarPage />
    <Layout>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Pending Requests</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              // items={items2}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Table columns={columns} dataSource={dreamData} />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  </>
  );
};

export default CDFAdminPage;
