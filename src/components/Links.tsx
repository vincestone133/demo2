import styled from "styled-components";
export const NavLink = styled.a`
  color: var(--dark-color);
  font-family: var(--font-main);
  font-weight: normal;
  font-size: 16px;
  text-decoration: none;
  position: relative;
  transition: all 0.6s;
  &:before {
    content: "";
    width: 0;
    z-index: 2;
    height: 2px;
    position: absolute;
    bottom: -1px;
    left: 50%;
    background: var(--dark-color);
    transition: all 0.5s;
  }
  &.active,
  &:hover {
    &:before {
      width: 100%;
      left: 0;
      background: var(--bluedark-color);
    }
  }
`;
