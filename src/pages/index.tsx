import React, { FC, memo } from "react";
import FormPage from "./FormPage";
import Container from "../primitives/Container";

const Pages: FC = () => {
  return (
    <Container>
      <FormPage />
    </Container>
  );
};

export default memo(Pages);
