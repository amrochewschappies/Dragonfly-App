import React, { useContext, useState } from "react";
import { FiltersContex } from "../context/FiltersContext";

function Filters() {
  const { setFilterType, setIsFiltering } = useContext(FiltersContex);
  const [selectedFilter, setSelectedFilter] = useState("None");

  const updateFilter = (event) => {
    setIsFiltering(true);
    setFilterType(event.target.innerHTML);
    setSelectedFilter(event.target.innerHTML);
  }

  const removeFilters = (event) => {
    setIsFiltering(false);
    setFilterType(event.target.innerHTML);
    setSelectedFilter("None");
  }

  return (
    <ul id="filters-container">
      <p className="responsiveness-hide filters-heading">Filters</p>
      <button onClick={(e) => {removeFilters(e)}} className="filter-option" style={{textDecoration : selectedFilter === "None" ? "underline" : "none"}}>None</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Wellness" ? "underline" : "none"}}>Wellness</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Adventure" ? "underline" : "none"}}>Adventure</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Sports" ? "underline" : "none"}}>Sports</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Outdoor" ? "underline" : "none"}}>Outdoor</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Festival" ? "underline" : "none"}}>Festival</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Lifestyle" ? "underline" : "none"}}>Lifestyle</button>
    </ul>
  );
}

export default Filters;
