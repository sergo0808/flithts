import React, { useState } from "react";
import AppStyles from "./App.module.css";
import result from "../../data/flights.json";
import FlightsList from "../FlightsList/FlightsList";
import Filters from "../Filters/Filters";

const App = () => {
  const [flights, setFlights] = useState(result["result"]["flights"]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();

  const handleFilterBy = (e) => {
    const selectedSortBy = e.target.value;
    setFilterBy(selectedSortBy);
    handleFilter(selectedSortBy);
  };

  const handleFilter = (selectedSortBy) => {
    if (!flights) {
      return;
    }

    let sortedFlights = [...flights];
    if (selectedSortBy === "segments0") {
      sortedFlights = sortedFlights.filter((item) => item.flight.legs[0].segments.length === 1);
    } else if (selectedSortBy === "segments1") {
      sortedFlights = sortedFlights.filter((item) => item.flight.legs[0].segments.length === 2);
    }
    setFlights(sortedFlights);
  };

  const handleSortBy = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
    handleSorted(selectedSortBy);
  };
  const handleSorted = (selectedSortBy) => {
    let sortedFlights = [...flights];
    if (selectedSortBy === "priceAsc") {
      sortedFlights.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
    } else if (selectedSortBy === "priceDesc") {
      sortedFlights.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
    } else if (selectedSortBy === "duration") {
      sortedFlights.sort((a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration);
    }
    setFlights(sortedFlights);
  };

  const handleAddMore = () => {
    setVisibleCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={AppStyles.app}>
      <Filters
        onSorted={handleSortBy}
        sortBy={sortBy}
        filterBy={filterBy}
        onFilter={handleFilterBy}
        value={value}
        setValue={setValue}
        value2={value2}
        setValue2={setValue2}
      />
      <FlightsList
        flights={flights}
        onClick={handleAddMore}
        visibleCount={visibleCount}
        setFlights={setFlights}
      />
    </div>
  );
};

export default App;
