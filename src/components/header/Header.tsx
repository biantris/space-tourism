import React from "react";
import Link from "next/link";
import { navLinks } from "../../data/data";
import styled from "styled-components";
import MenuIcon from "../../../public/assets/shared/MenuIcon";

const ContentHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 96px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
    }

    li {
        display: flex;
        cursor: pointer;
        align-items: center;
        font-family: 'Barlow Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        color: #FFFFFF;
        margin-right: 20px; 
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const Nav = styled.div`
    display: flex;
    margin-right: 160px;

    @media (max-width: 1020px) {
        margin-right: 0px;
    }
`;

const Icon = styled.div`
    display: flex;
    margin-left: 50px;
`;

export const Header = () => {
  return (
    <ContentHeader>
    <Icon>
    <MenuIcon />
    </Icon>
    <header>
      <Nav>
        {navLinks.map((link, index) => {
          return (
            <ul>
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </Nav>
    </header>
    </ContentHeader>
  );
}