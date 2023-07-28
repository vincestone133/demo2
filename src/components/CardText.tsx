import React from "react";

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
