import React, { useContext } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import "./Filter.css";
import FilterContext from "../../context/FilterContext";

export default function Filter() {

  const {filter, setFilter} = useContext(FilterContext);


  const dropdownClickHandler = (e) => {
    const selectedFilter = e.target.innerHTML;
    setFilter(selectedFilter);
  };

  return (
    <div id="Filter">
      <DropdownButton variant="outline-secondary" title={filter}>
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
