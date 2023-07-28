import styled from "styled-components";
export const CircleButton = styled.a<{ $color: string }>`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 0 15px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--first-color);
  background-color: ${(props) => props.$color};
  box-shadow: 0px 5px 30px #3e2840;
`;
