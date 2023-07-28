import styled from "styled-components";
export const BigHeading = styled.h1`
  color: var(--second-color);
  font-family: Mulish;
  font-size: 6vw;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: capitalize;
`;
export const SvnText = styled.p`
  font-family: var(--font-svn);
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: capitalize;
`;
export const UnderlineHeading = styled.h2`
  text-transform: uppercase;
  font-family: var(--font-main);
  position: relative;
  font-size: 20px;
  font-weight: 800;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--dark-color);
  }
`;
