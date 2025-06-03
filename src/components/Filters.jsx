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
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Music" ? "underline" : "none"}}>Music</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Culture" ? "underline" : "none"}}>Culture</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Activities" ? "underline" : "none"}}>Activities</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Kids" ? "underline" : "none"}}>Kids</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Sports" ? "underline" : "none"}}>Sports</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Lifestyle" ? "underline" : "none"}}>Lifestyle</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Festival" ? "underline" : "none"}}>Festival</button>
    </ul>
  );
}

export default Filters;
