import React from "react";
import { NavLink } from "../components/Links";
interface SectionType {
  id: string;
  label: string;
}
export const NavigationMenu = (props: {
  sections: SectionType[];
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <header className=" fixed right-20 top-10">
      <div className="container mx-auto flex justify-end items-center px-4">
        <div className="space-x-5">
          {props.sections.map((section) => (
            <NavLink
              href={`#${section.id}`}
              key={section.id}
              className={props.activeLink === section.id ? "active" : "link"}
            >
              {section.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavigationMenu;
