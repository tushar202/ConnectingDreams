import React, {useState} from "react";
import ReactDOM from "react-dom";

import classes from "./index.module.css";
import NavbarPage from "../navbarPage";
import AuthModal from "../authPage/index";
import Content from "./Content";

const LandingPage = () => {
  const [visibility, setVisibility] = useState(false);
  const visibilityHandler = () => {
    setVisibility(true);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <AuthModal
          dialogClassName={classes["my-modal"]}
          show={visibility}
          onHide={() => setVisibility(false)}
        />,
        document.getElementById("modal")
      )}
      <NavbarPage onPress={visibilityHandler}/>
      <br />
      <Content />  
    </>
  );
};

export default LandingPage;
