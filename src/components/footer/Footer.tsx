import Image from 'next/image'

import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  background: bisque;
  justify-content: center;
  align-items: center;
  height: 59px;
  padding: 5px;
  
  a {
    text-decoration: none;
    color: black;
    margin: 5px;
  }

`;

export const Footer = () => {
  return (
    <FooterContainer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
      <a
        href="https://github.com/biantris"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by <b>biantris</b>
      </a>
    </FooterContainer>
  );
};
