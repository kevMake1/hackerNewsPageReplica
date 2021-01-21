import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Favorite() {
  const [favorite, setFavorite] = useState(false);

  const clickHandler = () => {
    setFavorite(!favorite);
  };

  return (
 
      <FontAwesomeIcon
        className={'heart'}
        style={{ color: favorite ? "#ff577f" : "gray" }}
        onClick={clickHandler}
        icon={faHeart}
        size="2x"
      />

  );
}
