import React from "react";
import { Container } from "react-bootstrap";

import Form from "./Form";

const CDFFormPage = (props) => {
  return (
    <Container>
      <Form sioId={props.sioId}/>
    </Container>
  );
};

export default CDFFormPage;