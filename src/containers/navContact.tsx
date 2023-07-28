import React from "react";
import { CircleButton } from "@/components/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export const NavigationContact = () => {
  return (
    <div className="absolute bottom-16 inset-x-0 flex justify-center mx-auto">
      <CircleButton href="#" $color={"#1C1E53"}>
        <FontAwesomeIcon icon={faFacebookF} beat />
      </CircleButton>
      <CircleButton href="#" $color={"#229D27"}>
        <FontAwesomeIcon icon={faPhone} beat />
      </CircleButton>
      <CircleButton href="#" $color={"#6E0707"}>
        <FontAwesomeIcon icon={faEnvelope} beat />
      </CircleButton>
      <CircleButton href="#" $color={"#452523"}>
        <FontAwesomeIcon icon={faInstagram} beat />
      </CircleButton>
    </div>
  );
};
