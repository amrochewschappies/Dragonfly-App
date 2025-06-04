import React, { useContext, useState } from "react";
import { FiltersContex } from "../context/FiltersContext";

function Filters() {
  const { setFilterType, setIsFiltering } = useContext(FiltersContex);
  const [selectedFilter, setSelectedFilter] = useState("None");

  const updateFilter = (event) => {
    const filter = event.target.innerHTML;
    setIsFiltering(true);
    setFilterType(filter);
    setSelectedFilter(filter);
  };

  const removeFilters = (event) => {
    setIsFiltering(false);
    setFilterType("none");
    setSelectedFilter("None");
  };

  const filterOptions = [
    "None",
    "Wellness",
    "Adventure",
    "Sports",
    "Outdoor",
    "Festival",
    "Lifestyle",
  ];

  return (
    <ul
      id="filters-container"
      role="radiogroup"
      aria-labelledby="filters-heading"
    >
      <p
        className="responsiveness-hide filters-heading"
        id="filters-heading"
      >
        Filters
      </p>

      {filterOptions.map((filter) => (
        <li key={filter} style={{ listStyle: "none" }}>
          <button
            role="radio"
            aria-checked={selectedFilter === filter}
            aria-label={`Filter by ${filter}`}
            onClick={(e) =>
              filter === "None" ? removeFilters(e) : updateFilter(e)
            }
            className="filter-option"
            style={{
              textDecoration:
                selectedFilter === filter ? "underline" : "none",
            }}
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Filters;
