import React from "react";
import { CircleImg } from "@/components/Imgs";
import { NavigationContact } from "@/containers/navContact";
import { BigHeading } from "@/components/Headings";
export const HomeSection = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center partSection"
      // style={{ backgroundColor: "red" }}
      style={{ backgroundImage: `url(./imgs/bg01.png)` }}
    >
      <CircleImg
        src="./imgs/ava01.png"
        $resize="500"
        $position="absolute"
        className="img-1"
      ></CircleImg>
      <div className="w-screen flex flex-col mx-24">
        <h1 className="svn-text text-white py-4">Nguyễn Quang Sơn</h1>
        <div className="flex justify-between">
          <BigHeading>Front-End</BigHeading>
          <BigHeading>Developer</BigHeading>
        </div>
        <h1 className="svn-text ml-auto py-4">Junior Dev</h1>
        <div className="static">
          <NavigationContact></NavigationContact>
        </div>
      </div>
    </section>
  );
};
