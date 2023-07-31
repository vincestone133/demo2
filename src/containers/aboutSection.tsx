import React from "react";

import { CircleImg } from "@/components/Imgs";
import { UnderlineHeading } from "@/components/Headings";
import {
  SmallTextCard,
  NormalTextCard,
  NeumorphismCard,
} from "@/components/CardText";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

export const AboutMeSection = () => {
  return (
    <section id="about" className="h-screen partSection grid grid-cols-2">
      <div className="bg-[var(--bluedark-color)] text-white p-20">
        <AboutQuote></AboutQuote>
      </div>
      <div className="bg-[var(--first-color) p-20 pb-10">
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
        &quot;Imagination is everything. It is the preview of life's coming
        attractions.&quot;
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
    <div className="flex flex-col items-stretch w-full h-full gap-5">
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
  const currentArchieves = [
    {
      src: "/icons/certificate.svg",
      title: "IELTS certificate",
      des: "Score 5.5",
      time: "2019",
    },
    {
      src: "/icons/adward.svg",
      title: "Aptech’s schoolarship",
      des: "",
      time: "2020",
    },
    {
      src: "/icons/certificate.svg",
      title: "F8’s Certificate",
      des: "HTML & CSS",
      time: "2022",
    },
    {
      src: "/icons/research_paper.svg",
      title: "the scientific research awards",
      des: "First Prize - Graphic Design",
      time: "2021",
    },
    {
      src: "/icons/research_paper.svg",
      title: "the scientific research awards",
      des: "Third Prize -IOT Project",
      time: "2021",
    },
    {
      src: "/icons/certificate.svg",
      title: "University’s Schoolarships",
      des: "Occurs once a year",
      time: "2020-2023",
    },
    {
      src: "/icons/research_paper.svg",
      title: "scientific paper",
      des: "Published in the journal of Tan Trao University",
      time: "2023",
    },
  ];
  return (
    <div className="flex-1">
      <UnderlineHeading>Archievements</UnderlineHeading>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        style={{ margin: "20px -20px" }}
      >
        {currentArchieves.map((info) => (
          <SwiperSlide className="p-5 pb-14" key={info.title.trim()}>
            <NeumorphismCard
              srcIcon={info.src}
              title={info.title}
              des={info.des}
              time={info.time}
            ></NeumorphismCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default AboutMeSection;
