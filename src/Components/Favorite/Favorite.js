import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Favorite() {
  return (
    <div>
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </div>
  );
}
