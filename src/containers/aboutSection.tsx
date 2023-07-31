import React from "react";
import { CircleImg } from "@/components/Imgs";
import { UnderlineHeading } from "@/components/Headings";
import { SmallTextCard, NormalTextCard } from "@/components/CardText";
export const AboutMeSection = () => {
  return (
    <section id="about" className="h-screen partSection grid grid-cols-2">
      <div className="bg-[var(--bluedark-color)] text-white p-20">
        <AboutQuote></AboutQuote>
      </div>
      <div className="bg-[var(--first-color) p-20">
        <AboutInfo />
      </div>
    </section>
  );
};
export const AboutQuote = () => {
  return (
    <div className="flex flex-col items-center w-full gap-7">
      <CircleImg
        src="./imgs/ava01.png"
        $resize="500"
        $position="static"
        className="img-1"
      ></CircleImg>
      <h1 className=" svn-text">About Me</h1>
      <p className="text-justify font-bold italic text-[20px]">
        "Imagination is everything. It is the preview of life's coming
        attractions."
      </p>
      <p className="text-justify">
        I am a person who loves beauty and has graphic design skills. I always
        take a holistic view when designing the interface. In addition, I also
        know to be a great programmer. As a perfectionist, learning more and
        practicing more is my daily duty.
      </p>
    </div>
  );
};
export const AboutInfo = () => {
  return (
    <div className="flex flex-col items-stretch w-full gap-5">
      <AboutSummary />
      <AboutEducation />
      <AboutArchieves />
    </div>
  );
};
export const AboutSummary = () => {
  const currentInfo = [
    { title: "Name", description: "Nguyễn Quang Sơn" },
    { title: "D.o.B", description: "13/03/2001" },
    { title: "Gmail", description: "nguyenquangson2k1@gmail.com" },
    { title: "Phone", description: "0345 169 775" },
    { title: "Address", description: "Ha Noi, Viet Nam" },
    { title: "Github", description: "github.com/vincestone133" },
  ];
  return (
    <div className="">
      <UnderlineHeading>Sumary</UnderlineHeading>
      <div className="grid grid-cols-2 gap-3 mt-5">
        {currentInfo.map((info) => (
          <SmallTextCard title={info.title} key={info.title}>
            {info.description}
          </SmallTextCard>
        ))}
      </div>
    </div>
  );
};
export const AboutEducation = () => {
  const currentEducation = [
    {
      title: "Ha Noi Metropolitan University",
      time: "2019 - 2023",
      description: "Bachelor of Science in Information Technology, GPA: 3.51",
    },
    {
      title: "Aptech Computer Education",
      time: "2020 - 2021",
      description: "Learn PHP Course ",
    },
  ];
  return (
    <div className="">
      <UnderlineHeading>Eduction</UnderlineHeading>
      {currentEducation.map((info) => (
        <NormalTextCard title={info.title} time={info.time} key={info.title}>
          {info.description}
        </NormalTextCard>
      ))}
    </div>
  );
};
export const AboutArchieves = () => {
  return (
    <div className="">
      <UnderlineHeading>Archievements</UnderlineHeading>
    </div>
  );
};
export default AboutMeSection;
