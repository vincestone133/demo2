import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["vietnamese"] });
import React, { useState, useEffect } from "react";
import { NavigationMenu } from "@/containers/navBar";
import { HomeSection } from "@/containers/homeSection";
import { AboutMeSection } from "@/containers/aboutSection";
interface SectionType {
  id: string;
  label: string;
}
export default function Home() {
  const sections: SectionType[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact Me" },
  ];
  const [activeLink, setActiveLink] = useState(sections[0].id);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((section, index) => {
        if (
          scrollPosition >= section.offsetTop &&
          (index === sections.length - 1 ||
            scrollPosition < sections[index + 1].offsetTop)
        ) {
          setActiveLink(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <NavigationMenu
        sections={sections}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      ></NavigationMenu>
      <article className="flex flex-col w-full">
        <HomeSection></HomeSection>
        <AboutMeSection></AboutMeSection>
      </article>
    </>
  );
}
