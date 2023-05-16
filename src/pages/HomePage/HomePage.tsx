import React from "react";
import {Helmet} from "react-helmet";
import {TestDiv} from "./styled";
import {PageWrapper} from "../../App.styled";

const HomePage: React.FC = () => {
  return <>
    <Helmet>
      <title>MW Marketplace</title>
    </Helmet>
    <title>Главная - MW Marketplace</title>
    <PageWrapper>
      <h1>Main page</h1>
    </PageWrapper>
  </>
}
export default HomePage;
