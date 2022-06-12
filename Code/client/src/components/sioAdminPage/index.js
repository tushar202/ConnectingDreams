import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import NavbarPage from "../navbarPage";
import "./index.css";
import axios from "axios";
import { Space, Table, Tag } from "antd";
const { Header, Content, Footer, Sider } = Layout;


const CDFAdminPage = () => {
  const [plans, setPlans] = useState([]);
  const [shortlisting, isShortlisting] = useState(false);
  const token = localStorage.getItem("auth-token");
  
  const onClickHandler = async (key) => {
    console.log(key)
    const resp = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}sio/selectProposal`,
      {
        proposalId: key,
      },
      {
        headers: { "x-auth-token": token },
      }
    );

    if (resp.data.success) {
      console.log("shortlisted");
    }
  };

  const columns = [
    {
      title: "Team Name",
      dataIndex: "tname",
      key: "tname",
    },
    {
      title: "Team Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Link",
      dataIndex: "proposalLink",
      key: "proposalLink",
      render: (proposalLink) => <a href={`${proposalLink[0].proposalLink}`} type="_blank">link</a>,
    },
    {
      title: "Shortlist",
      key: "_id",
      dataIndex: "_id",
      render: (_id, record) => (
        <Button
          type="primary"
          onClick={onClickHandler.bind(null, _id)}
        >
          Shortlist
        </Button>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}sio/getProposal`,
        {
          headers: { "x-auth-token": token },
        }
      );
      if (response.data.success) {
        console.log(response.data.proposal[0].proposalLink[0].proposalLink)
        setPlans(response.data.proposal);
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
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
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
              <Table columns={columns} dataSource={plans} />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </>
  );
};

export default CDFAdminPage;
