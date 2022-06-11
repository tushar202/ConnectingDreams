import React from "react";
import NavbarPage from "../navbarPage";
import { Breadcrumb, Layout } from 'antd';
import SIOFormPage from "../sioFormPage";
const { Content } = Layout;

const DreamUploadPage = () => {
  return (
    <>
      <NavbarPage />
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>SIO</Breadcrumb.Item>
            <Breadcrumb.Item>DreamUpload</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content" style={{display: "flex", justifyContent: "center"}}>
            <div style={{width:"50%"}}>
                <SIOFormPage />
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default DreamUploadPage;
