import styled from "styled-components";

export const TestDiv = styled.div`
  background-color: aqua;
  height: 20px;
`
export const ProductGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  * > {
    width: 16.666666%;
    margin-bottom: 20px;
  }
`

export const ProductGroup = styled.div`
  margin-top: 20px;

  > *:first-child {
    margin-bottom: 10px;
  }
`
