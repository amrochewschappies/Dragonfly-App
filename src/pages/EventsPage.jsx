import React, { Fragment } from "react";
import EventCards from "../components/EventCards";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import EventsBackground from "../components/EventsBackground";
import "./EventsPage.css";

function EventsPage() {
  return (
    <Fragment>
      <EventsBackground />
      <div className="events-search-bar">
        <SearchBar />
      </div>
      <div id="main-container">
        <Filters />
        <EventCards />
      </div>
    </Fragment>
  );
}

export default EventsPage;
