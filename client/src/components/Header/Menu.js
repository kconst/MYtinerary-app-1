import React, {Fragment} from "react";
import { SideNav, SideNavItem} from "react-materialize";
import styled from "styled-components";

const Button = styled.div`
  color: none;
  padding: 20px 20px;
`;

const Hamburger = styled.img`
width: 50px;
height: 50px;
`
const User = styled.img`
width: 100px;
height: 100px;
` 

const Menu = () => {
  return (
    <Fragment>
      <SideNav
        trigger={
          <Button>
            <Hamburger src={require("../../images/menu.png")} alt="hamburgerIcon"/>
          </Button>
        }
        options={{ closeOnClick: true }}
      >
      <User src={require("../../images/user.png")} alt="user"/>
        <SideNavItem
          userView
          user={{
            background: "",
            
            name: "John Doe",
            email: "jdandturk@gmail.com"
          }}
        />
        <SideNavItem href="#!icon">
          First Link
        </SideNavItem>
        <SideNavItem href="#!second">Second Link</SideNavItem>
        <SideNavItem waves href="#!third">
          Third Link
        </SideNavItem>
      </SideNav>
    </Fragment>
  );
};
export default Menu;
