import React from "react";
import { useLocation } from "react-router-dom";
import NavbarPage from "../navbarPage";
import { Breadcrumb, Layout } from 'antd';
import CDFFormPage from "../cdfFormPage";
const { Content } = Layout;

const CaseStudyUploadPage = () => {
    const location = useLocation()
  return (
    <>
    <NavbarPage />
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>CDF</Breadcrumb.Item>
            <Breadcrumb.Item>Create CaseStudy</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content" style={{display: "flex", justifyContent: "center"}}>
            <div style={{width:"50%"}}>
                <CDFFormPage sioId={location.state.id}/>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  )
}

export default CaseStudyUploadPage