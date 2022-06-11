import React from "react";
import NavbarPage from "../navbarPage"
import ContentPage from "./Content"; 
import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <NavbarPage />
      <ContentPage />
      <Link to="/form1">form1</Link>
      <Link to="/form2">form2</Link>
      <Link to="/form3">form3</Link>
    </>
  );
};

export default HomePage;
