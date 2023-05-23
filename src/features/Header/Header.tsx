import React from "react";
import {
  BtnCart,
  BtnFavorites,
  BtnNotifications,
  BtnOrders,
  BtnSearch,
  Burger,
  LeftSide,
  Logo,
  RightSide,
  SearchWrapper,
  Wrapper
} from "./styled";
import {paths} from 'routes/helpers'
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import {selectIsLogged} from "../App/selectors";
import UserDropdownMenu from './UserDropdownMenu';




const Header: React.FC = () => {
  const isLogged = useSelector(selectIsLogged)
  return (
    <Wrapper>
      <LeftSide>
        <h1>Logo </h1>
        <Button>
          <Burger>
            <div></div>
            <div></div>
          </Burger>
          <span>Catalog</span>
        </Button>
      </LeftSide>
      <SearchWrapper>
        <input placeholder='product search'/>
        <BtnSearch/>
      </SearchWrapper>
      <RightSide>
        {
          isLogged ? <>
            <BtnOrders count={4}/>
            <BtnFavorites count={5}/>
            <BtnNotifications count={5} />
            <BtnCart  count={5}/>
            <UserDropdownMenu />
          </> : (
            <Link to={paths.login}>
              &nbsp;&nbsp;&nbsp;
              Sing In
            </Link>
          )
        }
      </RightSide>
    </Wrapper>

  );
}
export default Header;
