import React, { useState } from "react";
import FlightCard from "../FlightCard/FlightCard";
import FlightsListStyles from "./FlightsList.module.css";

const FlightsList = ({ flights, onClick, visibleCount }) => {
  return (
    <div className={FlightsListStyles.flightslist}>
      {flights &&
        flights
          .slice(0, visibleCount)
          .map((flight, i) => (
            <FlightCard
              key={i}
              flight={flight.flight}
              price={flight.flight.price}
              legs={flight.flight.legs}
            />
          ))}
      {flights && visibleCount < flights.length && (
        <button className={FlightsListStyles.btn_add} onClick={onClick}>
          Показать еще
        </button>
      )}
    </div>
  );
};

export default FlightsList;
