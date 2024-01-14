import React from "react";
import * as ST from "./styled";

const Spinner: React.FC = () => (
  <ST.Container>
    <ST.Background></ST.Background>
    <ST.LoaderWrapper>
      <ST.Spinner />
    </ST.LoaderWrapper>
  </ST.Container>
);

export default Spinner;
