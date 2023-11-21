import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarStyle>
        <div>
          <h1 className={"navbar__brand"}>Netflix Indonesia</h1>
        </div>
        <div>
          <ul className={"navbar__list"}>
            <li className={"navbar__item"}>
              <Link className={"navbar__title"} to={"/"}>
                Home
              </Link>
            </li>
            <li className={"navbar__item"}>
              <Link className={"navbar__title"} to={"/add"}>
                Add Movie
              </Link>
            </li>
            <li className={"navbar__item"}>
              <Link className={"navbar__title"} to={"/popular"}>
                Popular
              </Link>
            </li>
          </ul>
        </div>
      </NavbarStyle>
    </NavbarContainer>
  );
}

const NavbarStyle = styled.nav`
  display: flex;
  flex-direction: column;

  .navbar__brand {
    font-size: 2.4rem;
    margin: 0 1rem;
    color: aquamarine;
  }
  .navbar__list {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
    align-items: center;
  }
  .navbar__item {
    margin-bottom: 1rem;
    background-color: aquamarine;
    padding: 1rem;
    border-radius: 10px;
  }

  .navbar__title {
    text-align: center;
    color: white;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .navbar__brand {
      margin-bottom: 0;
    }
    .navbar__list {
      flex-direction: row;
      text-align: center;
      align-items: center;
    }
    .navbar__item {
      margin: 0 1rem;
      padding: 1rem;
      border-radius: 10px;
    }
  }
`;
const NavbarContainer = styled.div`
  background-color: #000000;
  padding: 1rem;
  color: #000000;
`;

export default Navbar;
