import React from "react";
import {Helmet} from "react-helmet";
import {ProductGroup, ProductGroupContainer, TestDiv} from "./styled";
import {PageWrapper} from "../../App.styled";
import {dummyProducts} from "../../dummyProducts/dummyProducts";
import ProductCard from "../../blocks";

const HomePage: React.FC = () => {
  return <>
    <Helmet>
      <title>Main page - MW Marketplace</title>
    </Helmet>
    <PageWrapper>
      <ProductGroup>
        <h2>Recommended goods </h2>
        <ProductGroupContainer>
          {dummyProducts.map((p)=>(
            <ProductCard{...p} key={p.id}/>
          ))}
        </ProductGroupContainer>
      </ProductGroup>
    </PageWrapper>
  </>
}
export default HomePage;
