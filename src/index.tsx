import * as React from "react";
import styled from "styled-components";
import ProductList from "./Components/ProductList";

const MainContainer = styled.div`
  max-width: 1600px;
  height: 100vh;
  margin: 0 auto;
`;

const TestApp = () => (
  <MainContainer>
    <ProductList />
  </MainContainer>
);

export default TestApp;
