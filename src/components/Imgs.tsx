import styled from "styled-components";
export const CircleImg = styled.img<{ $resize?: string; $position: string }>`
  border-radius: ${(props) => props.$resize}px;
  border: 14px solid #fff;
  position: ${(props) => props.$position};
  left: calc(50% - ${(props) => props.$resize}px / 2);
  width: ${(props) => props.$resize}px;
  height: ${(props) => props.$resize}px;
  background: #d9d9d9;
  box-shadow: 0px 0px ${(props) => props.$resize}px rgba(255, 255, 255, 0.2),
    0px 0px 83px 0px rgba(0, 0, 0, 0.7);
  object-fit: cover;
`;
