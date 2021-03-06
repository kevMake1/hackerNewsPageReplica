import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import './Favorite.css';

export default function Favorite(props) {
  const [favorite, setFavorite] = useState(props.isFav);

  const clickAndSet = () =>{
    clickHandler();
    props.favClicked();
  }

  const clickHandler = () => {
    setFavorite(!favorite);
  };

  return (
 
      <FontAwesomeIcon
        className={'heart'}
        style={{ color: favorite ? "#ff577f" : "gray" }}
        onClick={clickAndSet}
        icon={faHeart}
        size="2x"
      />

  );
}

