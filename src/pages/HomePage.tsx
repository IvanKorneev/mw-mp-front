import React from "react";
import {Helmet} from "react-helmet";
import {TestDiv} from "./styled";

const HomePage: React.FC = () => {
  return <>
    <Helmet>
      <title>MW Marketplace</title>
    </Helmet>
    <TestDiv/>
  </>
}
export default HomePage;
