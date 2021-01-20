import React, { useState, useContext } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import "./Filter.css";
import FilterContext from "../../context/filterContext";

export default function Filter() {
  const [buttonTitle, setButtonTitle] = useState("Top Stories");

  const filterContext = useContext(FilterContext);

  const dropdownClickHandler = (e) => {
    setButtonTitle(e.target.innerText);
    filterContext.filterSelected = buttonTitle;
  };

  return (
    <div id="Filter">
      <DropdownButton variant="outline-secondary" title={buttonTitle}>
        <Dropdown.Item onClick={dropdownClickHandler} href="#/action-1">
          Top Stories
        </Dropdown.Item>
        <Dropdown.Item onClick={dropdownClickHandler} href="#/action-2">
          New Stories
        </Dropdown.Item>
        <Dropdown.Item onClick={dropdownClickHandler} href="#/action-3">
          Best Stories
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
