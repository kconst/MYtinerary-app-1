import React, {Fragment} from "react";
import { Modal} from "react-materialize";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Button = styled.div`
  color: none;
  padding: 20px 20px;
`;

const Icon = styled.img`
width: 50px;
height: 50px;
`;


const User = () => {
  return (
    <Fragment>
      <Modal
        trigger={
          <Button>
            <Icon src={require("../../images/user.png")} alt="userIcon" />
          </Button>
        }
      >
        <NavLink to="/signup">Create Account</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Modal>
    </Fragment>
  );
};

export default User;
