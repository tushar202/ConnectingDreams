import React from "react";
import NavbarPage from "../navbarPage"
import Content from "./Content"; 
import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <NavbarPage />
      <br />
      <Content />
      <Link to="/form1">form1</Link>
    </>
  );
};

export default HomePage;
