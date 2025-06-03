import React, { Fragment } from "react";
import SearchResults from "../components/SearchResults";
import SearchResultsBackground from "../components/SearchResultsBackground";

function SearchPage() {
  return (
    <Fragment>
      <SearchResultsBackground />
      <SearchResults />
    </Fragment>
  );
}

export default SearchPage;
