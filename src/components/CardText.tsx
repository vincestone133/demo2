import React from "react";
import { styled } from "styled-components";
import { NeumorphismCircleImg } from "./Imgs";
export const SmallTextCard = (props: { title: string; children: string }) => {
  return (
    <div className="w-fit flex">
      <h3 className="font-bold mr-3">{props.title}: </h3>
      <p>{props.children}</p>
    </div>
  );
};

export const NormalTextCard = (props: {
  title: string;
  time: string;
  children: string;
}) => {
  return (
    <div className="w-full grid grid-cols-2 justify-between my-3">
      <h3 className="font-bold mr-3">{props.title}</h3>
      <h3 className="font-bold text-end text-[var(--warning-color)]">
        {props.time}
      </h3>
      <p className="col-span-2 text-[var(--gray-color)] italic">
        {props.children}
      </p>
    </div>
  );
};
export const NeumorphismContainer = styled.div`
  border-radius: 25px;
  background: #fff;
  height: 300px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
  padding: 15px 5px;
  align-items: center;
  transition: all 0.4s ease-in-out;
  & h4 {
    color: var(--bluedark-color);
    font-family: var(--font-mulish);
    font-weight: 800;
    font-size: 20px;
    text-transform: uppercase;
  }
  & p {
    color: var(--dark-color);
    font-family: var(--font-mulish);
    font-size: 16px;
  }
  & span {
    color: var(--warning-color);
    font-family: var(--font-mulish);
    font-weight: bold;
    font-size: 20px;
  }
  &:hover {
    background: var(--third-color);
    scale: 0.95;
    transition: all 0.4s ease-in-out;
  }
  &:hover > .circle-img {
    scale: 0.95;
  }
`;
export const NeumorphismCard = (props: {
  srcIcon?: string;
  title?: string;
  des?: string;
  time?: string;
}) => {
  return (
    <NeumorphismContainer className="flex flex-col">
      <NeumorphismCircleImg
        src={props?.srcIcon || "/icons/certificate.svg"}
      ></NeumorphismCircleImg>
      <div className="flex flex-col mt-2 flex-1 justify-between text-center">
        <h4>{props.title}</h4>
        <p>{props?.des}</p>
        <span>{props?.time}</span>
      </div>
    </NeumorphismContainer>
  );
};
