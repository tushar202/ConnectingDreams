import React, {useState, useEffect} from "react";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import {Link} from "react-router-dom";
import NavbarPage from "../navbarPage";
import "./index.css";
import axios from "axios";
import { Space, Table, Tag } from 'antd';
import { Tooltip } from "react-bootstrap";
const { Header, Content, Footer, Sider } = Layout;


const CDFAdminPage = () => {
    const[plans, setPlans] = useState([])
    const[shortlisting, isShortlisting] = useState(false);

    const onClickHandler = (key) => {

    } 

    const columns= [
        {
          title: 'SIOName',
          dataIndex: 'sioName',
          key: 'sioName',
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Link',
          dataIndex: 'link',
          key: 'link',
          render: (link) => <Link to={`${link}`}>link</Link>
        },
        {
          title: 'Contact',
          dataIndex: 'contact',
          key: 'contact',
        },
        {
          title: 'shortlist',
          key: 'shortlist',
          dataIndex: 'shortlist',
          render: (_, record) => (
            <Tooltip placement="top" title="Verify and Create CaseStudy">
                <Button type="primary" ghost disabled={isShortlisting} onClick={() => onClickHandler(record.key)}>
                Shortlist
              </Button>
            </Tooltip>
          ),
        },
      ];

      useEffect(() =>{
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}`);
            if(response.data){
                
            }
        }
        fetchData();
      },[])
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];



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
            <Table columns={columns} dataSource={data} />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  </>
};

export default CDFAdminPage;
