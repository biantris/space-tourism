import React from "react";
import Link from "next/link";
import { navLinks } from "../../data/data";
import styled from "styled-components";

const ContentHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 96px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    justify-content: flex-end;
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
        align-items: center;
        margin: 0px 20px;
        padding: 0px 20px;
        border-bottom: 1px solid #d0d6f9;
    }
`;

export const Header = () => {
  return (
    <ContentHeader>
    <header>
      <nav>
        {navLinks.map((link, index) => {
          return (
            <ul>
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
    </ContentHeader>
  );
}